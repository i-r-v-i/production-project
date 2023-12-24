import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState: StateSchema | undefined) {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
