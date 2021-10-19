import { Test, TestingModule } from '@nestjs/testing';
import { Categories.Services.TsService } from './categories.services.ts.service';

describe('Categories.Services.TsService', () => {
  let service: Categories.Services.TsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Categories.Services.TsService],
    }).compile();

    service = module.get<Categories.Services.TsService>(Categories.Services.TsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
