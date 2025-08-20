import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { IntellectualOrganizationEntity } from '../entity/organization';

/**
 * 机构信息
 */
@Provide()
export class IntellectualOrganizationService extends BaseService {
  @InjectEntityModel(IntellectualOrganizationEntity)
  intellectualOrganizationEntity: Repository<IntellectualOrganizationEntity>;
}
