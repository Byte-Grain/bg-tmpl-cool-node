import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 机构信息
 */
@Entity('intellectual_organization')
export class IntellectualOrganizationEntity extends BaseEntity {
  @Index()
  @Column({ comment: '名称', length: 255 })
  name: string;

  @Column({
    comment: '类型',
    dict: ['企业', '高校', '科研机构', '其他'],
    default: 0,
  })
  type: number;

  @Column({ comment: '联系人', length: 255, nullable: true })
  contactPerson: string;

  @Column({ comment: '电话', length: 20, nullable: true })
  phone: string;

  @Column({ comment: '地址', length: 255, nullable: true })
  address: string;

  @Column({ comment: '邮箱', length: 255, nullable: true })
  email: string;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;
}
