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
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthAreaLocationEntity,
  service: HealthAreaLocationService,
  listQueryOp: {
    fieldEq: ['areaId'],
    keyWordLikeFields: ['name'],
    addOrderBy: {
      createTime: 'ASC',
    },
  },
  pageQueryOp: {
    keyWordLikeFields: ['a.name'],
    fieldEq: ['a.status'],
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
export class AdminHealthAreaLocationController extends BaseController {
  @Inject()
  healthAreaLocationService: HealthAreaLocationService;
}
