/* this baseApiUrl is temporary, it should be replaced by a method using the .env file. */
let baseApiUrl;

if (process.env.NODE_ENV === 'development') {
    // Local development settings
    baseApiUrl = process.env.BASE_URL || 'http://localhost:8310';
/* Use the following lines if we can set a different env for development and local */
// } else if (process.env.NODE_ENV === 'development') {
//     // Development specific settings
//     baseApiUrl = process.env.BASE_URL || 'https://nginx.dev.adventure-lab-cms.jp1.amazee.io/';
} else {
    // Production specific settings
    baseApiUrl = 'https://chizubouken-lab.jp';
}

export const BASE_API_URL = baseApiUrl;
export const TOKEN_KEY = 'access_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';
