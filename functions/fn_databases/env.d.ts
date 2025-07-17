declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly APPWRITE_FUNCTION_ID: string;
      readonly APPWRITE_FUNCTION_NAME: string;
      readonly APPWRITE_FUNCTION_ENDPOINT: string;
      readonly APPWRITE_FUNCTION_API_KEY: string;
    }
  }
}

export {};
