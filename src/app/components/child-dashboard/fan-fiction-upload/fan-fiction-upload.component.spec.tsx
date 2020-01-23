import React from 'react';
import { render } from '@testing-library/react';

import { FanFictionUpload } from './fan-fiction-upload.component';

describe('FanFictionUpload', () => {
    it('renders without errors', async () => {
        const { baseElement } = render(<FanFictionUpload />);
        expect(baseElement).toBeInTheDocument();
    });
});
