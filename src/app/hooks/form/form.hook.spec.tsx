import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './form.hook';

describe('useForm()', () => {
    it('should update name', () => {
        const { result } = renderHook(() => useForm({ name: 'Joe' }));

        act(() => {
            result.current.handleStringChange('name')({ target: { value: 'Sam' } } as any);
        });

        expect(result.current.state).toStrictEqual({ name: 'Sam' });
    });

    it('should update termsOfService', () => {
        const { result } = renderHook(() => useForm({ termsOfService: false }));

        act(() => {
            result.current.handleBoolChange('termsOfService')({ target: { checked: true } } as any);
        });

        expect(result.current.state).toStrictEqual({ termsOfService: true });
    });
});
