import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [PresentationModule, DataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
