import { BaseEntity } from '../../base/entity/base';
import { Column, Entity } from 'typeorm';

/**
 * 设备类型
 */
@Entity('health_device_type')
export class HealthDeviceTypeEntity extends BaseEntity {
  @Column({ comment: '名称', length: 50 })
  name: string;

  @Column({ comment: '描述', type: 'text', nullable: true })
  description: string;

  @Column({ comment: '类型', length: 50, nullable: true })
  type: string;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;
}
