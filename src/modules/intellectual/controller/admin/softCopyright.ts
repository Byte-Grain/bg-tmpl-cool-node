import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { IntellectualSoftCopyrightEntity } from '../../entity/softCopyright';
import { IntellectualSoftCopyrightService } from '../../service/softCopyright';

/**
 * 软著信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: IntellectualSoftCopyrightEntity,
  service: IntellectualSoftCopyrightService,
  pageQueryOp: {
    keyWordLikeFields: ['a.name', 'a.registrationNumber'],
    fieldEq: ['a.category', 'a.legalStatus'],
  },
})
export class AdminIntellectualSoftCopyrightController extends BaseController {}
