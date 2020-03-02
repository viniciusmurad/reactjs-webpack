import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;

    ul {
        display: grid;
        grid-gap: 15px;
        margin-top: 30px;
    }

    button {
        margin: 5px 0 0;
        height: 44px;
        background: #3b9eff;
        font-weight: bold;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        color: #fff;
        transition: bacgrkound 0.2s;
        &:hover {
            background: ${darken(0.03, '#3b9eff')};
        }
    }
`;

export const Card = styled.li`
    padding: 20px;
    border-radius: 4px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }

    strong {
        display: block;
        font-size: 20px;
        font-weight: 500;
        margin-top: 10px;
    }

    span {
        display: block;
        margin-top: 8px;
        color: #5a5757;
    }
`;

export const Description = styled.div`
    span {
        display: block;
        margin-top: 8px;
        color: #5a5757;
    }
`;

export const LastModified = styled.div`
    display: flex;
    align-items: flex-end;

    span {
        margin-left: 5px;
    }
`;

export const Image = styled.img`
    display: block;
    background: gray;
`;
