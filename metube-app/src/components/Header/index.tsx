import React, { memo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchVideos } from "../../hooks/useSearchVideos";
import * as Styled from "./styled";

interface Props {
  onSearch: (query: string) => void;
}

function Header({ onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data } = useSearchVideos(searchQuery);
  const navigator = useNavigate();

  const handleSeachValue = () => {
    const value = inputRef.current!.value;
    setSearchQuery(value);
    onSearch(data);
  };

  const handelKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSeachValue();
    }
  };

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderLogo>
        <img
          src="/images/logo.png"
          alt="logo image"
          onClick={() => navigator("/")}
        />
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
