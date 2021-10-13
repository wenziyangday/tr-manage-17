declare global {
  interface String {
    endsWith(suffix: string): boolean;
    log(str: string): void
  }
}

String.prototype.endsWith = function (suffix: string) {
  const str: string = this;
  console.log(str, this)
  return str;
}

String.prototype.log = function (str: string) {
  console.log(str);
  return str;
}

export {};
