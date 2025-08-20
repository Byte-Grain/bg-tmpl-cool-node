import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商标收文信息
 */
@Entity('intellectual_trademark_document')
export class IntellectualTrademarkDocumentEntity extends BaseEntity {
  @Index()
  @Column({ comment: '注册号', length: 255 })
  registrationNumber: string;

  @Column({ comment: '类型', length: 255, nullable: true })
  type: string;

  @Column({ comment: '名称', length: 255 })
  name: string;

  @Column({ comment: '日期', type: 'date', nullable: true })
  date: Date;

  @Column({ comment: '附件', length: 255 })
  attachment: string;
}
