import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthTaskEntity } from '../entity/task';

/**
 * 任务信息
 */
@Provide()
export class HealthTaskService extends BaseService {
  @InjectEntityModel(HealthTaskEntity)
  healthTaskEntity: Repository<HealthTaskEntity>;
}
