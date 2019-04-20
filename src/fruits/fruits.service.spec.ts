import { Test, TestingModule } from '@nestjs/testing';
import { FruitsService } from './fruits.service';

describe('FruitsService', () => {
  let service: FruitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitsService],
    }).compile();

    service = module.get<FruitsService>(FruitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
