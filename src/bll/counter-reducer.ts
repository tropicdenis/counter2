const initialState = {
    clickCounter: 0,
    startValue: 0,
    maxValue: 0,
    onEdit: false
};

type InitialStateType = typeof initialState;

type ActionTypes = IncClickCounterActionType | StartValueChangeActionType | MaxValueChangeActionType |
                ResetClickCounterActionType | SetCounterActionType | editModeSwitcherActionType

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

        switch (action.type) {
            case "INC-VAlUE": {
                return {
                    ...state, clickCounter: state.clickCounter + 1
                }
            }
            case "START-VALUE-CHANGE": {
                return {
                    ...state, startValue: action.newStartValue
                }
            }
            case "MAX-VALUE-CHANGE": {
                return {
                    ...state, maxValue: action.newMaxValue
                }
            }
            case "RESET-CLICK-COUNTER": {
                return {
                    ...state, clickCounter: state.startValue
                }
            }
            case "SET-COUNTER": {
                return {
                    ...state, clickCounter: state.startValue, onEdit: false
                }
            }
            case "EDIT-MODE-SWITCHER": {
                return {
                    ...state, onEdit: true
                }
            }
            default:
                return state
        }

    }

export const incClickCounterAC = () => ({type: 'INC-VAlUE'} as const);
export const startValueChangeAC = (newStartValue: number) => ({type: 'START-VALUE-CHANGE', newStartValue} as const);
export const maxValueChangeAC = (newMaxValue: number) => ({type: 'MAX-VALUE-CHANGE', newMaxValue} as const);
export const resetClickCounterAC = () => ({type: 'RESET-CLICK-COUNTER'} as const);
export const setCounterAC = () => ({type: 'SET-COUNTER'} as const);
export const editModeSwitcherAC = () => ({type: 'EDIT-MODE-SWITCHER'} as const);

export type IncClickCounterActionType = ReturnType<typeof incClickCounterAC>
export type StartValueChangeActionType = ReturnType<typeof startValueChangeAC>
export type MaxValueChangeActionType = ReturnType<typeof maxValueChangeAC>
export type ResetClickCounterActionType = ReturnType<typeof resetClickCounterAC>
export type SetCounterActionType = ReturnType<typeof setCounterAC>
export type editModeSwitcherActionType = ReturnType<typeof editModeSwitcherAC>
