import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';

import { CurrentChapterLink } from './current-chapter-link.component';

jest.mock('../../../util/requestFactory', () => () => ({
    get: () =>
        Promise.resolve({
            data: {
                week: 1,
            },
        }),
}));

describe('CurrentChapterLink', () => {
    it('renders without errors', async () => {
        const { baseElement } = render(<CurrentChapterLink />);
        await waitForDomChange({ container: baseElement });
        expect(baseElement).toBeInTheDocument();
    });
});
