import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { PartialType } from '@nestjs/mapped-types';
@Module({
  imports: [QuestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
