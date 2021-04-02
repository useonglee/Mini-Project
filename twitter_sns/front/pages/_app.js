// 모든 파일이 공통인 부분 => _app.js
import React from 'react';
import PropTypes from 'prop-types';
// 헤드 태그 추가
import Head from 'next/head'
import 'antd/dist/antd.css'

import wrapper from '../store/configureStore';

// index, profile, signup 파일의 부모 역할
// index.js 의 return부분이 Component로 들어간다.
const NodeBird = ({ Component }) => {
    return (
        <>
        <Head>
            <meta charset='utf-8' />
            <title>NodeBird</title>
        </Head>
        <Component />
        </>
    );
};

// propTypes는 안정성을 높힌다
NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);