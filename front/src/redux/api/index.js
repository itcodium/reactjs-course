export default function apiCall(url, params = {}, body) {
    const localUser = localStorage.getItem('user') || null;
    let jsonUser = null;
    let token = null;
    if (localUser) {
        jsonUser = JSON.parse(localUser);
        if (jsonUser && jsonUser.payload) {
            token = jsonUser.payload.token
        }
    }
    params.headers = params.headers ? params.headers : {};
    params.headers['Authorization'] = "Bearer " + token;

    const fetchParams = {
        method: params.method || 'GET',
        body: JSON.stringify(body) || null,
        headers: params.headers
    };
    return fetch(url, fetchParams)
        .then(response => {
            return response.json();
        }).then(response => {
            if (response.status === "error") {
                throw response;
            }
            return response;
        })
}


