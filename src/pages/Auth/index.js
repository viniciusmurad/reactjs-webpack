import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { charactersRequest } from '../../store/modules/characters/actions';

import { Content, Wrapper } from './styles';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
    privateKey: Yup.string().required('Private key é obrigatória!'),
    publicKey: Yup.string().required('Public key é obrigatória!'),
});

export default function Auth() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.characters.loading);
    const offSet = 5;

    async function handleSubmit({ privateKey, publicKey }) {
        dispatch(charactersRequest(privateKey, publicKey, offSet));
    }

    return (
        <Wrapper>
            <Content>
                <img src={logo} alt="Marvel" />

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

                    <button type="submit" disabled={loading}>
                        {loading ? 'Carregando...' : 'Entrar'}
                    </button>
                </Form>
            </Content>
        </Wrapper>
    );
}
