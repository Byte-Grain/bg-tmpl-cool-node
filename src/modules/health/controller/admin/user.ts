import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthUserEntity } from '../../entity/user';
import { HealthUserService } from '../../service/user';

/**
 * 用户信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthUserEntity,
  service: HealthUserService,
  pageQueryOp: {
    keyWordLikeFields: ['a.name', 'a.account'],
    fieldEq: ['a.gender'],
  },
})
export class AdminHealthUserController extends BaseController {
  @Inject()
  healthUserService: HealthUserService;
}
