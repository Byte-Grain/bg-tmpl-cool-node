import { BaseEntity } from '../../base/entity/base';
import { Column, Entity } from 'typeorm';

/**
 * 事件标记列表
 */
@Entity('health_event_tag')
export class HealthEventTagEntity extends BaseEntity {
  @Column({ comment: '名称', length: 50 })
  name: string;

  @Column({ comment: '颜色', length: 20, nullable: true })
  color: string;

  @Column({ comment: '分组', nullable: true })
  groupId: number;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;

  @Column({ comment: '排序', default: 0 })
  orderNum: number;
}
