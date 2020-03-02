import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    {/* <img src={logo} alt="GoBarber" /> */}
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>Ae</aside>
            </Content>
        </Container>
    );
}
