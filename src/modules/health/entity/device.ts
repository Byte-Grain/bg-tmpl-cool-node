import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 设备信息
 */
@Entity('health_device')
export class HealthDeviceEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '编号', length: 50 })
  code: string;

  @Column({ comment: '名称', length: 50, nullable: true })
  name: string;

  @Column({ comment: '型号', length: 50, nullable: true })
  model: string;

  @Column({ comment: 'SN', length: 50, nullable: true })
  sn: string;

  @Column({ comment: 'MAC', length: 50, nullable: true })
  mac: string;

  @Column({ comment: '生产日期', type: 'date', nullable: true })
  productionDate: Date;

  @Column({ comment: '使用年限', nullable: true })
  usageYears: number;

  @Column({ comment: '状态', dict: ['禁用', '启用'], default: 1 })
  status: number;

  @Column({ comment: '生产厂商', length: 50, nullable: true })
  manufacturer: string;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;
}
