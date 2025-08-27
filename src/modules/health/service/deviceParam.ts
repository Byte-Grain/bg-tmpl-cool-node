import { Inject, Provide } from '@midwayjs/core';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { HealthDeviceParamEntity } from '../entity/deviceParam';

/**
 * 设备参数信息
 */
@Provide()
export class HealthDeviceParamService extends BaseService {
  @InjectEntityModel(HealthDeviceParamEntity)
  healthDeviceParamEntity: Repository<HealthDeviceParamEntity>;
}
