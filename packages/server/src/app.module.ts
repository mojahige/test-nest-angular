import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TestModule } from './test/test.module';
import { HerosModule } from './heros/heros.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client/', 'dist/client'),
      exclude: ['/api'],
    }),
    TestModule,
    HerosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
