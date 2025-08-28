import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 区域位置列表
 */
@Entity('health_area_location')
export class HealthAreaLocationEntity extends BaseEntity {
  @Index()
  @Column({ comment: '所属区域ID' })
  areaId: number;

  @Index()
  @Column({ comment: '名称', length: 50 })
  name: string;

  @Column({ comment: '状态', dict: ['禁用', '启用'], default: 1 })
  status: number;

  @Column({ comment: '排序', default: 0 })
  orderNum: number;

  @Column({ comment: '备注', nullable: true, type: 'text' })
  remark: string;
}
