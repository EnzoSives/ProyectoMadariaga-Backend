import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmpresaService {
  constructor(@InjectRepository(Empresa) private EmpresaRepository: Repository<Empresa>){}

  public async getAll():Promise<Empresa[]>{
    return await this.EmpresaRepository.find();
  }
  
  public async getId(id:number) : Promise<Empresa>{
    try{
      const criterio : FindOneOptions =  { where: {id:id} }
      let empresa : Empresa = await this.EmpresaRepository.findOne( criterio );
      if(empresa)
        return empresa;
      else
        throw new Error(`No se encontro empresa con id: ${id}`);
    }
    catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

  public async addEmpresa(empresaDTO: CreateEmpresaDto) : Promise<Empresa>{
    
    try{
      let empresa: Empresa = await this.EmpresaRepository.save(new Empresa(empresaDTO.nombre,empresaDTO.cuil,empresaDTO.cuit,empresaDTO.telefono,empresaDTO.email))
      if(empresa)
      return empresa;
    else
    throw new Error(`No se puedo agregar la empresa`);
    }
    catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

  public async updateEmpresaDTO(id: number, empresaDTO: Partial<UpdateEmpresaDto>): Promise<Empresa> {
    try {
      const criterio: FindOneOptions = { where: { id: id } };
      let empresa: Empresa = await this.EmpresaRepository.findOne(criterio);
      
      if (empresa) {
        // Actualizar solo los campos proporcionados en datoDto
        Object.assign(empresa, empresaDTO);
  
        empresa = await this.EmpresaRepository.save(empresa);
        return empresa;
      } else {
        throw new Error(`No se pudo actualizar la empresa id: ${id}`);
      }
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: `500 - ERROR: ` + error },
        HttpStatus.NOT_FOUND
      );
    }
  }

  public async deleteEmpresa(id : number) : Promise<boolean> {
    try {
       let criterio : FindOneOptions = { where: {id: id} };
       let empresa : Empresa = await this.EmpresaRepository.findOne(criterio);
       if (!empresa)
       throw new Error(`No se pudo eliminar empresa`)
       else
          await this.EmpresaRepository.delete(id);
       return true;
    } catch(error){
      throw new HttpException(
        {status: HttpStatus.NOT_FOUND,error:`500 - ERROR: ` +error},
        HttpStatus.NOT_FOUND
      )
    }
  }

}
