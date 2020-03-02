import produce from 'immer';

const INITIAL_STATE = {
    authorized: false,
    auth: null,
    loading: false,
    characters: null,
    offset: 5,
};

export default function characters(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@characters/REQUEST': {
                draft.loading = true;
                break;
            }
            case '@characters/SUCCESS_REQUEST': {
                console.log(state);
                console.log(action);
                draft.authorized = true;
                draft.auth = action.payload.auth;
                draft.characters = action.payload.data;
                draft.offset = action.payload.offset;
                draft.loading = false;
                break;
            }
            case '@characters/FAILURE_REQUEST': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
