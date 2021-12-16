import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomationModule } from './modules/automation/automation.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AutomationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
