import { BaseEntity } from '../../base/entity/base';
import { Column, Entity } from 'typeorm';

/**
 * 范式类型
 */
@Entity('health_paradigm_type')
export class HealthParadigmTypeEntity extends BaseEntity {
  @Column({ comment: '名称', length: 50 })
  name: string;

  @Column({ comment: '配置信息', type: 'text', nullable: true })
  configInfo: string;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;
}
