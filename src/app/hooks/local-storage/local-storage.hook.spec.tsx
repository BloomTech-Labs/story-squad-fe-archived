import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from './local-storage.hook';

describe('useLocalStorage()', () => {
    it('should store a value', () => {
        const { result } = renderHook(() => useLocalStorage('test', true));
        expect(result.current.storedValue).toBe(true);
    });
});
