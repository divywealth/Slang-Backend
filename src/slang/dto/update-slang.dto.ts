import { PartialType } from '@nestjs/mapped-types';
import { CreateSlangDto } from './create-slang.dto';

export class UpdateSlangDto extends PartialType(CreateSlangDto) {}
