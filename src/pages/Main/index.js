import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdHistory } from 'react-icons/md';
import { charactersRequest } from '../../store/modules/characters/actions';
import history from '../../services/history';

import { Container, Card, Description, LastModified } from './styles';

import Header from '../../components/Header';

export default function Main() {
    const { characters, offset, auth } = useSelector(state => state.characters);
    const dispatch = useDispatch();
    const data = characters.results.map(item => {
        const date = format(parseISO(item.modified), "d 'de' MMMM 'de' yyyy", {
            locale: pt,
        });
        return { date, ...item };
    });

    function handleRedirect(character) {
        history.push({
            pathname: `/character/${character.id}`,
            state: { detail: character },
        });
    }

    async function loadMore() {
        let newOffset = offset;
        newOffset += 5;
        dispatch(charactersRequest(auth.privateKey, auth.publicKey, newOffset));
        window.scroll(0, 150);
    }

    return (
        <Container>
            <ul>
                {data.map(character => (
                    <Card
                        key={character.id}
                        onClick={() => handleRedirect(character)}
                    >
                        <img
                            src={
                                `${character.thumbnail.path}.${character.thumbnail.extension}` ||
                                'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }
                            alt=""
                        />
                        <strong>{character.name}</strong>
                        <LastModified>
                            <MdHistory size={20} color="#5a5757" />
                            <span>{character.date}</span>
                        </LastModified>
                        <Description>
                            <span>{character.description}</span>
                        </Description>
                    </Card>
                ))}
                <button type="button" onClick={() => loadMore()}>
                    Load more
                </button>
            </ul>
        </Container>
    );
}
