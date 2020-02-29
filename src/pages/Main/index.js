import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'js-md5';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../services/api';

import { Content, Wrapper } from './styles';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
    privateKey: Yup.string().required('Private key is required!'),
    publicKey: Yup.string().required('Public key is required!'),
});

export default function Main() {
    async function handleSubmit({ privateKey, publicKey }) {
        // dispatch(signInRequest(email, password));
        console.log(privateKey, publicKey);
        const timestamp = Number(new Date());
        const hash = md5.create();
        hash.update(timestamp + privateKey + publicKey);

        const response = await api.get('characters', {
            params: { apikey: publicKey, ts: timestamp, hash: hash.hex() },
        });
        console.log(response);
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
