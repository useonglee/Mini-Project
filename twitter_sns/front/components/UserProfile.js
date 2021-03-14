import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Avatar, Button } from 'antd';

import { logoutAction } from '../reducers/user';

function UserProfile() {
    const dispatch = useDispatch();

    const onLogOut = useCallback(() => {
        // 로그아웃 액션은 따로 만들어준다.
        dispatch(logoutAction());
    }, []);

    return (
        <Card
            actions={[
                // 리액트에서 배열로 JXS 쓸때는 항상 key를 붙여준다.
                <div key="twit">twit<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followings">팔로워<br />0</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>US</Avatar>}
                title="Useong-Lee"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile
