
import { IOauth, IService, IParameter } from './interfaces/oauth'

const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
export class Parameters {
    parameters: IParameter = {};
    add(name: string, value: string) {
        this.parameters[name] = value;
    }
    getOauthUrlParameters = (params?: IOauth) => {
        this.add("oauth_nonce", params?.oauth_nonce || this.getNonce(32));
        this.add("oauth_version", params?.oauth_version || '1.0');
        this.add("oauth_signature_method", params?.oauth_signature_method || 'HMAC-SHA1');
        this.add("oauth_timestamp", params?.oauth_timestamp || this.getTimestamp().toString());
        if (params?.oauth_consumer_key) {
            this.add("oauth_consumer_key", params?.oauth_consumer_key);
        }
        return this.getUrlParameters();
    }

    getUrlParameters = () => {
        const keys: string[] = [];
        Object.keys(this.parameters).forEach(key => {
            keys.push(key);
        });
        let strParams: string = "";
        keys.sort().forEach(key => {
            strParams += key + '=' + this.parameters[key] + "&";
        });
        return strParams.substring(0, strParams.length - 1);
    }

    getTimestamp = () => {
        var t = (new Date()).getTime();
        return Math.floor(t / 1000);
    }
    getNonce = (length: number) => {
        const chars = CHARS;
        let result = "";
        for (var i = 0; i < length; ++i) {
            let rnum = Math.floor(Math.random() * chars.length);
            result += chars.substring(rnum, rnum + 1);
        }
        return result;
    }

    getBaseUrl = (service: IService, params?: IOauth): string => {
        const baseStringURL = service.method + '&' + encodeURIComponent(service?.url || "");
        const baseStringParams = this.getOauthUrlParameters(params);
        return baseStringURL + '&' + encodeURIComponent(baseStringParams);
    }
}