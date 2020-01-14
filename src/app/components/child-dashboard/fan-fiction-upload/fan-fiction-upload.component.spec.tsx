import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';

import { FanFictionUpload } from './fan-fiction-upload.component';

jest.mock('../../../util/requestFactory', () => () => ({
    post: () =>
        Promise.resolve({
            data: {
                week: 1,
            },
        }),
}));

describe('FanFictionUpload', () => {
    it('renders without errors', async () => {
        const { baseElement } = render(<FanFictionUpload />);
        await waitForDomChange({ container: baseElement });
        expect(baseElement).toBeInTheDocument();
    });
});
