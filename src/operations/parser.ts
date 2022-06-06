import fs from 'fs';
import path from 'path';

interface IStructureElement {
  name: string;
  children?: string[];
}

interface IStructure {
  structure: IStructureElement[];
}

export class Parser {
  load(): IStructure {
    const json = JSON.parse(
      fs
        .readFileSync(path.resolve(`.${path.posix.sep}structure.json`))
        .toString(),
    ) as IStructure;
    return json;
  }
}
