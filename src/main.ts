import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .addBearerAuth()
    // .addBearerAuth('Authorization', 'header')
    .setTitle('Floww Task Management platfrom swagger api documents')
    .setDescription('The document of API for Floww Task Management platfrom')
    .setVersion('1.0')
    .addTag('api')
    .build()
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: true,
  })
  SwaggerModule.setup('documents', app, document)


  await app.listen(4000);
}
bootstrap();
