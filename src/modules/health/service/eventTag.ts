import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthEventTagEntity } from '../entity/eventTag';

/**
 * 事件标记列表
 */
@Provide()
export class HealthEventTagService extends BaseService {
  @InjectEntityModel(HealthEventTagEntity)
  healthEventTagEntity: Repository<HealthEventTagEntity>;
}
