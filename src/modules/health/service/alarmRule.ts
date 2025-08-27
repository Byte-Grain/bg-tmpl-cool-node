import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthAlarmRuleEntity } from '../entity/alarmRule';

/**
 * 报警规则列表
 */
@Provide()
export class HealthAlarmRuleService extends BaseService {
  @InjectEntityModel(HealthAlarmRuleEntity)
  healthAlarmRuleEntity: Repository<HealthAlarmRuleEntity>;
}
