import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';

interface loginByUsernameProps {
    username: string;
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(i18n.t('Введен неверный логин или пароль'));
        }
    },
);
