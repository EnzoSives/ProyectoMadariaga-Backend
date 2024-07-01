import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';

@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post('crear')
  async addPersona(@Body() createPersonaDto: CreatePersonaDto): Promise<Persona> {
    return this.personaService.create(createPersonaDto);
  }

  @Get('all')
  async getAllPersonas(): Promise<Persona[]> {
    return this.personaService.getAll();
  }

  @Get(':id')
  async getPersonaById(@Param('id', ParseIntPipe) id: number): Promise<Persona> {
    return this.personaService.getId(id);
  }

  @Patch('actualizar/:id')
  async updatePersona(@Param('id', ParseIntPipe) id: number, @Body() updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    return this.personaService.update(id, updatePersonaDto);
  }

  @Delete('eliminar/:id')
  async deletePersona(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    await this.personaService.remove(id);
    return true;
  }
}
