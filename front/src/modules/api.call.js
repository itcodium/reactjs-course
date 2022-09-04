export default function ApiCall(url, params = {}, body) {
    const token = localStorage.getItem('token');
    const id_usuario = localStorage.getItem('id_usuario');

    params.headers = params.headers ? params.headers : {};
    params.headers['Authorization'] = "Bearer " + token;
    params.headers['user_id'] = id_usuario;

    const fetchParams = {
        method: params.method || 'GET',
        body: body ? JSON.stringify(body) : null,
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