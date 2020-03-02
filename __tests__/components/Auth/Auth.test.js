import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import Auth from '../../../src/pages/Auth';

jest.mock('react-redux');

describe('Auth component', () => {
    it('knows that 2 and 2 make 4', () => {
        const { getByTextId, getByLabelText } = render(<Auth />);

        const dispatch = jest.fn();

        useDispatch.mockReturnValue(dispatch);

        fireEvent.change(getByLabelText('publicKey'), {
            target: { value: 'Teste' },
        });

        fireEvent.change(getByLabelText('privateKey'), {
            target: { value: 'Teste' },
        });

        fireEvent.submit(getByTextId('auth-form'));

        expect(dispatch).toHaveBeenCalled();
    });
});
