import { Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthAreaEntity } from '../entity/area';

/**
 * 区域信息
 */
@Provide()
export class HealthAreaService extends BaseService {
  @InjectEntityModel(HealthAreaEntity)
  healthAreaEntity: Repository<HealthAreaEntity>;
}
