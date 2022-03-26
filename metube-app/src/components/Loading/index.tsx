import * as Styled from "./styled";

function Loading() {
  const item = Array(25).fill(0);

  return (
    <>
      {item.map((_, index) => (
        <Styled.LoadingContainer key={index}>
          <div>
            <Styled.LoadingImage />
            <div>
              <Styled.LoadingContentTitle />
              <Styled.LoadingContentId />
            </div>
          </div>
        </Styled.LoadingContainer>
      ))}
    </>
  );
}

export default Loading;
