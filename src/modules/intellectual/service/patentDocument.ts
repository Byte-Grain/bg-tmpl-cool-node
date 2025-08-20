import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { IntellectualPatentDocumentEntity } from '../entity/patentDocument';

/**
 * 专利收文信息
 */
@Provide()
export class IntellectualPatentDocumentService extends BaseService {
  @InjectEntityModel(IntellectualPatentDocumentEntity)
  intellectualPatentDocumentEntity: Repository<IntellectualPatentDocumentEntity>;
}
