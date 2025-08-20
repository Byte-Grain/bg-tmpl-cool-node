import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { IntellectualOrganizationEntity } from '../../entity/organization';
import { IntellectualOrganizationService } from '../../service/organization';

/**
 * 机构信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: IntellectualOrganizationEntity,
  service: IntellectualOrganizationService,
  pageQueryOp: {
    keyWordLikeFields: ['a.code', 'a.name'],
    fieldEq: ['a.type'],
  },
})
export class AdminIntellectualOrganizationController extends BaseController {}
