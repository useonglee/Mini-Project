import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0.8rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
  background-color: ${({ theme }) => theme.color.white};
`;

export const HeaderLogo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 2em;

  img {
    margin-right: 0.5em;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  width: 100%;

  input {
    width: 100%;
    padding: 0.3em;
    font-size: 1.2rem;
    border: 1px solid ${({ theme }) => theme.color.gray400};

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.blue800};
    }
  }

  button {
    border: 1px solid ${({ theme }) => theme.color.gray400};
    border-left: none;
    background-color: ${({ theme }) => theme.color.gray100};

    img {
      height: 100%;
      padding: 0.5em;
      object-fit: contain;
    }
  }
`;
