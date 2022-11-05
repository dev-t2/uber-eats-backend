declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test' | 'provision';
    PORT: number;

    DATABASE_URL: string;

    JWT_SECRET_KEY: string;
  }
}
