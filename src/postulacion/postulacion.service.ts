import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostulacionDto } from './dto/create-postulacion.dto';
import { UpdatePostulacionDto } from './dto/update-postulacion.dto';
import { Postulacion } from './entities/postulacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class PostulacionService {
  constructor(@InjectRepository(Postulacion) private PostulacionRepository: Repository<Postulacion>){}

  public async getAll():Promise<Postulacion[]>{
    return await this.PostulacionRepository.find();
  }
  
  public async getId(id:number) : Promise<Postulacion>{
    try{
      const criterio : FindOneOptions =  { where: {id:id} }
      let postulacion : Postulacion = await this.PostulacionRepository.findOne( criterio );
      if(postulacion)
        return postulacion;
      else
        throw new Error(`No se encontro postulacion con id: ${id}`);
    }
    catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

  public async addPostulacion(postulacionDTO: CreatePostulacionDto) : Promise<Postulacion>{
    
    try{
      let postulacion: Postulacion = await this.PostulacionRepository.save(new Postulacion(postulacionDTO.nombre,postulacionDTO.puesto,postulacionDTO.descripcion,postulacionDTO.vencimiento,postulacionDTO.modalidad,postulacionDTO.cupos,postulacionDTO.edadMin,postulacionDTO.edadMax))
      if(postulacion)
      return postulacion;
    else
    throw new Error(`No se puedo agregar la postulación`);
    }
    catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

  public async updatePostulacionDTO(id: number, postulacionDTO: Partial<UpdatePostulacionDto>): Promise<Postulacion> {
    try {
      const criterio: FindOneOptions = { where: { id: id } };
      let postulacion: Postulacion = await this.PostulacionRepository.findOne(criterio);
      
      if (postulacion) {
        // Actualizar solo los campos proporcionados en datoDto
        Object.assign(postulacion, postulacionDTO);
  
        postulacion = await this.PostulacionRepository.save(postulacion);
        return postulacion;
      } else {
        throw new Error(`No se pudo actualizar la postulacion id: ${id}`);
      }
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: `500 - ERROR: ` + error },
        HttpStatus.NOT_FOUND
      );
    }
  }

  public async deletePostulacion(id : number) : Promise<boolean> {
    try {
       let criterio : FindOneOptions = { where: {id: id} };
       let postulacion : Postulacion = await this.PostulacionRepository.findOne(criterio);
       if (!postulacion)
       throw new Error(`No se pudo eliminar postulación`)
       else
          await this.PostulacionRepository.delete(id);
       return true;
    } catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

}
