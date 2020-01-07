import { renderHook, act } from '@testing-library/react-hooks';
import { useAPI } from './api.hook';

const TEST_URL = 'https://jsonplaceholder.typicode.com';
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

describe('useAPI()', () => {
    it('should GET data by default', async () => {
        const { result } = renderHook(() => useAPI<Todo>(`${TEST_URL}/todos/1`));

        await act(async () => {
            await result.current.request();
        });

        expect(result.current.response?.userId).toBe(1);
    });

    it('should PUT data', async () => {
        const { result } = renderHook(() => useAPI<Todo>(`${TEST_URL}/todos/1`, 'PUT'));

        await act(async () => {
            await result.current.request({ completed: true });
        });

        expect(result.current.response?.completed).toBe(true);
    });

    it('should POST data', async () => {
        const { result } = renderHook(() => useAPI<Todo>(`${TEST_URL}/todos`, 'POST'));

        await act(async () => {
            await result.current.request({
                userId: 10,
                id: 30,
                title: 'Hello World',
                completed: true,
            });
        });

        expect(result.current.response?.title).toBe('Hello World');
    });
});
