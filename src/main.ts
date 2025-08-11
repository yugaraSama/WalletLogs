import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('WalletLogs API')
    .setDescription('API documentation for WalletLogs')
    .setVersion('1.0')
    .addGlobalResponse({
      status: 400,
      description: 'Bad Request : Invalid request format or data types',
    })
    .addGlobalResponse({
      status: 401,
      description: 'Unauthorized : Please log in to access this resource',
    })
    .addGlobalResponse({
      status: 500,
      description: 'Internal Server Error : An unexpected error occurred',
    })
    .addGlobalResponse({
      status: 502,
      description: 'Bad Gateway : Please try again later',
    })
    .addGlobalResponse({
      status: 503,
      description: 'Service Unavailable : Please try again later',
    })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
