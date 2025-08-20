import { Inject } from '@midwayjs/core';
import { CoolController, BaseController } from '@cool-midway/core';
import { IntellectualPatentDocumentEntity } from '../../entity/patentDocument';
import { IntellectualPatentDocumentService } from '../../service/patentDocument';

/**
 * 专利收文信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: IntellectualPatentDocumentEntity,
  service: IntellectualPatentDocumentService,
  pageQueryOp: {
    keyWordLikeFields: ['a.patentNumber', 'a.name'],
  },
})
export class AdminIntellectualPatentDocumentController extends BaseController {}
