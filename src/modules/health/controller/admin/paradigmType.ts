import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { HealthParadigmTypeEntity } from '../../entity/paradigmType';
import { HealthParadigmTypeService } from '../../service/paradigmType';

/**
 * 范式类型
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: HealthParadigmTypeEntity,
  service: HealthParadigmTypeService,
  pageQueryOp: {
    keyWordLikeFields: ['a.name'],
  },
})
export class AdminHealthParadigmTypeController extends BaseController {
  @Inject()
  healthParadigmTypeService: HealthParadigmTypeService;
}
