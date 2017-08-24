const getToken = (url) => {
    const param = 'access_token=';
    let start = url.indexOf(param, 0) + param.length;
    let end = url.indexOf('&', start);
    return url.substring(start, end);
};

export default getToken;