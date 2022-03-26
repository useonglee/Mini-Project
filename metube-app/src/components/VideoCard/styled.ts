import styled from "styled-components";

export const VideoCardContainer = styled.li`
  width: 20rem;
  padding: 0 0.5em 1em;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;

    img {
      width: 100%;
      height: 100%;
    }

    div {
      padding-top: 1rem;

      p:nth-child(2) {
        color: ${({ theme }) => theme.color.gray500};
      }
    }
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
