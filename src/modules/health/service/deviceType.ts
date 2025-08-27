import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthDeviceTypeEntity } from '../entity/deviceType';

/**
 * 设备类型
 */
@Provide()
export class HealthDeviceTypeService extends BaseService {
  @InjectEntityModel(HealthDeviceTypeEntity)
  healthDeviceTypeEntity: Repository<HealthDeviceTypeEntity>;
}
