// 함수를 캐싱=useCallback , 값을 캐싱=useMemo
import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import useInput from '../hooks/useInput';
import { loginAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

// const style = useMemo(() => ({ marginTop: 10 }), [])

const FormWrapper = styled(Form)`
    padding: 10px;
`;

function LoginForm() {
    // store 디스패치랑 비슷하다.
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    // 컴포넌트의 프롭스로 넘겨주는 함수는 "useCallback"을 꼭 사용한다.
    // hook은 반복문, 조건문, 함수 안에서는 사용 불가, 오로지 컴포넌트 안에서만 가능(depth 1)
    // const [id, setId] = useState('');
    // const [password, setPassword] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);
    // 위 코드 => hook 처리

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        dispatch(loginAction({ id, password}));
    }, [id, password])
    
    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />      
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

export default LoginForm;
