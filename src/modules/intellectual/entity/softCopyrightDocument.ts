import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 软著收文信息
 */
@Entity('intellectual_soft_copyright_document')
export class IntellectualSoftCopyrightDocumentEntity extends BaseEntity {
  @Index()
  @Column({ comment: '流水号', length: 255 })
  serialNumber: string;

  @Column({ comment: '软著名称', length: 255, nullable: true })
  softCopyrightName: string;

  @Column({ comment: '法律状态', dict: ['未进行', '待提交', '待受理', '受理', '审查', '登记', '转让', '许可使用'], default: 0, nullable: true })
  legalStatus: number;

  @Column({ comment: '类型', dict: ['电子发文', '纸质发文'], default: 0, nullable: true })
  type: number;

  @Column({ comment: '名称', dict: ['版权登记表', '版权证书', '补正通知'], default: 0 })
  name: number;

  @Column({ comment: '日期', type: 'date', nullable: true })
  date: Date;

  @Column({ comment: '附件', length: 255, nullable: true })
  attachment: string;
}
