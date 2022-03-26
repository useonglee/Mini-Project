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

  const handleClickSearchVideo = () => {
    handleSeachValue();
  };

  const handleKeyPress = (event: any) => {
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
      <Styled.SearchBox>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search"
          onKeyPress={handleKeyPress}
        />
        <button>
          <img
            src="/images/search.png"
            alt="search button iamge"
            onClick={handleClickSearchVideo}
          />
        </button>
      </Styled.SearchBox>
    </Styled.HeaderContainer>
  );
}

export default memo(Header);
