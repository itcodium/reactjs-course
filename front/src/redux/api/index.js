export default function apiCall(url, params = {}, body) {
    const fetchParams = {
        method: params.method || 'GET',
        body: JSON.stringify(body) || null,
        headers: params.headers
    };
    return fetch(url, fetchParams)
        .then(response => {
            return response.json()
        })

}