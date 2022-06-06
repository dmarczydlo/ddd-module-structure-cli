import { ISource } from './source';
import fs from 'fs';

export class File implements ISource {
  constructor(private readonly path: string) {}
  create() {
    fs.closeSync(fs.openSync(this.path, 'w'));
  }

  isExist(): boolean {
    return fs.existsSync(this.path);
  }
}
