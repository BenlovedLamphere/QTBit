export const GET_PRODUCT_REQUEST = "product/GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "product/GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "product/GET_PRODUCT_FAIL";

export function getproduct(num) {
    return {
        types: [GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL],
        promise: client => client.get('/api/goods/detail?id=' + num)
    }
}