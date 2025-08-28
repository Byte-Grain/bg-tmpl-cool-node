import { Inject, Provide } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthAreaEntity } from '../../entity/area';
import { HealthAreaService } from '../../service/area';

/**
 * 区域信息
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthAreaEntity,
  service: HealthAreaService,
  pageQueryOp: {
    keyWordLikeFields: ['a.name'],
  },
})
export class AdminHealthAreaController extends BaseController {
  @Inject()
  healthAreaService: HealthAreaService;
}
