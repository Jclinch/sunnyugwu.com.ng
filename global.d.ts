// global.d.ts
declare global {
    interface Window {
      gtag: (command: string, configOrValue: string | Record<string>, options?: Record<string>) => void;
    }
  }
  
  export {}; // This line makes the file a module, which is required for TypeScript
  