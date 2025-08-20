import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { IntellectualTrademarkDocumentEntity } from '../entity/trademarkDocument';

/**
 * 商标收文信息
 */
@Provide()
export class IntellectualTrademarkDocumentService extends BaseService {
  @InjectEntityModel(IntellectualTrademarkDocumentEntity)
  intellectualTrademarkDocumentEntity: Repository<IntellectualTrademarkDocumentEntity>;
}
