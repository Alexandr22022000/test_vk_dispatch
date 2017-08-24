import {SET_TOKEN} from '../constans/actions';

const setTokenInState = (token, allFunction) => ({
    type: SET_TOKEN,
    token,
    allFunction
});

const setToken = (token, allFunction) => (dispatch) => {
    if (token === '') {
        document.cookie = `token=${token};max-age=0;path=/`;
        document.cookie = `all-function=${allFunction};max-age=0;path=/`;
    }
    else {
        document.cookie = `token=${token};max-age=2678400;path=/`;
        document.cookie = `all-function=${allFunction};max-age=2678400;path=/`;
    }
    dispatch(setTokenInState(token, allFunction));
};

export default setToken;