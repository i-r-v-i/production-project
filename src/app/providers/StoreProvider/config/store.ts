import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReduser } from 'entities/Counter';
import { userReduser } from 'entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState: StateSchema | undefined) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReduser,
        user: userReduser,

    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
