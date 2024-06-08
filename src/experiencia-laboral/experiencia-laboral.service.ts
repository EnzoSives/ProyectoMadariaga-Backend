import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExperienciaLaboralDto } from './dto/create-experiencia-laboral.dto';
import { UpdateExperienciaLaboralDto } from './dto/update-experiencia-laboral.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExperienciaLaboral } from './entities/experiencia-laboral.entity';

@Injectable()
export class ExperienciaLaboralService {
  constructor(@InjectRepository(ExperienciaLaboral) private experienciaLaboralRepository: Repository<ExperienciaLaboral>){}
  
  public async getAll():Promise<ExperienciaLaboral[]>{
    return await this.experienciaLaboralRepository.find();
  }

  public async getId(id:number) : Promise<ExperienciaLaboral>{
    try{
      const criterio : FindOneOptions =  { where: {id:id} }
      let experienciaLaboral : ExperienciaLaboral = await this.experienciaLaboralRepository.findOne( criterio );
      if(experienciaLaboral)
        return experienciaLaboral;
      else
        throw new Error(`No se encontro experiencia con id: ${id}`);
    }
    catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

  public async addExperienciaLaboral(experienciaLaboralDTO: CreateExperienciaLaboralDto) : Promise<ExperienciaLaboral>{
    
    try{
  
      let experienciaLaboral: ExperienciaLaboral = await this.experienciaLaboralRepository.save(new ExperienciaLaboral(experienciaLaboralDTO.nombre,experienciaLaboralDTO.puesto,experienciaLaboralDTO.desde,experienciaLaboralDTO.hasta))
      if(experienciaLaboral)
      return experienciaLaboral;
    else
    throw new Error(`No se puedo agregar la experiencia`);
    }
    catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

  public async updateExperienciaLaboralDTO(id: number, experienciaLaboralDTO: Partial<UpdateExperienciaLaboralDto>): Promise<ExperienciaLaboral> {
    try {
      const criterio: FindOneOptions = { where: { id: id } };
      let experienciaLaboral: ExperienciaLaboral = await this.experienciaLaboralRepository.findOne(criterio);
      
      if (experienciaLaboral) {
        // Actualizar solo los campos proporcionados en datoDto
        Object.assign(experienciaLaboral, experienciaLaboralDTO);
  
        experienciaLaboral = await this.experienciaLaboralRepository.save(experienciaLaboral);
        return experienciaLaboral;
      } else {
        throw new Error(`No se pudo actualizar el id: ${id}`);
      }
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: `500 - ERROR: ` + error },
        HttpStatus.NOT_FOUND
      );
    }
  }
  
  public async deleteExperienciaLaboral(id : number) : Promise<boolean> {
    try {
       let criterio : FindOneOptions = { where: {id: id} };
       let experienciaLaboral : ExperienciaLaboral = await this.experienciaLaboralRepository.findOne(criterio);
       if (!experienciaLaboral)
       throw new Error(`No se pudo actualizar eliminar`)
       else
          await this.experienciaLaboralRepository.delete(id);
       return true;
    } catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }


}

