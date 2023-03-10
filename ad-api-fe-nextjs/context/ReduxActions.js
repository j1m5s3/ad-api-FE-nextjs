export function setUserData(userData) {
    return { type: 'SET_USER_DATA', payload: userData };
}

export function setPublicData(publicData) {
    return { type: 'SET_PUBLIC_DATA', payload: publicData };
}

export function setIsAuthenticated(isAuthenticated) {
    return { type: 'SET_IS_AUTHENTICATED', payload: isAuthenticated };
}

export function setUserDataOfFocus(userDataOfFocus) {
    return { type: 'SET_USER_DATA_OF_FOCUS', payload: userDataOfFocus };
}

export function setSelector(selector) {
    return { type: 'SET_SELECTOR', payload: selector };
}

export function setUserToken(userToken) {
    return { type: 'SET_USER_TOKEN', payload: userToken };
}
