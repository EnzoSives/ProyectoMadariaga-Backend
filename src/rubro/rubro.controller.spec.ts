import { Test, TestingModule } from '@nestjs/testing';
import { RubroController } from './rubro.controller';
import { RubroService } from './rubro.service';

describe('RubroController', () => {
  let controller: RubroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RubroController],
      providers: [RubroService],
    }).compile();

    controller = module.get<RubroController>(RubroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
