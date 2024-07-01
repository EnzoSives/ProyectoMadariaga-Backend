import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostulacionService } from './postulacion.service';
import { CreatePostulacionDto } from './dto/create-postulacion.dto';
import { UpdatePostulacionDto } from './dto/update-postulacion.dto';
import { Postulacion } from './entities/postulacion.entity';

@Controller('postulacion')
export class PostulacionController {
  constructor(private readonly postulacionService: PostulacionService) {}


  @Post()
  create(@Body() createPostulacionDto: CreatePostulacionDto) {
    return this.postulacionService.addPostulacion(createPostulacionDto);
  }

  @Get()
  async getPostulacion():Promise<Postulacion[]> {
    return this.postulacionService.getAll();
  }

  @Get(':id')
  async getPostulacionById(@Param('id') id: number): Promise<Postulacion> {
    return this.postulacionService.getId(id);
  }

  @Patch(':id')
  updatePostulacion(@Param('id') id: number, @Body() updatePostulacionDto: UpdatePostulacionDto) {
    return this.postulacionService.updatePostulacionDTO(id, updatePostulacionDto);
  }

  @Delete(':id')
  removePostulacion(@Param('id') id: number): Promise<boolean> {
    return this.postulacionService.deletePostulacion(id);
  }
}
