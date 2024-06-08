import { Module } from '@nestjs/common';
import { ExperienciaLaboralService } from './experiencia-laboral.service';
import { ExperienciaLaboralController } from './experiencia-laboral.controller';

@Module({
  controllers: [ExperienciaLaboralController],
  providers: [ExperienciaLaboralService],
})
export class ExperienciaLaboralModule {}
