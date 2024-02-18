import { jwtDecode } from 'jwt-decode';

let getToken = () => {
    return localStorage.getItem("token");
}

let getDecodedToken = () => {
    if(getToken()) {
        return jwtDecode(localStorage.getItem("token"));
    } else {
        return false;
    }
}

let getExpiryTime = () => {
    if (getDecodedToken() && !(getDecodedToken().exp * 1000 < Date.now())) {
        return true;
    } else {
        return localStorage.removeItem('token');
    }
}

let getRoles = () => {
    // On teste si il y a un token décodé et si il n'a pas expiré
    if (getExpiryTime()) {
      // la valeur de base est un tableau dans un string, on le parse pour faire sauter le string et
      // on le tostring pour faire sauter le tableau, comme ça on a seulement la valeur
      // return JSON.parse(getDecodedToken().role_id).toString();
      return getDecodedToken().role;
    } else {
      return false;
    }
  };

  let getName = () => {
    // On teste si il y a un token décodé et si il n'a pas expiré
    if (getExpiryTime()) {
      return getDecodedToken().name;
    } else {
      return false;
    }
  };

  let getId = () => {
    // On teste si il y a un token décodé et si il n'a pas expiré
    if (getExpiryTime()) {
      return getDecodedToken().id;
    } else {
      return false;
    }
  };

  let loggedAndAdmin = () => {
    // Check si il y a un token valide et check si le rôle est celui d'un admin, répond true quand c'est vrai
    return !!(getExpiryTime() && getRoles() === "[ROLE_ADMIN]");
  };

export default {
    getToken,
    getDecodedToken,
    getExpiryTime,
    getRoles,
    getName,
    getId,
    loggedAndAdmin,
}