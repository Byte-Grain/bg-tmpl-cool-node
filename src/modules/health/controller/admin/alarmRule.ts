import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthAlarmRuleEntity } from '../../entity/alarmRule';
import { HealthAlarmRuleService } from '../../service/alarmRule';

/**
 * 报警规则列表
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthAlarmRuleEntity,
  service: HealthAlarmRuleService,
  pageQueryOp: {
    keyWordLikeFields: ['a.deviceParam'],
    fieldEq: ['a.status'],
  },
})
export class AdminHealthAlarmRuleController extends BaseController {
  @Inject()
  healthAlarmRuleService: HealthAlarmRuleService;
}
