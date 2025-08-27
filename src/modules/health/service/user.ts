import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthUserEntity } from '../entity/user';

/**
 * 用户信息
 */
@Provide()
export class HealthUserService extends BaseService {
  @InjectEntityModel(HealthUserEntity)
  healthUserEntity: Repository<HealthUserEntity>;
}
