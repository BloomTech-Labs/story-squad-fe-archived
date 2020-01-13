// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Mocking Stripe object
const elementMock = {
    mount: jest.fn(),
    destroy: jest.fn(),
    on: jest.fn(),
    update: jest.fn(),
};

const elementsMock = {
    create: jest.fn().mockReturnValue(elementMock),
};

const stripeMock = {
    elements: jest.fn().mockReturnValue(elementsMock),
    createToken: jest.fn(() =>
        Promise.resolve({
            token: {
                id: 'test_id',
            },
        })
    ),
    createSource: jest.fn(() => Promise.resolve()),
};

window.Stripe = jest.fn().mockReturnValue(stripeMock) as any;
