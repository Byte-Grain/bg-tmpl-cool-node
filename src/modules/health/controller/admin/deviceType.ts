import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthDeviceTypeEntity } from '../../entity/deviceType';
import { HealthDeviceTypeService } from '../../service/deviceType';

/**
 * 设备类型
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthDeviceTypeEntity,
  service: HealthDeviceTypeService,
  pageQueryOp: {
    keyWordLikeFields: ['a.name'],
  },
})
export class AdminHealthDeviceTypeController extends BaseController {
  @Inject()
  healthDeviceTypeService: HealthDeviceTypeService;
}
