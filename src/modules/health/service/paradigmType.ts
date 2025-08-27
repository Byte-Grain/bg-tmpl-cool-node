import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthParadigmTypeEntity } from '../entity/paradigmType';

/**
 * 范式类型
 */
@Provide()
export class HealthParadigmTypeService extends BaseService {
  @InjectEntityModel(HealthParadigmTypeEntity)
  healthParadigmTypeEntity: Repository<HealthParadigmTypeEntity>;
}
