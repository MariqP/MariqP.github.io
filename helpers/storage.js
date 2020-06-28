export const appKey = "kid_HJhF1AHR8";
export const appSecret = "d347a2ca70e84837b7da29c469687026";

function saveData(key, value) {
    localStorage.setItem(key + appKey, JSON.stringify(value));
}

export function getData(key) {
    return localStorage.getItem(key + appKey);
}

export function saveUser(data) {
    saveData("userInfo", data);
    saveData("authToken", data._kmd.authtoken);
}

export function removeUser() {
    localStorage.clear();
}