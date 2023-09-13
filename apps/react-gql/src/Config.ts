class Config {
  public SERVER_URL = import.meta.env.VITE_NEST_GQL_SERVER_URL;
  // public SERVER_URL = import.meta.env.VITE_EXPRESS_GQL_SERVER_URL;
  // public SERVER_URL = import.meta.env.VITE_EXPRESS_GQL_ADVANCED_SERVER_URL;
}

const appConfig = new Config();
export default appConfig;
