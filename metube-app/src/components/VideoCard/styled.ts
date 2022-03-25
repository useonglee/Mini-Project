import styled from "styled-components";

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 20%;
  margin: 0 0.5rem 2rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  div {
    padding-top: 1rem;

    p:nth-child(2) {
      color: ${({ theme }) => theme.color.gray500};
    }
  }
`;
