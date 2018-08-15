export const GET_WORDS_REQUEST = "WORDS/GET_WORDS_REQUEST";
export const GET_WORDS_SUCCESS = "WORDS/GET_WORDS_SUCCESS";
export const GET_WORDS_FAIL = "WORDS/GET_WORDS_FAIL";

export function getlogin(data) {
    return {
        types: [GET_WORDS_REQUEST, GET_WORDS_SUCCESS, GET_WORDS_FAIL],
        promise: client => client.post('/api/customer/login',data)
    }
}