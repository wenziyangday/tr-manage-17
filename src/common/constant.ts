/**
 * 网络服务API地址
 * */
export const { REACT_APP_API } = process.env;

/*
 * 白名单
 * */
type WhiteList = string[];
export const whiteList: WhiteList = ["/user/login"];
