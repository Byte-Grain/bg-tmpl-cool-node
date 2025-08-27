import { BaseEntity } from '../../base/entity/base';
import { Column, Entity } from 'typeorm';

/**
 * 任务信息
 */
@Entity('health_task')
export class HealthTaskEntity extends BaseEntity {
  @Column({ comment: '名称', length: 50 })
  name: string;

  @Column({ comment: '关联用户', nullable: true })
  userId: number;

  @Column({ comment: '范式类型', length: 50, nullable: true })
  paradigmType: string;

  @Column({ comment: '任务配置', type: 'text', nullable: true })
  taskConfig: string;

  @Column({ comment: '设备配置', type: 'text', nullable: true })
  deviceConfig: string;

  @Column({ comment: '状态', dict: ['禁用', '启用'], default: 1 })
  status: number;

  @Column({ comment: '开始时间', nullable: true })
  startTime: Date;

  @Column({ comment: '结束时间', nullable: true })
  endTime: Date;

  @Column({ comment: '任务时长', nullable: true })
  taskDuration: number;
}
