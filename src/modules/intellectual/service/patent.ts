import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { IntellectualPatentEntity } from '../entity/patent';

/**
 * 专利信息
 */
@Provide()
export class IntellectualPatentService extends BaseService {
  @InjectEntityModel(IntellectualPatentEntity)
  intellectualPatentEntity: Repository<IntellectualPatentEntity>;
}
