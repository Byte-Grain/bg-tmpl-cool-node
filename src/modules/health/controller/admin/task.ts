import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthTaskEntity } from '../../entity/task';
import { HealthTaskService } from '../../service/task';
import { BaseSysUserEntity } from '../../../base/entity/sys/user';

/**
 * 任务信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthTaskEntity,
  service: HealthTaskService,
  pageQueryOp: {
    keyWordLikeFields: ['a.name', 'a.paradigmType'],
    fieldEq: ['a.status'],
    select: ['a.*', 'b.name AS userName'],
    join: [
      {
        entity: BaseSysUserEntity,
        alias: 'b',
        condition: 'a.userId = b.id',
      },
    ],
  },
})
export class AdminHealthTaskController extends BaseController {
  @Inject()
  healthTaskService: HealthTaskService;
}
