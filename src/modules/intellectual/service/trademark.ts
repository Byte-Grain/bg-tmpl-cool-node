import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { IntellectualTrademarkEntity } from '../entity/trademark';

/**
 * 商标信息
 */
@Provide()
export class IntellectualTrademarkService extends BaseService {
  @InjectEntityModel(IntellectualTrademarkEntity)
  intellectualTrademarkEntity: Repository<IntellectualTrademarkEntity>;
}
