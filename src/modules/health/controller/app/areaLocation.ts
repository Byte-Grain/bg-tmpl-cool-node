import { Inject, Provide } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthAreaLocationEntity } from '../../entity/areaLocation';
import { HealthAreaLocationService } from '../../service/areaLocation';
import { HealthAreaEntity } from '../../entity/area';

/**
 * 区域位置列表
 */
@Provide()
@CoolController({
  api: ['info', 'list'],
  entity: HealthAreaLocationEntity,
  service: HealthAreaLocationService,
  pageQueryOp: {
    select: ['a.*', 'b.name as areaName'],
    join: [
      {
        entity: HealthAreaEntity,
        alias: 'b',
        condition: 'a.areaId = b.id',
        type: 'leftJoin',
      },
    ],
  },
})
export class AppHealthAreaLocationController extends BaseController {
  @Inject()
  healthAreaLocationService: HealthAreaLocationService;
}
