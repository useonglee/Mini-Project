import React, { memo, useRef, useState } from "react";
import { useSearchVideos } from "../../hooks/useSearchVideos";
import * as Styled from "./styled";

interface Props {
  setVideos: any;
}

function Header({ setVideos }: Props) {
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { data } = useSearchVideos(query, {
    onSuccess: () => {
      query && setVideos(data);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  const handleSeachValue = () => {
    const value = inputRef.current!.value;
    setQuery(value);
  };

  const handelKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSeachValue();
    }
  };

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLogo>
        <img src="/images/logo.png" alt="logo image" />
        <h1>MeTube</h1>
      </Styled.HeaderLogo>
      <Styled.SearchInput
        ref={inputRef}
        type="search"
        placeholder="Search"
        onKeyPress={handelKeyPress}
      />
      <button></button>
    </Styled.HeaderContainer>
  );
}

export default memo(Header);
