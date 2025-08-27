import { BaseEntity } from '../../base/entity/base';
import { Column, Entity } from 'typeorm';

/**
 * 报警规则列表
 */
@Entity('health_alarm_rule')
export class HealthAlarmRuleEntity extends BaseEntity {
  @Column({ comment: '设备参数', length: 50 })
  deviceParam: string;

  @Column({
    comment: '下限',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  lowerLimit: number;

  @Column({
    comment: '上限',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  upperLimit: number;

  @Column({ comment: '状态', dict: ['禁用', '启用'], default: 1 })
  status: number;
}
