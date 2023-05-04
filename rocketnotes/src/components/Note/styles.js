import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border-radius: 1rem;
    border: none;

    padding: 2.2rem;
    margin-bottom: 1.6rem;

    > h1 {
        font-size: 2.4rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};

        flex: 1;
        text-align: left;
    }

    > footer {
        margin-top: 2.4rem;
        width: 100%;
        display: flex;
    }
`