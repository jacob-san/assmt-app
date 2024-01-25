import {useContext, createContext} from 'react';
import getTheme from './getTheme';

export const theme = createContext(getTheme())

export default () => {
    return useContext(theme); 
}