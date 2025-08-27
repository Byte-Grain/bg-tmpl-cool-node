import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthEventGroupEntity } from '../entity/eventGroup';

/**
 * 事件分组
 */
@Provide()
export class HealthEventGroupService extends BaseService {
  @InjectEntityModel(HealthEventGroupEntity)
  healthEventGroupEntity: Repository<HealthEventGroupEntity>;
}
