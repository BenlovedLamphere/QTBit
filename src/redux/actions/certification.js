export const GET_UPLOADID_REQUEST = "certification/GET_UPLOADID_REQUEST";
export const GET_UPLOADID_SUCCESS = "certification/GET_UPLOADID_SUCCESS";
export const GET_UPLOADID_FAIL = "certification/GET_UPLOADID_FAIL";

export function uploadId(data) {

	console.log(data);

    return {
        types: [GET_UPLOADID_REQUEST, GET_UPLOADID_SUCCESS, GET_UPLOADID_FAIL],
        promise: client => client.post('/api/customer/applyidentity?idcardno=1299993',data)
    }
}



