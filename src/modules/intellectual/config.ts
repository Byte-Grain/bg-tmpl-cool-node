import { ModuleConfig } from '@cool-midway/core';

/**
 * 模块配置
 */
export default () => {
  return {
    // 必须，模块名称
    name: '知识产权管理',
    // 必须，模块描述
    description: '用于管理专利、商标、软著等知识产权信息',
  } as ModuleConfig;
};
