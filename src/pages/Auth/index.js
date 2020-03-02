import React from 'react';
import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { charactersRequest } from '../../store/modules/characters/actions';

import { Content, Wrapper } from './styles';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
    privateKey: Yup.string().required('Private key is required!'),
    publicKey: Yup.string().required('Public key is required!'),
});

export default function Auth() {
    const dispatch = useDispatch();
    const offSet = 5;

    async function handleSubmit({ privateKey, publicKey }) {
        dispatch(charactersRequest(privateKey, publicKey, offSet));
    }

    return (
        <Wrapper>
            <Content>
                <img src={logo} alt="GoBarber" />

                <Form schema={schema} onSubmit={handleSubmit}>
                    <Input
                        name="privateKey"
                        type="text"
                        placeholder="Private key"
                    />
                    <Input
                        name="publicKey"
                        type="text"
                        placeholder="Public key"
                    />

                    <button type="submit">SUBMIT</button>
                </Form>
            </Content>
        </Wrapper>
    );
}
