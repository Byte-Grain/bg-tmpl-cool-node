import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 区域信息
 */
@Entity('health_area')
export class HealthAreaEntity extends BaseEntity {
  @Index()
  @Column({ comment: '名称', length: 50 })
  name: string;

  @Column({ comment: '位置', nullable: true })
  location: string;

  @Column({ comment: '排序', default: 0 })
  order: number;

  @Column({ comment: '备注', nullable: true, type: 'text' })
  remark: string;
}
