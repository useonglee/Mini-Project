import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import PostImages from './PostImages';
import CommentForm from './CommentForm';

// 컴포넌트를 작성하기 전에는 기획을 먼저 한다.
// page/index.js 에서 반복문 돌려서 post를 부모로 부터 받아온다.
function PostCard({ post }) {
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {
        // true는 false로, false는 true로 바꿔준다.
        setLiked((prev) => !prev);
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);
    const id = useSelector((state) => state.user.me?.id);
    // 아이디가 있을 경우, ?는 옵셔널 체이닝 연산자(있나 없나 의심부분 확인)
    
    return (
        <div style={{ marginBottom: 20 }}>
            <Card
                // 이미지가 있다면
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    // 배열안에 JXS는 key를 붙여준다.
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />, 
                    
                    // 댓글 버튼
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    // 더 보기 버튼                    
                    <Popover key="more" content={(
                            <Button.Group>
                                {/* 내 아이디랑 게시글 작성자 아이디가 나랑 같으면 */}
                                {id && post.User.id === id ? (
                                    <>
                                    <Button>수정</Button>
                                    {/* danger는 빨강색 */}
                                    <Button type="danger">삭제</Button>
                                    </>
                                ) : <Button>신고</Button>}                                    
                                </Button.Group>
                        )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
            </Card>
            {commentFormOpened && (
                <div>
                    {/* 게시글의 아이디를 커멘트 폼이 받아야 한다 */}
                    <CommentForm post={post}/>
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>)}
            {/* <CommentForm />
            <Comments /> */}
        </div>
    );
};

PostCard.PropTypes = {
    // shape 대신 object를 써 줄 수도있지만 더 자세히 쓰기위해 shape을 쓴다.
    post: PropTypes.shape({
        id:PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createAt: PropTypes.object,
        // arrayOf는 객체들의 배열이라는 뜻이다.
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostCard
