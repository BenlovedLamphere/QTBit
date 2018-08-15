export const GET_REGISTER_REQUEST = "register/GET_REGISTER_REQUEST";
export const GET_REGISTER_SUCCESS = "register/GET_REGISTER_SUCCESS";
export const GET_REGISTER_FAIL = "register/GET_REGISTER_FAIL";

export function getregister(data) {
    return {
        types: [GET_REGISTER_REQUEST, GET_REGISTER_SUCCESS, GET_REGISTER_FAIL],
        promise: client => client.post('/api/customer/register',data)
    }
}