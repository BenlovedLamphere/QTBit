export const GET_PRODUCTLIST_REQUEST = "productlist/GET_PRODUCTLIST_REQUEST";
export const GET_PRODUCTLIST_SUCCESS = "productlist/GET_PRODUCTLIST_SUCCESS";
export const GET_PRODUCTLIST_FAIL = "productlist/GET_PRODUCTLIST_FAIL";

export function getproductlist(num) {
    return {
        types: [GET_PRODUCTLIST_REQUEST, GET_PRODUCTLIST_SUCCESS, GET_PRODUCTLIST_FAIL],
        promise: client => client.get('/api/goods/list?pageNo=1')
    }
}