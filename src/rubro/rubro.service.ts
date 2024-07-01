import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRubroDto } from './dto/create-rubro.dto';
import { UpdateRubroDto } from './dto/update-rubro.dto';
import { Rubro } from './entities/rubro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class RubroService {
  constructor(@InjectRepository(Rubro) private RubroRepository: Repository<Rubro>){}

  public async getAll():Promise<Rubro[]>{
    return await this.RubroRepository.find();
  }
  
  public async getId(id:number) : Promise<Rubro>{
    try{
      const criterio : FindOneOptions =  { where: {id:id} }
      let rubro : Rubro = await this.RubroRepository.findOne( criterio );
      if(rubro)
        return rubro;
      else
        throw new Error(`No se encontro rubro con id: ${id}`);
    }
    catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

  public async addRubro(rubroDTO: CreateRubroDto) : Promise<Rubro>{
    
    try{
      let rubro: Rubro = await this.RubroRepository.save(new Rubro(rubroDTO.nombre,rubroDTO.descripcion))
      if(rubro)
      return rubro;
    else
    throw new Error(`No se puedo agregar el rubro`);
    }
    catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

  public async updateRubroDTO(id: number, rubroDTO: Partial<UpdateRubroDto>): Promise<Rubro> {
    try {
      const criterio: FindOneOptions = { where: { id: id } };
      let rubro: Rubro = await this.RubroRepository.findOne(criterio);
      
      if (rubro) {
        // Actualizar solo los campos proporcionados en datoDto
        Object.assign(rubro, rubroDTO);
  
        rubro = await this.RubroRepository.save(rubro);
        return rubro;
      } else {
        throw new Error(`No se pudo actualizar el rubro id: ${id}`);
      }
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: `500 - ERROR: ` + error },
        HttpStatus.NOT_FOUND
      );
    }
  }

  public async deleteRubro(id : number) : Promise<boolean> {
    try {
       let criterio : FindOneOptions = { where: {id: id} };
       let rubro : Rubro = await this.RubroRepository.findOne(criterio);
       if (!rubro)
       throw new Error(`No se pudo eliminar rubro`)
       else
          await this.RubroRepository.delete(id);
       return true;
    } catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

}
