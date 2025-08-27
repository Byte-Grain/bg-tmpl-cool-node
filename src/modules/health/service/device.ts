import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthDeviceEntity } from '../entity/device';

/**
 * 设备信息
 */
@Provide()
export class HealthDeviceService extends BaseService {
  @InjectEntityModel(HealthDeviceEntity)
  healthDeviceEntity: Repository<HealthDeviceEntity>;
}
