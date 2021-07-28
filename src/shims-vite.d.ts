interface ImportMetaEnv extends Readonly<Record<string, string>> {
  // You can type your env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
