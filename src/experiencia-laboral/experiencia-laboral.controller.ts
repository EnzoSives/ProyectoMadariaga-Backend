import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperienciaLaboralService } from './experiencia-laboral.service';
import { CreateExperienciaLaboralDto } from './dto/create-experiencia-laboral.dto';
import { UpdateExperienciaLaboralDto } from './dto/update-experiencia-laboral.dto';
import { ExperienciaLaboral } from './entities/experiencia-laboral.entity';

@Controller('experiencia-laboral')
export class ExperienciaLaboralController {
  constructor(private readonly experienciaLaboralService: ExperienciaLaboralService) {}

  @Post()
  create(@Body() createExperienciaLaboralDto: CreateExperienciaLaboralDto) {
    return this.experienciaLaboralService.addExperienciaLaboral(createExperienciaLaboralDto);
  }

  @Get('all')
  async getExperienciaLaboral():Promise<ExperienciaLaboral[]> {
    return this.experienciaLaboralService.getAll();
  }

  @Get(':id')
  async getExperienciaLaboralById(@Param('id') id: number): Promise<ExperienciaLaboral> {
    return this.experienciaLaboralService.getId(id);
  }

  @Patch(':id')
  updateExperienciaLaboral(@Param('id') id: number, @Body() updateExperienciaLaboralDto: UpdateExperienciaLaboralDto) {
    return this.experienciaLaboralService.updateExperienciaLaboralDTO(id, updateExperienciaLaboralDto);
  }

  @Delete(':id')
  removeExperienciaLaboral(@Param('id') id: number): Promise<boolean> {
    return this.experienciaLaboralService.deleteExperienciaLaboral(id);
  }
}
