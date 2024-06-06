import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReduser } from 'entities/Counter';
import { userReduser } from 'entities/User';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState: StateSchema | undefined) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReduser,
        user: userReduser,

    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
