import React from 'react';
import { useDispatch } from 'react-redux';
import { MdExitToApp } from 'react-icons/md';

import logo from '../../assets/logo.svg';

import { signOut } from '../../store/modules/characters/actions';

import { Container, Content } from './styles';

export default function Header() {
    const dispatch = useDispatch();

    function logout() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="Marvel" />
                </nav>

                <aside>
                    <MdExitToApp
                        size={20}
                        color="#5a5757"
                        onClick={() => logout()}
                    />
                </aside>
            </Content>
        </Container>
    );
}
