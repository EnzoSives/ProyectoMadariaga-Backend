import { Test, TestingModule } from '@nestjs/testing';
import { ExperienciaLaboralService } from './experiencia-laboral.service';

describe('ExperienciaLaboralService', () => {
  let service: ExperienciaLaboralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExperienciaLaboralService],
    }).compile();

    service = module.get<ExperienciaLaboralService>(ExperienciaLaboralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
