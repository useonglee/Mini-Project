import React, { useCallback, useState, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const { imagePaths } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    // 실제 DOM에 접근하기 위해 Ref를 사용한다.
    const imageInput = useRef();
    const [text, setText] = useState('');
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    const onSubmit = useCallback(() => {
        //ADD_POST 실행
        dispatch(addPost)
        setText('');
    }, []);

    // 버튼 눌러서 사진 이미지 업로드 창 띄우기
    const onClickImageUpload = useCallback(() => {
        // current를 통해서 onClick에 접근한다.
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <Form style={{ marginTop: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea 
            value={text}
            onChange={onChangeText}
            maxLength={140}
            placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                {/* 이미지 업로드를 위해 ref를 사용 */}
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                {/* 게시글 작성 버튼 */}
                <Button type="primary" style={{ float: 'right' }} htmlType="sumbit">트윗</Button>
            </div>
            <div>
                {/* 이미지 업로드했을 때 저장해주고, 반복문 돌려서 표시 */}
                {imagePaths.map((v) => (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={v} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
};

export default PostForm;