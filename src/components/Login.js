import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  border: 1px solid darkblue;
  align-items: center;
  padding: 80px 50px;
  border-radius: 10px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      all: unset;
      border: 1px solid #dbdbdb;
      padding: 10px 18px;
      margin-bottom: 15px;
      border-radius: 10px;
    }
    button {
      all: unset;
      width: 100%;
      height: 50px;
      padding: 10px;
      text-align: center;
      background-color: darkblue;
      box-sizing: border-box;
      color: white;
      border-radius: 10px;
      opacity: 0.5;
    }
  }
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
  color: darkblue;
`;

export const Login = () => {
  return (
    <Wrap>
      <LoginWrap>
        <Title>Login</Title>
        <form>
          <input type="text" placeholder="이메일또는 아이디를 입력 해주세요." />
          <input type="password" />
          <button>로그인</button>
        </form>
      </LoginWrap>
    </Wrap>
  );
};

// <form action="??" method="post">
//   <input />
// </form>;

// action : input 내용을 담아 특정 페이지로 보낼때
// method : get - 검색처럼 내용이 보여도 될 때 / post - 로그인처럼 내용이 보이면 안 될 때
