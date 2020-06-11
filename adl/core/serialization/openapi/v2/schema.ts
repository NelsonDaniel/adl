import { items, length } from '@azure-tools/linq';
import { isReference, StringFormat, v2 } from '@azure-tools/openapi';
import { anonymous, nameOf, refTo } from '@azure-tools/sourcemap';
import { PropertySignatureStructure } from 'ts-morph';
import { createTypeAlias } from '../../../model/schema/alias';
import { addConstraint, addEncoding, Constraints, Encodings } from '../../../model/schema/constraint';
import { addDefault } from '../../../model/schema/default';
import { createArray, createDictionary, createInterface, createPropertySignature } from '../../../model/schema/object';
import { TypeReference } from '../../../model/schema/type';
import { Identity } from '../../../model/types';
import { Context } from '../../../support/visitor';
import { isEnumSchema, isObjectSchema } from '../common';
import { arrayProperties, commonProperties, numberProperties, objectProperties, Options, processBooleanSchema, processByteArraySchema, processCharSchema, processDateSchema, processDateTimeSchema, processDurationSchema, processEnumSchema, processFileSchema, processIntegerSchema, processNumberSchema, processOdataSchema, processPasswordSchema, processTimeSchema, processUriSchema, processUuidSchema, stringProperties, versionInfo } from '../common/schema';

export async function processSchema(schema: v2.Schema|v2.SchemaReference, $: Context<v2.Model>, options?: { isAnonymous?: boolean }): Promise<TypeReference> {
  const here = $.normalizeReference(refTo(schema)).$ref;

  // did we already process this because we went thru a $ref earlier?
  let typeRef = $.visitor.references.schema.get(here);
  if( typeRef ) {
    return typeRef;
  }

  const impl = async () => {
    if( isReference(schema) ) {
      // this is a type reference, we need to process the target first.

      typeRef = $.visitor.references.schema.get($.normalizeReference(schema.$ref).$ref);
      // have we already got a reference for the target?
      if( !typeRef )  {
        // nope, not handled yet.
        const resolvedReference = await $.resolveReference(schema.$ref);
        typeRef = await processSchema(resolvedReference.node, resolvedReference.context);
      }

      if( !(options?.isAnonymous)) {
        // it has a name (which means it is intended to be a type alias at the top level) 
        typeRef = createTypeAlias($.api, nameOf(schema), typeRef, commonProperties(<v2.Schema>schema));
      }
      
      // return the target.
      return typeRef;
    }

    // returns a TypeReference for the type that we're processing
    // if it has to create the type, it should create it and store it in the api itself
    if (isEnumSchema(schema)) {
      return processEnumSchema(schema, $, options);
    }

    if (length(schema.allOf) > 0) {
      // this could be composition
      //  
      // or a back-door way to $ref 
      if (length(schema.allOf) === 1) {
        // if (!schema.properties) {
        // no properties, but inheritance,
        // return processSillyRef(schema, $, options);
        // }
      }
      // process schemas with allOf as objects 
      return processObjectSchema(schema, $, options);
    }

    switch (schema.type) {
      case v2.JsonType.String:
        return processStringSchema(schema, $, options);

      case v2.JsonType.Boolean:
        return processBooleanSchema(schema, $, options);

      case v2.JsonType.Array:
        return processArraySchema(schema, $, options);

      case v2.JsonType.Number:
        return constrainNumericSchema(schema, $, options, await processNumberSchema(schema, $));

      case v2.JsonType.Integer:
        return constrainNumericSchema(schema, $, options, await processIntegerSchema(schema, $));

      case v2.JsonType.File:
        return processFileSchema(schema, $, options);

      case v2.JsonType.Object:
        return processObjectSchema(schema, $, options);

      case undefined:
        // dig deeper to figure out what this should be.
        if (schema.items || schema.maxItems !== undefined || schema.uniqueItems) {
          // these only apply to arrays
          return processArraySchema(schema, $, options);
        }

        // first, let's see if we can tell by format:
        switch (schema.format) {
          // is it some kind of binary response?
          case StringFormat.Binary:
          case StringFormat.File:
            return processFileSchema(schema, $, options);
        }

        if (isObjectSchema(schema)) {
          // talk about properties or discriminator, pretty much mean object
          return processObjectSchema(schema, $, options);
        }
     

        if (schema.pattern || schema.maxLength !== undefined || schema.minLength !== undefined) {
          // these only apply to strings
          return processStringSchema(schema, $, options);
        }

        if (schema.minimum !== undefined || schema.maximum !== undefined || schema.exclusiveMaximum !== undefined || schema.exclusiveMinimum !== undefined || schema.multipleOf !== undefined) {
          // these only apply to numbers
          return constrainNumericSchema(schema, $, options, await processNumberSchema(schema, $));
        }
        break;
    }
    return $.api.schemas.primitives.any;
  };
  const result = await impl();

  // in most cases, we're not setting it during the processing.
  $.visitor.references.schema.set(here, result);
  
  // and we're done.
  return result;
}


function constrainNumericSchema(schema: v2.Schema, $: Context<v2.Model>, options: Options|undefined, target: TypeReference): TypeReference {
  // if this is just a number with no adornments, just return the common instance
  if ((schema.default !== undefined || schema.exclusiveMaximum !== undefined || schema.exclusiveMinimum !== undefined || schema.minimum !== undefined || schema.maximum !== undefined || schema.multipleOf)) {
    // add some stuff
    if (schema.default) {
      target = addDefault(target, schema.default);
    }

    if (schema.minimum !== undefined) {
      if (schema.exclusiveMinimum) {
        target = addConstraint( target, Constraints.exclusiveMinimum(schema.minimum));
      } else {
        target = addConstraint(target, Constraints.minimum(schema.minimum));
      }
    }
    if (schema.maximum !== undefined) {
      if (schema.exclusiveMaximum) {
        target = addConstraint(target, Constraints.exclusiveMaximum(schema.maximum));
      } else {
        target = addConstraint(target, Constraints.maximum(schema.maximum));
      }
    }
    if (schema.multipleOf !== undefined) {
      target = addConstraint(target, Constraints.multipleOf(schema.multipleOf));
    }
  }
  // we'll have to come back to xml
  // alias.addToAttic('xml', schema.xml);
  
  return options?.isAnonymous ? target : createTypeAlias($.api,nameOf(schema),target, commonProperties(schema));
}


export async function processStringSchema(schema: v2.Schema, $: Context<v2.Model>, options?: Options): Promise<TypeReference> {
  switch (schema.format) {
    case StringFormat.Base64Url:
      return addEncoding( await processByteArraySchema(schema, $), Encodings.UrlEncoding );

    case StringFormat.Byte:
    case StringFormat.Binary:
      return processByteArraySchema(schema, $);

    case StringFormat.Char:
      return processCharSchema(schema, $);

    case StringFormat.Date:
      return processDateSchema(schema, $);

    case StringFormat.Time:
      return processTimeSchema(schema, $);

    case StringFormat.DateTime:
      return processDateTimeSchema(schema, $);

    case StringFormat.DateTimeRfc1123:
      return processDateTimeSchema(schema, $, Encodings.RFC1123);

    case StringFormat.Duration:
      return processDurationSchema(schema, $);

    case StringFormat.Uuid:
      return processUuidSchema(schema, $);

    case StringFormat.Url:
    case StringFormat.Uri:
      return  processUriSchema(schema, $);

    case StringFormat.Password:
      return   processPasswordSchema(schema, $);

    case StringFormat.OData:
      return   processOdataSchema(schema, $);
  }

  $.assertNoForbiddenProperties(schema, ...objectProperties, ...arrayProperties, ...numberProperties);
  
  // we're going to treat it as a standard string schema
  // if this is just a plain string with no adornments, just return the common string instance. 
  if (!(schema.default !== undefined || schema.readOnly !== undefined || schema.minLength !== undefined || schema.maxLength !== undefined || schema.pattern !== undefined)) {
    return $.api.schemas.primitives.string;
  }

  // otherwise, we have to get the standard string and make an alias for it with the adornments. 
  let alias = createTypeAlias($.api, anonymous('string'), $.api.schemas.primitives.string, commonProperties(schema));

  if (schema.default !== undefined) {
    // alias.defaults.push(new ServerDefaultValue(schema.default));
    alias = addDefault(alias, schema.default);
  }

  //if (schema.readOnly !== undefined) {
  // alias.constraints.push(new ReadOnlyModifier());
  //}

  if (schema.maxLength !== undefined) {
    alias = addConstraint( alias, Constraints.maxLength(schema.maxLength));
  }

  if (schema.minLength !== undefined) {
    alias = addConstraint(alias, Constraints.minLength(schema.minLength));
  }

  if (schema.pattern !== undefined) {
    alias = addConstraint(alias, Constraints.regularExpression(schema.pattern));
  }

  // we'll have to come back to xml
  // alias.addToAttic('xml', schema.xml);
  if (options?.isAnonymous) {
    return alias;
  }
  return createTypeAlias($.api, nameOf(schema), alias, commonProperties(schema));
  
}


export async function processObjectSchema(schema: v2.Schema, $: Context<v2.Model>, options?: Options): Promise<TypeReference> {
  let result!: TypeReference;

  if (schema.additionalProperties && length(schema.properties) === 0 && length(schema.allOf) === 0) {
    // if it has no actual properties of it's own, but it has additionalProperties, return just the dictionary
    // as the type.
    return processAdditionalProperties(schema, $, options);
  }

  const schemaName = options?.isAnonymous ? anonymous('object') : nameOf(schema);

  if(!options?.isAnonymous) {
    // when it's not anonymous, we have to put the object typedefintion as soon as we can in case we recurse
    const { name, file } = $.api.getNameAndFile(schemaName, 'model');

    result = <TypeReference> {
      sourceFile: file,
      declaration: name,
      requiredReferences: []
    };

    $.visitor.references.schema.set(refTo(schema), result );
  }

  const requiredReferences = new Array<TypeReference>();
  // process the properties
  const properties = new Array<PropertySignatureStructure>();
  for( const [propertyName, property] of items(schema.properties) ) {
    const pTypeRef = await processSchema(property, $, { isAnonymous: true });
    const prop = createPropertySignature(propertyName, pTypeRef, {
      ...commonProperties(<v2.Schema>property),
      ...versionInfo($, property),
      required: schema.required && schema.required.indexOf(propertyName) > -1,
    });
    requiredReferences.push(pTypeRef);
    properties.push( prop);
  }

    
  const parents = schema.allOf ? await Promise.all( schema.allOf.map( async parent => {
    const result = await processSchema(parent, $, {isAnonymous: true});
    requiredReferences.push(result);
    return result;
  })): [];
  if( schema.additionalProperties ) {
    // true means type == any
    const elementTypeRef = schema.additionalProperties == true ? $.api.schemas.primitives.any : await processSchema(schema.additionalProperties!, $, { isAnonymous: true });
    parents.push(createDictionary(elementTypeRef));
  }
  // creating an object schema 
  result = createInterface($.api, schemaName, {
    ...commonProperties(schema),
    properties,
    parents,
    requiredReferences,
    ...versionInfo($, schema),

  } );

  // todo: preserve attic things
  // result.addToAttic('example', (<any>schema).example);
  // result.addToAttic('xml', schema.xml); // we'll have to come back to xml
  // result.addToAttic('x-ms-azure-resource', schema['x-ms-azure-resource']);
  // result.addToAttic('x-ms-external', schema['x-ms-external']);
  
  return result;
}

function addObjectConstraints(schemaName: string, schema: v2.Schema, $: Context<v2.Model>, type: TypeReference): TypeReference {
  if (schema.maxProperties !== undefined || schema.minProperties !== undefined || schema.default !== undefined) {

    if (schema.maxProperties !== undefined) {
      type = addConstraint(type, Constraints.maximumProperties(schema.maxProperties));
    }
    if (schema.minProperties !== undefined) {
      type = addConstraint(type, Constraints.minimumProperties(schema.minProperties));
    }
    if (schema.default !== undefined) {
      type = addDefault(type, schema.default);
    }

    return createTypeAlias($.api, schemaName, type);
  } 
  return type;
}

export async function processAdditionalProperties(schema: v2.Schema, $: Context<v2.Model>, options?: Options): Promise<TypeReference> {
  if(!schema.additionalProperties) {
    throw new Error('should not get here.');
  }

  const schemaName = options?.isAnonymous ? anonymous('dictionary') : nameOf(schema);
  const common = schema.properties ? {} : commonProperties(schema);

  // true means type == any
  const elementTypeRef = schema.additionalProperties == true ? $.api.schemas.primitives.any : await processSchema(schema.additionalProperties!, $, {isAnonymous: true});
  
  let alias = createTypeAlias($.api, schemaName, createDictionary(elementTypeRef), common);
  // todo: come back and handle attic -- we'll have to come back to xml
  // alias.addToAttic('xml', schema.xml);

  if (length(common) > 0 || schema.maxProperties !== undefined || schema.minProperties !== undefined ||schema.default !== undefined ) {
    if (schema.maxProperties !== undefined) {
      alias = addConstraint(alias, Constraints.maximumProperties(schema.maxProperties));
    }
    if (schema.minProperties !== undefined) {
      alias = addConstraint(alias, Constraints.minimumProperties(schema.minProperties));
    }
    if (schema.default !== undefined ) {
      alias = addDefault(alias, schema.default);
    }
  }
  return alias;
}


export async function processArraySchema(schema: v2.Schema, $: Context<v2.Model>, options?: Options): Promise<TypeReference> {
  const schemaName = <Identity>(options?.isAnonymous ? anonymous('array') : nameOf(schema));
  // if this isn't anonymous or a property or parameter, things like descriptions belong to this declaration
  const common = (!options?.isAnonymous && !options?.isParameter && !options?.isProperty) ? commonProperties(schema) : {};

  const elementType = schema.items ? await processSchema(schema.items, $, { isAnonymous: true }) :  $.api.schemas.primitives.any;
  $.assertNoForbiddenProperties(schema, ...stringProperties, ...numberProperties);

  let alias = createArray(elementType);

  if ((schema.default !== undefined || schema.maxItems !== undefined || schema.minItems !== undefined || schema.uniqueItems !== undefined)) {

    if (schema.default) {
      alias = addDefault( alias, schema.default);
    }

    // if (schema.readOnly) {
    // alias.constraints.push(new ReadOnlyModifier());
    // }
    if (schema.maxItems !== undefined) {
      alias = addConstraint(alias, Constraints.maximumElements(schema.maxItems));
    }
    if (schema.minItems !== undefined) {
      alias = addConstraint( alias, Constraints.minimumElements(schema.minItems));
    }
    if (schema.uniqueItems !== undefined) {
      alias = addConstraint(alias, Constraints.uniqueElements());
    }
  }
  // we'll have to come back to xml
  // alias.addToAttic('xml', schema.xml);
  return options?.isAnonymous ? alias : createTypeAlias($.api, schemaName, alias, commonProperties(schema));
}