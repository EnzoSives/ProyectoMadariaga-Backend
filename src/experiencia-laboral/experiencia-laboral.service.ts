import { Injectable } from '@nestjs/common';
import { CreateExperienciaLaboralDto } from './dto/create-experiencia-laboral.dto';
import { UpdateExperienciaLaboralDto } from './dto/update-experiencia-laboral.dto';

@Injectable()
export class ExperienciaLaboralService {
  create(createExperienciaLaboralDto: CreateExperienciaLaboralDto) {
    return 'This action adds a new experienciaLaboral';
  }

  findAll() {
    return `This action returns all experienciaLaboral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} experienciaLaboral`;
  }

  update(id: number, updateExperienciaLaboralDto: UpdateExperienciaLaboralDto) {
    return `This action updates a #${id} experienciaLaboral`;
  }

  remove(id: number) {
    return `This action removes a #${id} experienciaLaboral`;
  }
}
