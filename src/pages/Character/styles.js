import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 4px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    strong {
        margin-top: 20px;
    }

    span {
        margin-top: 10px;
        color: #5a5757;
    }
`;

export const ComicsList = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
`;

export const ComicItem = styled.div`
    display: flex;
    margin-top: 20px;
`;
