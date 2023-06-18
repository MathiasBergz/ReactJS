import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_900 };

        display: flex;
        align-items: center;

        padding: 0 14.4rem;

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 2.4rem;
        }

        > button {
            background: none;
            border: none;
        }
    }
`

export const Form = styled.form`
    max-width: 34rem;
    margin: 3rem auto;

    > div:nth-child(4) {
        margin-top: 2.4rem;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -12.6rem auto 6.4rem;

    height: 18.6rem;
    width: 18.6rem;
    
    > img {
        border-radius: 50%;
        height: 18.6rem;
        width: 18.6rem;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        right: .4rem;
        bottom: .4rem;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`