/*
 * @Author: zhang
 * @Date: 2022-06-23 10:58:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-23 17:50:51
 * @Descripttion: 
 */
import service from "../";
// 获取搜索推荐
export function searchSuggest(params) {
    return service({
        url: '/search/suggest',
        method: 'get',
        params: params
    })
}

// 搜索匹配
export function search(params) {
    return service({
        url: '/search',
        method: 'get',
        params: params
    })
}