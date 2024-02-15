import jwtDecode from "jwt-decode";

let getToken = () => {
    return localStorage.getItem("access_token");
}

let getDecodeToken = () => {
    if(getToken()) {
        return jwtDecode(localStorage.getItem("access_token"));
    } else {
        return false;
    }
}

let getExpiryTime = () => {
    if (getDecodeToken() && !(getDecodeToken().exp * 1000 < Date.now())) {
        return true;
    } else {
        return localStorage.removedItem('access_token');
    }
}

export default {
    getToken,
    getDecodeToken,
    getExpiryTime,
}