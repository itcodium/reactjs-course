
export const queryStringToJSON = (queryString: string) => {
    if (!queryString) {
        return null;
    }
    let pairs: string[] = queryString.slice(1).split('&');

    const result: any = {};
    pairs.forEach((pair: String) => {
        let item: string[] = pair.split('=');
        let columnName = item[0];
        result[columnName] = decodeURIComponent(item[1] || '');
    });
    return JSON.parse(JSON.stringify(result));
}