export interface IOauth {
    oauth_callback?: string;
    oauth_consumer_key?: string;
    oauth_nonce?: string;
    oauth_signature_method?: string;
    oauth_timestamp?: string;
    oauth_version?: string;
}
export interface IUserAuthorization {
    oauth_token: string;
    oauth_token_secret: string;
    oauth_verifier?: string;
    oauth_callback_confirmed?: string;
}

export interface IParameter {
    [key: string]: string;
}

export interface IService {
    url?: string;
    method?: string;
}

export interface IApiKey {
    key: string;
    secret: string;
}