export function charactersRequest(privateKey, publicKey) {
    return {
        type: '@characters/REQUEST',
        payload: { privateKey, publicKey },
    };
}

export function charactersSuccess(data, auth) {
    return {
        type: '@characters/SUCCESS_REQUEST',
        payload: { data, auth },
    };
}

export function charactersFailure() {
    return {
        type: '@characters/FAILURE_REQUEST',
    };
}
