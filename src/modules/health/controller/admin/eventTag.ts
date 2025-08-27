import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthEventTagEntity } from '../../entity/eventTag';
import { HealthEventTagService } from '../../service/eventTag';
import { HealthEventGroupEntity } from '../../entity/eventGroup';

/**
 * 事件标记列表
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthEventTagEntity,
  service: HealthEventTagService,
  pageQueryOp: {
    keyWordLikeFields: ['a.name'],
    select: ['a.*', 'b.name AS groupName'],
    join: [
      {
        entity: HealthEventGroupEntity,
        alias: 'b',
        condition: 'a.groupId = b.id',
      },
    ],
  },
})
export class AdminHealthEventTagController extends BaseController {
  @Inject()
  healthEventTagService: HealthEventTagService;
}
