import { Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthAreaLocationEntity } from '../entity/areaLocation';

/**
 * 区域位置列表
 */
@Provide()
export class HealthAreaLocationService extends BaseService {
  @InjectEntityModel(HealthAreaLocationEntity)
  healthAreaLocationEntity: Repository<HealthAreaLocationEntity>;
}
