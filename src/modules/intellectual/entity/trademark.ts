import { BaseEntity } from '../../base/entity/base';
import { Column, Entity, Index } from 'typeorm';

/**
 * 商标信息
 */
@Entity('intellectual_trademark')
export class IntellectualTrademarkEntity extends BaseEntity {
  @Index({ unique: true })
  @Column({ comment: '注册号', length: 255 })
  registrationNumber: string;

  @Column({ comment: '来源', length: 255, nullable: true })
  source: string;

  @Column({
    comment: '类型',
    dict: ['文字商标', '图形商标', '组合商标'],
    default: 0,
  })
  type: number;

  @Index()
  @Column({ comment: '名称', length: 255 })
  name: string;

  @Column({ comment: '图片', length: 255, nullable: true })
  image: string;

  @Column({ comment: '分类号', length: 255, nullable: true })
  classificationNumber: string;

  @Column({ comment: '注册人', length: 255 })
  registrant: string;

  @Column({ comment: '申请日', type: 'date', nullable: true })
  applicationDate: Date;

  @Column({ comment: '注册生效日', type: 'date', nullable: true })
  registrationEffectiveDate: Date;

  @Column({ comment: '申请服务内容', type: 'text', nullable: true })
  applicationServiceContent: string;

  @Column({ comment: '核定使用商品/服务项目', type: 'text', nullable: true })
  approvedGoodsServices: string;

  @Column({ comment: '有效期', type: 'date', nullable: true })
  validityPeriod: Date;

  @Column({ comment: '代理机构', length: 255, nullable: true })
  agency: string;

  @Column({
    comment: '法律状态',
    dict: 'intellectual_legal_status',
    default: 0,
  })
  legalStatus: number;
}
