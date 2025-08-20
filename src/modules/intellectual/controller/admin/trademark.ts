import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { IntellectualTrademarkEntity } from '../../entity/trademark';
import { IntellectualTrademarkService } from '../../service/trademark';

/**
 * 商标信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: IntellectualTrademarkEntity,
  service: IntellectualTrademarkService,
  pageQueryOp: {
    keyWordLikeFields: ['a.registrationNumber', 'a.name'],
    fieldEq: ['a.type', 'a.legalStatus'],
  },
})
export class AdminIntellectualTrademarkController extends BaseController {}
