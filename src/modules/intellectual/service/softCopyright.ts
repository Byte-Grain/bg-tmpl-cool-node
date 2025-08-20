import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { IntellectualSoftCopyrightEntity } from '../entity/softCopyright';

/**
 * 软著信息
 */
@Provide()
export class IntellectualSoftCopyrightService extends BaseService {
  @InjectEntityModel(IntellectualSoftCopyrightEntity)
  intellectualSoftCopyrightEntity: Repository<IntellectualSoftCopyrightEntity>;
}
