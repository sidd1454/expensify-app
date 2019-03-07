import authReducer from '../../reducers/auth';

test('should render login properly', () => {
    const action ={
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state =  authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should render logout properly', () => {
    const action = {
        type: 'LOGOUT',
    };
    const state =  authReducer({uid: 'anything'}, action);
    expect(state).toEqual({});
});