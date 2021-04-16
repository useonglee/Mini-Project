import useInput from '@hooks/useInput';
import React, { useState, useCallback } from 'react';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header} from './styles';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [mismatchError, setMismatchError] = useState(false);
    const [signUpError, setSignUpError] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const onChangePassword = useCallback((e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck)
    }, [passwordCheck]);

    const onChangePasswordCheck = useCallback((e) =>{
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password)
    }, [password]);

    const onSubmit = useCallback((e) => {
      e.preventDefault();
      console.log(email, nickname, password, passwordCheck)
      if (!mismatchError) {
        console.log('서버로 회원가입하기');
        // 비동기 요청은 초기화를 한 번 해주고 진행
        // 첫번째 요청이 두번째 요청에도 남아있는 경우가 있기 때문
        setSignUpError('');
        setSignUpSuccess(false);
        axios.post('http://localhost:3095/api/users', { 
          email,
          nickname,
          password,
        })
        .then((response) => {
          console.log(response);
          setSignUpSuccess(true);
        })
        .catch((error) => {
          console.log(error.response);
          setSignUpError(error.response.data);
        })
        .finally(() => {})
      }
    }, [email, nickname, password, passwordCheck, mismatchError]);

    return <div id="container">
    <Header>Sleact</Header>
    <Form onSubmit={onSubmit}>
      <Label id="email-label">
        <span>이메일 주소</span>
        <div>
          <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
        </div>
      </Label>
      <Label id="nickname-label">
        <span>닉네임</span>
        <div>
          <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
        </div>
      </Label>
      <Label id="password-label">
        <span>비밀번호</span>
        <div>
          <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
        </div>
      </Label>
      <Label id="password-check-label">
        <span>비밀번호 확인</span>
        <div>
          <Input
            type="password"
            id="password-check"
            name="password-check"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
        </div>
        {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
        {!nickname && <Error>닉네임을 입력해주세요.</Error>}
        {signUpError && <Error>{signUpError}</Error>}
        {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>} 
      </Label>
      <Button type="submit">회원가입</Button>
    </Form>
    <LinkContainer>
      이미 회원이신가요?&nbsp;
      <Link to="/login">로그인 하러가기</Link>
    </LinkContainer>
  </div>
};

export default SignUp;