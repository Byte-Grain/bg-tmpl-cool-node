import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 用户信息
 */
@Entity('health_user')
export class HealthUserEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '账号', length: 50 })
  account: string;

  @Column({ comment: '姓名', length: 50, nullable: true })
  name: string;

  @Column({ comment: '性别', dict: ['未知', '男', '女'], default: 0 })
  gender: number;

  @Column({ comment: '年龄', nullable: true })
  age: number;

  @Index({ unique: true })
  @Column({ comment: '电话', length: 20, nullable: true })
  phone: string;

  @Column({ comment: '地址', length: 200, nullable: true })
  address: string;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;
}
