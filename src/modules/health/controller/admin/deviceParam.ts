import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthDeviceParamEntity } from '../../entity/deviceParam';
import { HealthDeviceParamService } from '../../service/deviceParam';

/**
 * 设备参数信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthDeviceParamEntity,
  service: HealthDeviceParamService,
  pageQueryOp: {
    keyWordLikeFields: ['a.deviceCode', 'a.name'],
  },
})
export class AdminHealthDeviceParamController extends BaseController {
  @Inject()
  healthDeviceParamService: HealthDeviceParamService;
}
