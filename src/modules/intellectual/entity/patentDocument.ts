import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 专利收文信息
 */
@Entity('intellectual_patent_document')
export class IntellectualPatentDocumentEntity extends BaseEntity {
  @Index()
  @Column({ comment: '专利号', length: 255 })
  patentNumber: string;

  @Column({ comment: '类型', length: 255, nullable: true })
  type: string;

  @Column({ comment: '名称', length: 255 })
  name: string;

  @Column({ comment: '日期', type: 'date', nullable: true })
  date: Date;

  @Column({ comment: '附件', length: 255 })
  attachment: string;
}
