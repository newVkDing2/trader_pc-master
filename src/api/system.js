/*
  系统相关api
*/
import request from "@/router/axios";
import config from "@/config/index";


//获取配置项(导航栏 页面路径)
export const getSettingConfigApi = () => {
  return request({
    url: '/api/common/getAllSetting',
    method: "post"
  });
};


/*
  获取字典数据
*/
export const getDicTableData = (dictCode) => {
  return request({
    url: `/api/${config.apiRequestHead}/sys/sys/dict/getDictItems/${dictCode}`,
    method: "get",
    params: {},
  });
};

//获取表格字典数据
export const getTableDicData = (table, label, value) => {
  return request({
    url: `/api/${config.apiRequestHead}/sys/sys/dict/getDict/${table},${label},${value}`,
    method: "get",
    params: {
      keyword: "",
    },
  });
};

/*
  获取表单开发列表数据
*/
export const getDataApi = (headId, params) => {
  // 排序
  if (!params.column && !params.order) {
    params.column = "id";
    params.order = "desc";
  }
  return request({
    url: `/api/${config.apiRequestHead}/cgform-api/getData/${headId}`,
    method: "get",
    params,
  });
};

/*
  获取表单开发详情数据
*/
export const getDetailDataApi = (headId, id) => {
  return request({
    url: `/api/${config.apiRequestHead}/cgform-api/detailData/${headId}/${id}`,
    method: "get",
    params: {},
  });
};

//上传文件
export const uploadeFileApi = (data) => {
  return request({
    url: `/api/${config.apiRequestHead}/cgform-api/upload/file`,
    method: "post",
    data,
  });
};

//设置后端语言
export const setHtLangApi = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/lang/${type}`,
    method: "get",
    params: {},
  });
};

//获取区号列表

export const getAreaListApi = (type) => {
  return request({
    url: `/api/${config.apiRequestHead}/coin/open/get/phone/areaCode`,
    method: "get",
    params: {},
  });
};

//获取区号列表(new)
export const getCountryCode = () => {
  return request({
    url: '/api/user/getCountryCode',
    method: "post",
  });
};