import jsonp from 'jsonp';
import {VERSION} from '../constans/request';

const request = (method, params, success, error) => {
    params.v = VERSION;

    let paramsString = null;
    for (let name in params) {
        if (paramsString === null) {
            paramsString = `${name}=${params[name]}`;
        }
        else {
            paramsString = `${paramsString}&${name}=${params[name]}`;
        }
    }

    return jsonp(`https://api.vk.com/method/${method}?${paramsString}`, null, (errorData, data) => {
        if (errorData) {
            error(errorData.error);
        }
        else {
            if ('error' in data) {
                error(data.error);
            }
            else {
                success(data.response);
            }
        }
    });
};

export default request;