import { writeFile } from '@azure-tools/async-io';
import { linq } from '@azure-tools/linq';
import { readdirSync, statSync } from 'fs';
import { describe, it } from 'mocha';
import { resolve } from 'path';
import { Linter } from '../linter/linter';
import { ApiModel } from '../model/api-model';
import { deserializeOpenAPI2 } from '../serialization/openapi/v2/serializer';
import { createHost } from './common';
import { Errors } from './errors';
import { serialize } from './serialization';

require('source-map-support').install();

const scenarios = `${__dirname}/../../../test/scenarios/v2`;

async function checkAttic(api: ApiModel, errors: Errors, atticOutput: string) {
  if (api.attic) {
    await writeFile(atticOutput, serialize(api.attic));
    delete api.attic;
  }
}

describe('Run rules', () => {
  const inputRoot = `${scenarios}/single/input`;
  const outputRoot = `${scenarios}/single/output`;
  const files = linq.values(readdirSync(inputRoot)).where(each => statSync(`${inputRoot}/${each}`).isFile()).toArray();

  for (const file of files) {
    if (file.startsWith('_')) {
      continue;
    }
    it(`Processes '${file}'`, async () => {
      console.log('\n');
      const host = createHost(inputRoot);
      const api = await deserializeOpenAPI2(host, file);
      const linter = new Linter();
      // linter.on('property', rule.default.onProperty);
      // linter.run(api);

      //   const name = basename(file, '.yaml');

      //   const adlOutput = resolve(`${outputRoot}/${name}`);

      //   // clean the folder and write out ts files
      //   const stopwatch = new Stopwatch();
      //   const n = await api.saveADL(adlOutput, true);
      //   console.log(chalk.cyan(`      save ADL: '${file}' - ${n} files saved - ${formatDuration(stopwatch.time)} `));

      //   const apiOutput = resolve(`${adlOutput}/${file.replace(/.yaml$/ig, '.api.yaml')}`);
      //   const atticOutput = resolve(`${adlOutput}/${file.replace(/.yaml$/ig, '.attic.yaml')}`);

      //   const errors = new AccumulateErrors();

      //   await clean(apiOutput, atticOutput);
      //   await checkAttic(api, errors, atticOutput);


      //   // reset timer
      //   stopwatch.time;

      //   const content = serialize(api);
      //   console.log(chalk.cyan(`      serialize: '${file}' ${formatDuration(stopwatch.time)} `));
      //   // write out yaml 
      //   await writeFile(apiOutput, content);
      //   console.log(chalk.cyan(`      save: '${file}' ${formatDuration(stopwatch.time)} `));
      //   equal(await isFile(apiOutput), true, `Should write file ${apiOutput} `);

      //   if (errors.count > 0) {
      //     fail(`Should not report errors: \n      ${errors.summary}\n`);
      //   }
    });
  }

  describe('Load Multiple OAI2 files', () => {
    const root = `${scenarios}/multiple`;
    const folders = linq.values(readdirSync(root)).where(each => statSync(`${root}/${each}`).isDirectory()).toArray();

    for (const folder of folders) {
      const inputRoot = resolve(root, folder, 'input');
      const adlOutput = resolve(`${inputRoot}/../output/`);

      it(`Processes folder '${folder}'`, async () => {
        console.log('\n');
        const host = createHost(inputRoot);

        const files = linq.values(readdirSync(inputRoot)).where(each => statSync(`${inputRoot}/${each}`).isFile()).toArray();
        const api = await deserializeOpenAPI2(host, ...files);

        // clean the folder and write out ts files
        await api.saveADL(adlOutput, true);


        // const apiOutput = resolve(`${adlOutput}/${folder}.api.yaml`);
        // const atticOutput = resolve(`${adlOutput}/${folder}.attic.yaml`);

        // const errors = new AccumulateErrors();

        // await clean(apiOutput, atticOutput);
        // await checkAttic(api, errors, atticOutput);

        // const stopwatch = new Stopwatch();
        // const content = serialize(api);
        // console.log(chalk.cyan(`      serialize: '${folder}' ${formatDuration(stopwatch.time)} `));

        // await writeFile(apiOutput, content);
        // console.log(chalk.cyan(`      save: '${folder}' ${formatDuration(stopwatch.time)} `));

        // equal(await isFile(apiOutput), true, `Should write file ${apiOutput} `);
        // if (errors.count > 0) {
        //   fail(`Should not report errors: \n      ${errors.summary}\n`);
        // }
      });
    }
  });
});
