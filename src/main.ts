import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 
  const port = process.env.PORT || 8080;

  // สร้าง ValidationPipe และใช้งาน Global Pipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    console.log(`Application is running on: http://localhost:${port}`);
  });
}
bootstrap();
