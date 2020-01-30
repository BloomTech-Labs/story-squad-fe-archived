import { renderHook, act } from '@testing-library/react-hooks';
import { useAddToHomescreenPrompt } from './usePWA.hook';

describe('UseAddToHomescreenPrompt()', () => {
    it('should change captured prompt', () => {
        const { result } = renderHook(() => useAddToHomescreenPrompt());
        expect(result);
    });
});
