import { ISource } from './source';
import fs from 'fs';
import path from 'path';
import { File } from './file';

export class Directory implements ISource {
  constructor(
    private readonly name: string,
    private readonly rootPath: string = `${path.resolve('./')}/src/modules`,
  ) {}
  create(addKeep = false): string {
    if (!this.isExist(this.rootPath)) {
      fs.mkdirSync(this.rootPath);
    }

    const subElement = `${this.rootPath}${path.posix.sep}${this.name}`;
    if (!this.isExist(subElement)) {
      fs.mkdirSync(subElement);
    }

    if (addKeep) {
      const file = new File(`${subElement}${path.posix.sep}.gitkeep`);
      file.create();
    }

    return subElement;
  }

  isExist(path: string): boolean {
    return fs.existsSync(path);
  }
}
