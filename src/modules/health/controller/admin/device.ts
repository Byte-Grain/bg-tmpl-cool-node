import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthDeviceEntity } from '../../entity/device';
import { HealthDeviceService } from '../../service/device';

/**
 * 设备信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthDeviceEntity,
  service: HealthDeviceService,
  pageQueryOp: {
    keyWordLikeFields: ['a.code', 'a.name', 'a.model', 'a.sn', 'a.mac'],
    fieldEq: ['a.status'],
  },
})
export class AdminHealthDeviceController extends BaseController {
  @Inject()
  healthDeviceService: HealthDeviceService;
}
