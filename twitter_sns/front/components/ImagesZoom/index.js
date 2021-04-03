import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

import { Overlay, Global, Header, CloseButton, ImgWrapper, Indicator, SlickWrapper } from './styles';

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Global />
            <Header>
                <h1>상세 이미지</h1>
                <CloseButton onClick={onClose}>X</CloseButton>
            </Header>
            <SlickWrapper>
                <div>
                <Slick 
                    initialSlide={0}
                    beforeChange={(slide) => setCurrentSlide(slide)}
                    infinite
                    arrows={false}
                    slidesToshow={1}
                    slidesToScroll={1}
                >
                    {images.map((v) => (
                        <ImgWrapper key={v.src}>
                            <img src={v.src} alt={v.src} />
                        </ImgWrapper>
                    ))}
                </Slick>
                {/* 3장중에서 몇 번째 슬라이드를 나타내는지 알려준다. */}
                <Indicator>
                    <div>
                        {currentSlide + 1}
                        {' '}
                        /
                        {images.length}
                    </div>
                </Indicator>   
                </div>
            </SlickWrapper>
        </Overlay>
    )
};

ImagesZoom.prototype = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;

