import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
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

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1.2rem;

  &:focus {
    border-color: #0093e9;
  }
`;
