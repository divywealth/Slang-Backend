import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlangService } from './slang.service';
import { CreateSlangDto } from './dto/create-slang.dto';
import { UpdateSlangDto } from './dto/update-slang.dto';

@Controller({
  version: '1'
})
export class SlangController {
  constructor(private readonly slangService: SlangService) {}

  @Post('create-slang')
  create(@Body() createSlangDto: CreateSlangDto) {
    try {
      return this.slangService.create(createSlangDto);
    } catch (err) {
      throw err.message
    }
  }

  @Get('slangs')
  findAll() {
    try {
      return this.slangService.findAll();
    } catch (error) {
      throw error.message
    }
  }

  @Get('slang/:id')
  findOne(@Param('id') id: string) {
    try {
      return this.slangService.findOne(+id); 
    } catch (error) {
      throw error.message
    }
  }

  @Patch('update-slang/:id')
  update(@Param('id') id: string, @Body() updateSlangDto: UpdateSlangDto) {
    try {
      return this.slangService.update(+id, updateSlangDto);
    } catch (error) {
      throw error.message
    }
  }

  @Delete('delete-slang/:id')
  remove(@Param('id') id: string) {
    try {
      return this.slangService.remove(+id);
    } catch (error) {
      throw error.message
    }
  }
}
