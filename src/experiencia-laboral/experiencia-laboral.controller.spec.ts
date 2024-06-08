import { Test, TestingModule } from '@nestjs/testing';
import { ExperienciaLaboralController } from './experiencia-laboral.controller';
import { ExperienciaLaboralService } from './experiencia-laboral.service';

describe('ExperienciaLaboralController', () => {
  let controller: ExperienciaLaboralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperienciaLaboralController],
      providers: [ExperienciaLaboralService],
    }).compile();

    controller = module.get<ExperienciaLaboralController>(ExperienciaLaboralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
