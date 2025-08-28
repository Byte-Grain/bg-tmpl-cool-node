import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 用户信息
 */
@Entity('health_user')
export class HealthUserEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '编号', length: 50 })
  number: string;

  @Column({ comment: '姓名', length: 50, nullable: true })
  name: string;

  @Column({ comment: '性别', dict: ['未知', '男', '女'], default: 0 })
  gender: number;

  @Column({ comment: '出生日期', type: 'date', nullable: true })
  birthDate: Date;

  @Column({ comment: '年龄（岁）', nullable: true })
  ageYear: number;

  @Column({ comment: '年龄（周）', nullable: true })
  ageWeek: number;

  @Column({ comment: '年龄（天）', nullable: true })
  ageDay: number;

  // 身高、体重
  @Column({ comment: '身高', nullable: true })
  height: number;

  @Column({ comment: '体重', nullable: true })
  weight: number;

  @Index({ unique: true })
  @Column({ comment: '电话', length: 20, nullable: true })
  phone: string;

  @Column({ comment: '地址', length: 200, nullable: true })
  address: string;

  // 住院状态、住院通道
  @Column({
    comment: '住院状态',
    dict: ['未住院', '住院中', '已出院'],
    default: 0,
  })
  hospitalStatus: number;

  @Column({ comment: '床号', default: 0 })
  bedNumber: number;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;
}
