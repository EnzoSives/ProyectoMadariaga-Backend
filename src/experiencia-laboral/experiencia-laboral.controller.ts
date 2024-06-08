import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperienciaLaboralService } from './experiencia-laboral.service';
import { CreateExperienciaLaboralDto } from './dto/create-experiencia-laboral.dto';
import { UpdateExperienciaLaboralDto } from './dto/update-experiencia-laboral.dto';

@Controller('experiencia-laboral')
export class ExperienciaLaboralController {
  constructor(private readonly experienciaLaboralService: ExperienciaLaboralService) {}

  @Post()
  create(@Body() createExperienciaLaboralDto: CreateExperienciaLaboralDto) {
    return this.experienciaLaboralService.create(createExperienciaLaboralDto);
  }

  @Get()
  findAll() {
    return this.experienciaLaboralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienciaLaboralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExperienciaLaboralDto: UpdateExperienciaLaboralDto) {
    return this.experienciaLaboralService.update(+id, updateExperienciaLaboralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienciaLaboralService.remove(+id);
  }
}
