import { Module } from '@nestjs/common';
import { SlangService } from './slang.service';
import { SlangController } from './slang.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slang } from './entities/slang.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Slang])
  ],
  controllers: [SlangController],
  providers: [SlangService]
})
export class SlangModule {}
