import type { Arguments, CommandBuilder } from 'yargs';
import { Directory } from '../operations/directory';
import { Parser } from '../operations/parser';
import chalk from 'chalk';

type Options = {
  name: string;
  path: string | undefined;
};

export const command = 'generate <name>';
export const desc = 'Generate structure for <name>';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      path: { type: 'string' },
    })
    .positional('name', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { name, path } = argv;

  try {
    const parser = new Parser();
    const listOfElements = parser.load();

    const dir = new Directory(name, path);
    const rootPath = dir.create();

    listOfElements.structure.forEach((element) => {
      const subDir = new Directory(element.name, `${rootPath}`);
      const subDirPath = subDir.create();

      if (!element.children) {
        return;
      }

      element.children.forEach((children) => {
        const childDir = new Directory(children, `${subDirPath}`);
        childDir.create(true);
      });
    });

    console.log(
      chalk.green(
        `Success - structure for your module ${name} have been created successfully`,
      ),
    );
  } catch (error) {
    console.log(
      chalk.red(
        `Error - structure for your module ${name} can not  be generate`,
        error,
      ),
    );
  }
  process.exit(0);
};
