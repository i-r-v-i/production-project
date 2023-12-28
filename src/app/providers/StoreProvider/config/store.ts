import { configureStore } from '@reduxjs/toolkit';
import { counterReduser } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState: StateSchema | undefined) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReduser,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
