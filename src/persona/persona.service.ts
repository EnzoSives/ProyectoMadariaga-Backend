import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>,
  ){}

  public async getAll(): Promise<Persona[]> {
    return await this.personaRepository.find();
  }

  public async getId(id: number): Promise<Persona> {
    try {
      const criterio: FindOneOptions<Persona> = { where: { id: id } };
      let persona: Persona = await this.personaRepository.findOne(criterio);
      if (persona) return persona;
      else throw new Error(`No se encontró persona con id: ${id}`);
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: `500 - ERROR: ` + error },
        HttpStatus.NOT_FOUND
      );
    }
  }

  public async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    try {
      const newPersona = this.personaRepository.create(createPersonaDto);
      return await this.personaRepository.save(newPersona);
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'Error al crear la persona: ' + error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    try {
      const persona = await this.personaRepository.findOne({ where: { id } });
      if (!persona) {
        throw new HttpException(
          { status: HttpStatus.NOT_FOUND, error: `No se encontró persona con id: ${id}` },
          HttpStatus.NOT_FOUND,
        );
      }

      Object.assign(persona, updatePersonaDto);
      return await this.personaRepository.save(persona);
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'Error al actualizar la persona: ' + error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  public async remove(id: number): Promise<void> {
    try {
      const persona = await this.personaRepository.findOne({ where: { id } });
      if (!persona) {
        throw new HttpException(
          { status: HttpStatus.NOT_FOUND, error: `No se encontró persona con id: ${id}` },
          HttpStatus.NOT_FOUND,
        );
      }

      await this.personaRepository.remove(persona);
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'Error al eliminar la persona: ' + error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

}
