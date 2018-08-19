import {GET_UPLOADID_REQUEST, GET_UPLOADID_SUCCESS, GET_UPLOADID_FAIL} from 'actions/certification';


const initArt = {
    isLoading: false,
    idResult: {},
    errorMsg: ''
};

export default function reducer(state = initArt, action) {
    switch (action.type) {
        case GET_UPLOADID_REQUEST:
            return {
                ...state,
                isLoading: true,
                idResult: {},
                errorMsg: ''
            };
        case GET_UPLOADID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                idResult: action.result.data,
                errorMsg: ''
            };
        case GET_UPLOADID_FAIL:
            return {
                ...state,
                isLoading: false,
                idResult: [],
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}