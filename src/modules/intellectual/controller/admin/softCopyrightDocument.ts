import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { IntellectualSoftCopyrightDocumentEntity } from '../../entity/softCopyrightDocument';
import { IntellectualSoftCopyrightDocumentService } from '../../service/softCopyrightDocument';

/**
 * 软著收文信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: IntellectualSoftCopyrightDocumentEntity,
  service: IntellectualSoftCopyrightDocumentService,
  pageQueryOp: {
    keyWordLikeFields: ['a.serialNumber', 'a.name'],
  },
})
export class AdminIntellectualSoftCopyrightDocumentController extends BaseController {}
