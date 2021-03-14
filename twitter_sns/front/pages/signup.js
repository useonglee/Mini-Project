import React, { useCallback, useState } from 'react'
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {

    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    // 비밀번호 체크는 중복을 확인해야 하기 때문에 훅처리가 다르다.
    // 패스워드랑 다른지 체크해야 하기 때문에 합쳐주지 못했다.
    const [passwordCheck, setPasswordCheck] = useState('');
    // 비밀번호랑 일치하는지 확인
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        // 약관동의를 하지 않았을 경우
        if (!term) {
            return setTermError(true);
        }
        console.log(id, nickname, password)
    }, [password, passwordCheck, term]);

    return (
        <AppLayout>
        <Head>
            <title>회원가입 | NodeBird</title>
        </Head>
        {/* form을 제출할 때는 onFinish 사용, e.이벤트가 내부에서 자동적으로 실행된다. */}
        <Form onFinish={onSubmit}>
            <div>
                <labal htmlFor="user-id">아이디</labal>
                <br />
                <input name="user-id" value={id} required onChange={onChangeId} />
            </div>
            <div>
                <labal htmlFor="user-nick">닉네임</labal>
                <br />
                <input name="user-nick" value={nickname} required onChange={onChangeNickname} />
            </div>
            <div>
                <labal htmlFor="user-password">비밀번호</labal>
                <br />
                <input name="user-password" type="password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
                <labal htmlFor="user-password-check">비밀번호체크</labal>
                <br />
                <Input 
                    name="user-password-check"
                    type="password"
                    value={passwordCheck}
                    required
                    onChange={onChangePasswordCheck}
                />
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>
            <div>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </div>
            <div style={{ marginTop: 10 }}>
                {/* submit은 onFinish 이벤트 호출 */}
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
        </Form>
       </AppLayout>
    )
}

export default Signup

