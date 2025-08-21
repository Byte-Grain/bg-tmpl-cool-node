import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 专利信息
 */
@Entity('intellectual_patent')
export class IntellectualPatentEntity extends BaseEntity {
  @Index()
  @Column({ comment: '案号', length: 255, nullable: true })
  caseNumber: string;

  @Index({ unique: true })
  @Column({ comment: '专利号', length: 255, nullable: true })
  patentNumber: string;

  @Index()
  @Column({ comment: '名称', length: 255 })
  name: string;

  @Column({ comment: '申请日', type: 'date', nullable: true })
  applicationDate: Date;

  @Column({ comment: '证书日', type: 'date', nullable: true })
  certificateDate: Date;

  @Column({ comment: '证书号', length: 255, nullable: true })
  certificateNumber: string;

  @Column({ comment: '专利权利人', length: 255, nullable: true })
  patentee: string;

  @Column({
    comment: '专利类型',
    dict: ['发明专利', '实用新型专利', '外观设计专利'],
    default: 0,
  })
  patentType: number;

  @Column({
    comment: '法律状态',
    dict: 'intellectual_legal_status',
    default: 0,
  })
  legalStatus: number;

  @Column({ comment: '发明人', length: 255, nullable: true })
  inventor: string;

  @Column({ comment: '代理机构', length: 255, nullable: true })
  agency: string;

  @Column({ comment: '授权公告号', length: 255, nullable: true })
  authorizationAnnouncementNumber: string;

  @Column({
    comment: '专利级别',
    dict: ['壁垒专利', '重要专利', '普通专利'],
    default: 2,
    nullable: true,
  })
  patentLevel: number;

  @Column({ comment: '权力要求', type: 'text', nullable: true })
  claimsRequirement: string;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;
}
