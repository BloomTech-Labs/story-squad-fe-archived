import { renderHook, act } from '@testing-library/react-hooks';
import { useAPI } from './api.hook';
import mockAxios from 'jest-mock-axios';
const TEST_URL = 'https://jsonplaceholder.typicode.com';
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});

it('useAPI should get data from the server and convert it to axios', () => {
    const catchFn = jest.fn(),
        thenFn = jest.fn();

    // using the component, which should make a server response
    const clientMessage = 'client is saying hello!';

    useAPI(clientMessage);
    // .then(thenFn)
    // .catch(catchFn);

    // since `post` method is a spy, we can check if the server request was correct
    // a) the correct method was used (post)
    // b) went to the correct web service URL ('/web-service-url/')
    // c) if the payload was correct ('client is saying hello!')
    expect(mockAxios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com', {
        data: clientMessage,
    });

    // simulating a server response
    const responseObj = { data: 'server says hello!' };
    mockAxios.mockResponse(responseObj);

    // checking the `then` spy has been called and if the
    // response from the server was converted to upper case
    expect(thenFn).toHaveBeenCalledWith('SERVER SAYS HELLO!');

    // catch should not have been called
    expect(catchFn).not.toHaveBeenCalled();
});

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
