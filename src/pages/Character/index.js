import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';

import { MdChevronLeft } from 'react-icons/md';

import history from '../../services/history';

import api from '../../services/api';

import {
    Container,
    ComicsList,
    ComicItem,
    WrapperComicItem,
    Avatar,
    Title,
    Cover,
    Description,
} from './styles';

export default function Character() {
    const location = useLocation();
    const { id } = useParams();
    const character = location.state.detail;
    const { auth } = useSelector(state => state.characters);
    const [comics, setComics] = useState([]);

    useEffect(() => {
        async function loadComics() {
            const response = await api.get(`characters/${id}/comics`, {
                params: {
                    apikey: auth.publicKey,
                    hash: auth.hash,
                },
            });
            setComics(response.data.data.results);
        }
        loadComics();
    }, [auth.hash, auth.publicKey, id]);

    function handlePrevDay() {
        history.push('/Main');
    }

    return (
        <Container>
            <header>
                <button type="button" onClick={handlePrevDay}>
                    <MdChevronLeft size={36} color="#000" />
                </button>
            </header>
            <img
                src={
                    `${character.thumbnail.path}.${character.thumbnail.extension}` ||
                    'https://api.adorable.io/avatars/100/abott@adorable.png'
                }
                alt=""
            />
            <strong>{character.name}</strong>
            <span>{character.description}</span>

            <ComicsList>
                <h3>Fascículos</h3>
                {comics.map(comic => (
                    <ComicItem key={comic.id}>
                        <WrapperComicItem>
                            <Avatar>
                                <img
                                    src={
                                        `${comic.thumbnail.path}.${comic.thumbnail.extension}` ||
                                        'https://api.adorable.io/avatars/100/abott@adorable.png'
                                    }
                                    alt=""
                                />
                            </Avatar>
                            <Title>{comic.title}</Title>
                            <Cover>{comic.issueNumber}</Cover>
                            <Description>
                                {comic.description || 'TBA'}
                            </Description>
                        </WrapperComicItem>
                    </ComicItem>
                ))}
            </ComicsList>
        </Container>
    );
}
