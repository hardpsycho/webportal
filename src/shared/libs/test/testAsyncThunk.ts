import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit'

import { RootStateSchema } from '@app/store'
import { instanceApi } from '@shared/api/instanceApi'

jest.mock('@shared/api/instanceApi')
const mockedAxios = jest.mocked<typeof instanceApi>(instanceApi)

export class TestAsyncThunk<Returned, ThunkArgs, RejectedValue> {
    dispatch: Dispatch
    getState: () => RootStateSchema
    actionCreator: (
        args: ThunkArgs
    ) => AsyncThunkAction<Returned, ThunkArgs, { rejectValue: RejectedValue }>
    api: jest.MockedFunctionDeep<typeof instanceApi>

    constructor(
        actionCreator: (
            args: ThunkArgs
        ) => AsyncThunkAction<Returned, ThunkArgs, { rejectValue: RejectedValue }>
    ) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
        this.api = mockedAxios
    }

    async callAsyncThunk(args: ThunkArgs) {
        const asyncThunkAction = this.actionCreator(args)
        const result = await asyncThunkAction(this.dispatch, this.getState, { api: this.api })
        return result
    }
}
