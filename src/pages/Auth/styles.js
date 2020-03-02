import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;
            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }
    }

    span {
        color: #fff;
        align-self: center;
        margin: 0 0 10px;
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

    img {
        width: 200px;
    }
`;
