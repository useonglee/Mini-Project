import axios from 'axios';
import { useCallback, useState, Dispatch, ChangeEvent } from 'react';

type ReturnTypes<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<React.SetStateAction<T>>];

// any = ChangeEvent<HTMLInputElement>
// e.target.value = e.target.value as unknown as T

const useInput = <T>(initialData: T): ReturnTypes<T> => {
    const [value, setValue] = useState(initialData);
    const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue((e.target.value as unknown) as T);
    }, []);
    return [value, handler, setValue];
};

export default useInput;