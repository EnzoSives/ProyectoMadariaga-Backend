import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RubroService } from './rubro.service';
import { CreateRubroDto } from './dto/create-rubro.dto';
import { UpdateRubroDto } from './dto/update-rubro.dto';
import { Rubro } from './entities/rubro.entity';

@Controller('rubro')
export class RubroController {
  constructor(private readonly rubroService: RubroService) {}


  @Post()
  create(@Body() createRubroDto: CreateRubroDto) {
    return this.rubroService.addRubro(createRubroDto);
  }

  @Get()
  async getRubro():Promise<Rubro[]> {
    return this.rubroService.getAll();
  }

  @Get(':id')
  async getRubroById(@Param('id') id: number): Promise<Rubro> {
    return this.rubroService.getId(id);
  }

  @Patch(':id')
  updateRubro(@Param('id') id: number, @Body() updateRubroDto: UpdateRubroDto) {
    return this.rubroService.updateRubroDTO(id, updateRubroDto);
  }

  @Delete(':id')
  removeRubro(@Param('id') id: number): Promise<boolean> {
    return this.rubroService.deleteRubro(id);
  }
}
