import { renderHook, act } from '@testing-library/react-hooks';
import { useAPI } from './api.hook';

import axios from 'axios';

const data = {
    userId: 1,
    id: 3,
    title: 'Hello World 2',
    completed: true,
};

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create.mockImplementation(() => axios);
mockedAxios.get.mockImplementationOnce(async () => ({ data }));
mockedAxios.put.mockImplementation(async (url, body) => ({ data: { ...body } }));
mockedAxios.post.mockImplementation(async (url, body) => ({ data: { ...body } }));
mockedAxios.delete.mockImplementation(async (url, body) => ({ data: { ...body } }));

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

describe('useAPI()', () => {
    it('should GET data by default', async () => {
        const { result } = renderHook(() => useAPI<Todo>(`/todos/1`));

        await act(async () => {
            await result.current.request();
        });

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.current.response?.userId).toBe(1);
    });

    it('should POST data', async () => {
        const { result } = renderHook(() => useAPI<Todo>(`/todos`, 'POST'));

        await act(async () => {
            await result.current.request({
                userId: 10,
                id: 30,
                title: 'Hello World',
                completed: true,
            });
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.current.response?.title).toBe('Hello World');
    });

    it('should PUT data', async () => {
        const { result } = renderHook(() => useAPI<Todo>(`/todos/1`, 'PUT'));

        await act(async () => {
            await result.current.request({ completed: true });
        });

        expect(mockedAxios.put).toHaveBeenCalled();
        expect(result.current.response?.completed).toBe(true);
    });

    it('should DELETE data', async () => {
        const { result } = renderHook(() => useAPI<Todo>(`/todos/1`, 'DELETE'));

        await act(async () => {
            await result.current.request();
        });

        expect(mockedAxios.delete).toHaveBeenCalled();
    });
});
