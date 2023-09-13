import { config } from "dotenv";
import { resolve } from "node:path";

config({ path: resolve(process.cwd(), ".env") });

const DEFAULT_PORT = 4014;

class Config {
  public PORT: number = DEFAULT_PORT;

  constructor() {
    this._initialize();
  }

  private _initialize() {
    this.PORT = Number(process.env.PORT) || DEFAULT_PORT;
  }
}

const appConfig = new Config();
export default appConfig;
