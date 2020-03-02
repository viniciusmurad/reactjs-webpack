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

    header {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        button {
            border: 0;
            background: none;
        }
    }

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
    padding: 10px;
    border-top: 1px solid #eee;
    width: 100%;
`;

export const WrapperComicItem = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 80px 1fr;
    background-color: #fff;
    color: #444;
    width: 100%;
`;

export const Avatar = styled.div`
    grid-column: 1;
    grid-row: 1/3;

    img {
        border-radius: 0;
        width: 70px;
        height: 70px;
    }
`;

export const Title = styled.div`
    grid-column: 2;
    grid-row: 1;
    font-weight: 600;
`;

export const Cover = styled.div`
    grid-column: 3;
    grid-row: 1;
    font-weight: 600;
`;

export const Description = styled.div`
    grid-column: 2;
    grid-row: 2;
    color: #444;
`;
