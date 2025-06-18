/* this baseApiUrl is temporary, it should be replaced by a method using the .env file. */
let baseApiUrl;

if (process.env.NODE_ENV === 'production') {
    // Production specific settings
    baseApiUrl = 'https://chizubouken-lab.jp';
} else if (process.env.NODE_ENV === 'development') {
    // Development specific settings
    baseApiUrl = 'https://nginx.dev.adventure-lab-cms.jp1.amazee.io/';
} else {
    // Local development settings
    baseApiUrl = process.env.BASE_URL || 'http://localhost:8310';
}

export const BASE_API_URL = baseApiUrl;
export const TOKEN_KEY = 'access_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';
