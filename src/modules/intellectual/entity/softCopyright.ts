import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 软著信息
 */
@Entity('intellectual_soft_copyright')
export class IntellectualSoftCopyrightEntity extends BaseEntity {
  @Index()
  @Column({ comment: '名称', length: 255 })
  name: string;

  @Column({ comment: '版本', length: 255, nullable: true })
  version: string;

  @Column({ comment: '简称', length: 255, nullable: true })
  shortName: string;

  @Column({ comment: '分类', dict: ['软件', '作品'], default: 0 })
  category: number;

  @Column({ comment: '流水号', length: 255, nullable: true })
  serialNumber: string;

  @Index({ unique: true })
  @Column({ comment: '登记号', length: 255, nullable: true })
  registrationNumber: string;

  @Column({ comment: '证书号', length: 255, nullable: true })
  certificateNumber: string;

  @Column({
    comment: '开发方式',
    dict: ['独立开发', '合作开发', '委托开发'],
    default: 0,
  })
  developmentMethod: number;

  @Column({ comment: '完成日', type: 'date', nullable: true })
  completionDate: Date;

  @Column({ comment: '发表日', type: 'date', nullable: true })
  publicationDate: Date;

  @Column({ comment: '申请日', type: 'date', nullable: true })
  applicationDate: Date;

  @Column({ comment: '证书日', type: 'date', nullable: true })
  certificateDate: Date;

  @Column({
    comment: '取得方式',
    dict: ['原始取得', '继受取得'],
    default: 0,
  })
  acquisitionMethod: number;

  @Column({ comment: '权利人', length: 255, nullable: true })
  rightHolder: string;

  @Column({
    comment: '权利范围',
    dict: ['全部权利', '部分权利'],
    default: 0,
  })
  scopeOfRight: number;

  @Column({ comment: '申请人', length: 255, nullable: true })
  applicant: string;

  @Column({
    comment: '法律状态',
    dict: [
      '未进行',
      '待提交',
      '待受理',
      '受理',
      '审查',
      '登记',
      '转让',
      '许可使用',
    ],
    default: 0,
  })
  legalStatus: number;
}
