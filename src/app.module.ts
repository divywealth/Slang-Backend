import { Module } from '@nestjs/common';
import { SlangModule } from './slang/slang.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slang } from './slang/entities/slang.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./env/.env.${process.env.NODE_ENV}`
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [Slang],
      synchronize: JSON.parse(process.env.SYNCHRONIZE),
    }),
    SlangModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
