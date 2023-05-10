import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`

export const Menu = styled.ul`
    list-style: none;

    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding: 6.4rem;
    text-align: center;

    > li {
        margin-bottom: 2.4rem;
    }
`

export const Search = styled.div`
    grid-area: search;
    padding: 6.4rem 6.4rem 0;
`

export const Content = styled.div`
    grid-area: content;
    padding: 0 6.4rem;
    overflow-y: auto;
`

export const NewNotes = styled.button`
    grid-area: newnote;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        margin-right: .8rem;
    }
`