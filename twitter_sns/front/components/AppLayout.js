import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { Menu, Input, Row, Col} from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

// 컴포넌트를 스타일할 때는 괄호안에 컴포넌트를 넣어준다.
const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    // useSelector는 react-redux이다. => 'npm i react-redux'를 해준다.
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

    return (
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            {/* 컬럼 사이의 간격, 양쪽 4px*/}
            <Row gutter={8}>
            {/* 반응형 설계 xs=모바일, sm=테블릿 lg,xl=큰화면*/}
                <Col xs={24} md={6}>
                    
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    {/* blank는 보안 위험이 있어서 rel noreferrer를 꼭 해준다. rel=이전페이지, 누가 열었는지 나타낸다*/}
                    <a href="http://www.github.com/useonglee" target="_blank" rel="noreferrer noopener">Made by Useong-Lee</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
