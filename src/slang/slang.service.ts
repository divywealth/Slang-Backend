import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSlangDto } from './dto/create-slang.dto';
import { UpdateSlangDto } from './dto/update-slang.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Slang } from './entities/slang.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SlangService {
  constructor (
    @InjectRepository(Slang)
    private readonly slangRepository: Repository<Slang>
  ) {}


  async create(createSlangDto: CreateSlangDto) {
    try {
      const existingSlang =  await this.slangRepository.findOne({
        where: {
          slang: createSlangDto.slang
        }
      })
      if (!existingSlang) {
        return this.slangRepository.save(createSlangDto)
      }
      throw new HttpException('invalid slang with this id', HttpStatus.BAD_REQUEST)
    } catch (error) {
      throw error.message
    }
  }

  findAll() {
    try {
      return this.slangRepository.find()
    } catch (error) {
      throw error.message
    }
  }

  async findOne(id: number) {
    try {
      const existingSlang =  await this.slangRepository.findOne({
        where: {
          id: id
        }
      })
      if (existingSlang) {
        return existingSlang
      }
      throw new HttpException('invalid slang with this id', HttpStatus.BAD_REQUEST)
    } catch (error) {
      throw error.message
    }
  }

  async update(id: number, updateSlangDto: UpdateSlangDto) {
    try {
      const existingSlang =  await this.slangRepository.findOne({
        where: {
          id: id
        }
      })
      if (existingSlang) {
        return this.slangRepository.update({id}, {...updateSlangDto})
      }
      throw new HttpException('invalid slang with this id', HttpStatus.BAD_REQUEST)
    } catch (error) {
      throw error.message
    }
  }

  async remove(id: number) {
    try {
      const existingSlang =  await this.slangRepository.findOne({
        where: {
          id: id
        }
      })
      if (existingSlang) {
        return this.slangRepository.delete({id})
      }
      throw new HttpException('invalid slang with this id', HttpStatus.BAD_REQUEST)
    } catch (error) {
      throw error.message
    }
  }
}
