import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { IntellectualPatentEntity } from '../../entity/patent';
import { IntellectualPatentService } from '../../service/patent';

/**
 * 专利信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: IntellectualPatentEntity,
  service: IntellectualPatentService,
  pageQueryOp: {
    keyWordLikeFields: ['a.patentNumber', 'a.name'],
    fieldEq: ['a.patentType', 'a.legalStatus'],
  },
})
export class AdminIntellectualPatentController extends BaseController {}
