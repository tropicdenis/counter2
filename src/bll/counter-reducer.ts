const initialState = {
    clickCounter: 0,
    startValue: 0,
    maxValue: 0,
    onEdit: false
};

type InitialStateType = typeof initialState;

export const counterReducer = (state:InitialStateType = initialState, action: any) => {
    return state
}