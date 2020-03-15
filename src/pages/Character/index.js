import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import { MdChevronLeft } from 'react-icons/md';

import history from '../../services/history';

import Header from '../../components/Header';

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
    Image,
    NoItemFound,
} from './styles';

export default function Character() {
    const location = useLocation();
    const { id } = useParams();
    const character = location.state.detail;
    const { auth } = useSelector(state => state.characters);
    const loading = useSelector(state => state.characters.loading);
    const [comics, setComics] = useState([]);

    useEffect(() => {
        async function loadComics() {
            try {
                const response = await api.get(`characters/${id}/comics`, {
                    params: {
                        apikey: auth.publicKey,
                        hash: auth.hash,
                        ts: auth.timestamp,
                    },
                });
                setComics(response.data.data.results);
            } catch (err) {
                toast.error('Algo ocorreu errado. Tente novamente!');
            }
        }
        loadComics();
    }, [auth.hash, auth.publicKey, auth.timestamp, id]);

    function back() {
        history.push('/Main');
    }

    return (
        <>
            <Header />
            <Container>
                <header>
                    <button type="button" onClick={back}>
                        <MdChevronLeft size={36} color="#000" />
                    </button>
                </header>
                <Image
                    src={
                        `${character.thumbnail.path}.${character.thumbnail.extension}` ||
                        'https://api.adorable.io/avatars/100/abott@adorable.png'
                    }
                    alt={character.name}
                />
                <strong>{character.name}</strong>
                <span>{character.description}</span>

                <ComicsList>
                    <h3>Fascículos</h3>
                    {comics && comics.length > 0 ? (
                        <div>
                            {comics.map(comic => (
                                <ComicItem key={comic.id}>
                                    <WrapperComicItem>
                                        <Avatar>
                                            <img
                                                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                                alt={comic.title}
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
                        </div>
                    ) : (
                        <NoItemFound>
                            {loading
                                ? 'Carregando...'
                                : 'Nenhum fascículo encontado!'}
                        </NoItemFound>
                    )}
                </ComicsList>
            </Container>
        </>
    );
}
