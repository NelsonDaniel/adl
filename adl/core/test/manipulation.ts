import { suite } from '@testdeck/mocha';
import * as assert from 'assert';
import { Node } from 'ts-morph';
import { EnumValue } from '../model/schema/enum';
import { TSElement } from '../model/typescript/typescript-element';


@suite class TestManipulation {
 

  private assertEnumValuesEqual(actual: Array<EnumValue>, expected: Array<EnumValue>) {
    assert.strictEqual(actual.length, expected.length);
    for (let i = 0; i < actual.length; i++) {
      assert.strictEqual(actual[i].name, expected[i].name);
      assert.strictEqual(actual[i].value, expected[i].value);
      assert.strictEqual(actual[i].description, expected[i].description);
    }
  }

  private assertSourceEqual<T extends Node>(actual: TSElement<T> | string, expected: string) {
    if (typeof actual !== 'string') {
      actual = actual.node.getFullText();
    }
    const actualText = this.normalizeWhitespace(actual);
    const expectedText = this.normalizeWhitespace(expected);
    assert.strictEqual(actualText, expectedText);
  }

  private normalizeWhitespace(text: string) {
    return text.trim().replace(/\s+/g, ' ');
  }
}