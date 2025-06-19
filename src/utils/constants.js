/* this baseApiUrl is temporary, it should be replaced by a method using the .env file. */
let baseApiUrl;

// we need to set the specific port for local development
if (process.env.NODE_ENV === 'local') {
    // Local development settings
    baseApiUrl = process.env.BASE_URL || 'http://127.0.0.1:8301';
} else if (process.env.NODE_ENV === 'development') {
    // Development specific settings
    // baseApiUrl = process.env.BASE_URL || 'https://nginx.dev.adventure-lab-cms.jp1.amazee.io/'; if we want to use a specific URL for development
    baseApiUrl = process.env.BASE_URL || '';
} else {
    // Production specific settings
    baseApiUrl = 'https://chizubouken-lab.jp';
}

export const BASE_API_URL = baseApiUrl;
export const TOKEN_KEY = 'access_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';
