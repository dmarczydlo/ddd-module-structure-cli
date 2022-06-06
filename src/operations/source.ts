export interface ISource {
  create: () => void;
  isExist: (path: string) => boolean;
}
