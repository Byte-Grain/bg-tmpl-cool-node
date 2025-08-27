import { BaseEntity } from '../../base/entity/base';
import { Column, Entity } from 'typeorm';

/**
 * 设备参数信息
 */
@Entity('health_device_param')
export class HealthDeviceParamEntity extends BaseEntity {
  @Column({ comment: '设备编号', length: 50 })
  deviceCode: string;

  @Column({ comment: '名称', length: 50 })
  name: string;

  @Column({ comment: '单位', length: 20, nullable: true })
  unit: string;

  @Column({
    comment: '最大值',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  maxValue: number;

  @Column({
    comment: '最小值',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  minValue: number;
}
