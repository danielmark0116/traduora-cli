"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const config_1 = require("./config");
exports.getToken = async () => {
    const result = await node_fetch_1.default(`${config_1.config('baseUrl')}/auth/token`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            'username': config_1.config('username'),
            'password': config_1.config('password'),
            'grant_type': 'password'
        }),
    })
        .then(r => r.json())
        .catch(error => error);
    return result.access_token;
};
exports.headersWithToken = async () => ({
    'content-type': 'application/json',
    authorization: `Bearer ${await exports.getToken()}`,
});
exports.get = async (uri) => {
    const response = await node_fetch_1.default(`${config_1.config('baseUrl')}/${uri}`, {
        headers: await exports.headersWithToken()
    });
    const { data } = await response.json();
    return data;
};
exports.post = async (uri, body, method = 'POST') => {
    const response = await node_fetch_1.default(`${config_1.config('baseUrl')}/${uri}`, {
        method,
        headers: await exports.headersWithToken(),
        body: JSON.stringify(body),
    });
    const { data, error } = await response.json();
    return data || error;
};
