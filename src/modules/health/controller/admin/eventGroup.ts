import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthEventGroupEntity } from '../../entity/eventGroup';
import { HealthEventGroupService } from '../../service/eventGroup';

/**
 * 事件分组
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthEventGroupEntity,
  service: HealthEventGroupService,
  pageQueryOp: {
    keyWordLikeFields: ['a.name'],
  },
})
export class AdminHealthEventGroupController extends BaseController {
  @Inject()
  healthEventGroupService: HealthEventGroupService;
}
