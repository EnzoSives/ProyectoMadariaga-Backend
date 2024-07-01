import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.addEmpresa(createEmpresaDto);
  }

  @Get()
  async getEmpresa():Promise<Empresa[]> {
    return this.empresaService.getAll();
  }

  @Get(':id')
  async getEmpresaById(@Param('id') id: number): Promise<Empresa> {
    return this.empresaService.getId(id);
  }

  @Patch(':id')
  updateEmpresa(@Param('id') id: number, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.updateEmpresaDTO(id, updateEmpresaDto);
  }

  @Delete(':id')
  removeEmpresa(@Param('id') id: number): Promise<boolean> {
    return this.empresaService.deleteEmpresa(id);
  }
}
