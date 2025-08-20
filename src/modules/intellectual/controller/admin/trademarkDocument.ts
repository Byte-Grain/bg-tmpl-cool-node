import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { IntellectualTrademarkDocumentEntity } from '../../entity/trademarkDocument';
import { IntellectualTrademarkDocumentService } from '../../service/trademarkDocument';

/**
 * 商标收文信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: IntellectualTrademarkDocumentEntity,
  service: IntellectualTrademarkDocumentService,
  pageQueryOp: {
    keyWordLikeFields: ['a.registrationNumber', 'a.name'],
  },
})
export class AdminIntellectualTrademarkDocumentController extends BaseController {}
