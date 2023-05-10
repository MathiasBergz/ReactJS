import styled from "styled-components";
import backgroundImage from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin: 4.8rem 0;
    }

    > a {
        margin-top: 12.4rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
`