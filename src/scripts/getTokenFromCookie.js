const findData = (name, cookie) => {
    let start = cookie.indexOf(name, 0) + name.length + 1;
    let end = cookie.indexOf(';', start);

    if (end === -1) {
        return cookie.substring(start, cookie.length);
    }
    return cookie.substring(start, end);
};

const getTokenFromCookie = (cookie) => {
    let token = findData('token', cookie);
    let allFunction = findData('all-function', cookie) === 'true';

    return {token, allFunction};
};

export default getTokenFromCookie;