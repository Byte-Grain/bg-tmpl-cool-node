import { Inject, Provide } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthAreaEntity } from '../../entity/area';
import { HealthAreaService } from '../../service/area';

/**
 * 区域信息
 */
@Provide()
@CoolController({
  api: ['info', 'list'],
  entity: HealthAreaEntity,
  service: HealthAreaService,
})
export class AppHealthAreaController extends BaseController {
  @Inject()
  healthAreaService: HealthAreaService;
}
