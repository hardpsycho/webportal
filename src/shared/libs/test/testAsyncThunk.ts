import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit'

import { RootStateSchema } from '@app/store'

export class TestAsyncThunk<Returned, ThunkArgs, RejectedValue> {
    dispatch: Dispatch
    getState: () => RootStateSchema
    actionCreator: (
        args: ThunkArgs
    ) => AsyncThunkAction<Returned, ThunkArgs, { rejectValue: RejectedValue }>

    constructor(
        actionCreator: (
            args: ThunkArgs
        ) => AsyncThunkAction<Returned, ThunkArgs, { rejectValue: RejectedValue }>
    ) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callAsyncThunk(args: ThunkArgs) {
        const asyncThunkAction = this.actionCreator(args)
        const result = await asyncThunkAction(this.dispatch, this.getState, undefined)
        return result
    }
}
