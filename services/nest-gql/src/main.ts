import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Config from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('main.bootstrap');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(Config.PORT, () => {
    logger.log(`⚡️ Server is running at http://localhost:${Config.PORT}`);
  });
}
bootstrap();
