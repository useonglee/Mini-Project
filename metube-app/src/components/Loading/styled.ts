import styled, { keyframes } from "styled-components";

const skeletonBackground = keyframes`
	100% {
        background-position: 100 0, 0 0;
    }
`;

const skeletonUI = styled.div`
  background-color: #d6d6d8;
  background-repeat: repeat-x;
  background-image: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.4) 80%,
      rgba(255, 255, 255, 0.3) 90%
    ),
    linear-gradient(#d6d6d8 0, transparent 0);

  animation: ${skeletonBackground} 1s infinite linear;
`;

export const LoadingContainer = styled(skeletonUI)`
  width: 20rem;
  padding: 0 0.5em 1em;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    div {
      padding-top: 1rem;
    }
  }
`;

export const LoadingImage = styled(skeletonUI)`
  width: 100%;
  height: 100%;
  background-position: -50px 0, 0 0;
`;

export const LoadingContentTitle = styled(skeletonUI)`
  background-position: -50px 0, 0 0;
`;

export const LoadingContentId = styled(skeletonUI)`
  background-position: -50px 0, 0 0;
`;
