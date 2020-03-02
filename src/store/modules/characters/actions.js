export function charactersRequest(privateKey, publicKey, offset) {
    return {
        type: '@characters/REQUEST',
        payload: { privateKey, publicKey, offset },
    };
}

export function charactersSuccess(data, auth, offset) {
    return {
        type: '@characters/SUCCESS_REQUEST',
        payload: { data, auth, offset },
    };
}

export function charactersFailure() {
    return {
        type: '@characters/FAILURE_REQUEST',
    };
}

export function signOut() {
    return {
        type: '@characters/SIGN_OUT',
    };
}
