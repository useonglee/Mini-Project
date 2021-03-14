import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

function Home() {
    const { isLoggedIn } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <AppLayout>
            {/* 포스트폼은 로그인 사용자만 보인다 */}
            {isLoggedIn && <PostForm />}
            {/* 반복문이 있고 키가 바뀌지 않을 예정이면 index를 쓴다. */}
            {/* 반복문이 없고 고유한 값을 유지하려면 .id */}
            {mainPosts.map((post) => {
                return (
                    <PostCard key={post.id} post={post}/>
                );
            })}
        </AppLayout>
    )
}

export default Home
