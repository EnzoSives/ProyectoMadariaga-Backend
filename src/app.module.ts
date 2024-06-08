import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PersonaModule } from './persona/persona.module';
import { ExperienciaLaboralModule } from './experiencia-laboral/experiencia-laboral.module';
import { CursoModule } from './curso/curso.module';
import { PostulacionModule } from './postulacion/postulacion.module';
import { EmpresaModule } from './empresa/empresa.module';
import { RubroModule } from './rubro/rubro.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
    PersonaModule,
    ExperienciaLaboralModule,
    CursoModule,
    PostulacionModule,
    EmpresaModule,
    RubroModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


