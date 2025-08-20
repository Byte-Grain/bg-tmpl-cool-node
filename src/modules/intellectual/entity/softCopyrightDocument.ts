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

  @Column({ comment: '类型', length: 255, nullable: true })
  type: string;

  @Column({ comment: '名称', length: 255 })
  name: string;

  @Column({ comment: '日期', type: 'date', nullable: true })
  date: Date;

  @Column({ comment: '附件', length: 255, nullable: true })
  attachment: string;
}
