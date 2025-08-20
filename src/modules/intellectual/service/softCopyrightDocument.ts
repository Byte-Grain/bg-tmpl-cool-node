import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { IntellectualSoftCopyrightDocumentEntity } from '../entity/softCopyrightDocument';

/**
 * 软著收文信息
 */
@Provide()
export class IntellectualSoftCopyrightDocumentService extends BaseService {
  @InjectEntityModel(IntellectualSoftCopyrightDocumentEntity)
  intellectualSoftCopyrightDocumentEntity: Repository<IntellectualSoftCopyrightDocumentEntity>;
}
