import { BaseEntity } from '../../base/entity/base';
import { Column, Entity } from 'typeorm';

/**
 * 事件分组
 */
@Entity('health_event_group')
export class HealthEventGroupEntity extends BaseEntity {
  @Column({ comment: '分组名称', length: 50 })
  name: string;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;

  @Column({ comment: '排序', default: 0 })
  orderNum: number;
}
