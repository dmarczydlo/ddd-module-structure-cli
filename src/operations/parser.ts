import fs from 'fs';
import path from 'path';

import structure from '../../structure.json';

interface IStructureElement {
  name: string;
  children?: string[];
}

interface IStructure {
  structure: IStructureElement[];
}

export class Parser {
  load(): IStructure {
    return structure as IStructure;
  }
}
