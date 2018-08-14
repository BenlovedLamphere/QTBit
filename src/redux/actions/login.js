export const GET_WORDS_REQUEST = "WORDS/GET_WORDS_REQUEST";
export const GET_WORDS_SUCCESS = "WORDS/GET_WORDS_SUCCESS";
export const GET_WORDS_FAIL = "WORDS/GET_WORDS_FAIL";

export function getwords(num) {
    return {
        types: [GET_WORDS_REQUEST, GET_WORDS_SUCCESS, GET_WORDS_FAIL],
        promise: client => client.get('https://v1.hitokoto.cn/?' + num)
    }
}