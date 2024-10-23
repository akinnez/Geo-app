interface ImportMetaEnv {
  VITE_PORT: string;
  // Define other environment variables here
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
