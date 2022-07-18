import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const userDB = {
  dbUsername: "test",
  dbPw: "aaa123123",
};

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
  }
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
  color: darkblue;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  padding: 10px;
  text-align: center;
  background-color: darkblue;
  box-sizing: border-box;
  color: white;
  border-radius: 10px;
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
  transition: 0.5s;
`;

const ErrorMessage = styled.span`
  font-weight: 900;
  color: darkblue;
  margin-bottom: 15px;
  padding-left: 10px;
`;

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    const { username, password } = getValues();
    const { dbUsername, dbPw } = userDB;
    // console.log(dbUsername, dbPw);

    if (username !== dbUsername) {
      setError("usernameResult", { message: "아이디가 틀렸습니다." });
    }

    if (password !== dbPw) {
      setError("passwordResult", { message: "비밀번호가 틀렸습니다." });
    }

    if (username === dbUsername && password === dbPw) {
    }
    navigate("/");
  };

  console.log(errors);

  return (
    <Wrap>
      <LoginWrap>
        <Title>Login</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* => 괄호 안에 실제 내가 보여줄 행동, 이름 마음대로 지정 가능 */}
          <input
            {...register("username", {
              required: "아이디는 필수 입력사항 입니다.",
              minLength: {
                value: 3,
                message: "아이디는 3자리 이상 입력해주세요.",
              },
            })}
            type="text"
            placeholder="이메일또는 아이디를 입력 해주세요."
          />

          {errors?.username?.message && (
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          )}

          {errors?.usernameResult?.message && (
            <ErrorMessage>{errors?.usernameResult?.message}</ErrorMessage>
          )}

          <input
            {...register("password", {
              required: "비밀번호는 필수 입력사항 입니다.",
              minLength: {
                value: 8,
                message: "비밀번호는 8자리 이상 입력해주세요.",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/,
                message: "패스워드는 문자, 숫자 조합으로 작성해주세요",
              },
            })}
            type="password"
            placeholder="password"
          />

          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}

          {errors?.passwordResult?.message && (
            <ErrorMessage>{errors?.passwordResult?.message}</ErrorMessage>
          )}

          <Button
            opacity={isValid ? 1 : 0.5}
            cursor={isValid ? "pointer" : "auto"}
          >
            로그인
          </Button>
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

// register, handleSubmit => useForm 사용할 때 필수
// register => 내가 원하는 인풋 태그에 이름 지정, 유효성 검사할 때 사용
// 정규식 표현법

// * react-hook-form

// -const{
// register, handleSubmit, formState: {errors, isValid },
// getValues,
// setError,
// } = useForm({
//      mode: "onChange'
// })

// 1. register
// => 인풋 태그에 유효성, name등을 부여
// <input
// 	{...register("password", {
// 	required:"패스워드는 필수 입니다.",
// 	minLength: {
// 	  value: 8,
// 	  message: "패스워드는 8자리 이상 작성해주세요.",
// 	pattern: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/
// .......}

// => required: booloean 값으로 처리할 수도 있고, 메시지도 전달할 수 있음
// => minLength : 최소길이, value 값으로 길이 정하며, message를 이용하여 내용을 작성할 수 있음
// => pattern:  정규식 표현법으로 특수문자, 숫자, 대문자 등 특정 패턴을 넣을 수 있음

// 2. handleSubmit
// => form 태그에 submit 이벤트 처리

// 3. formState:{errors, isValid}
// => from 태그 상태
// => errors: form 태그 에러 확인
// => isValid : form태그 유효성 검사(boolean 값으로 반환)

// 4. getValues
// => 인풋태그 value값을 가져옴(유저가 인풋에 입력한 값)
// => getValues()로 함수 호출할 것

// 5. setError
// => 에러를 세팅할 수 있음
// => setError("에러명",{
//     "message":"메세지명"
// })

// 6. clearError
// =>에러를  지울 수 있음
// => clearError("에러명"")

// 7. mode
// => 폼 태그 모드를 이야기 하며
// onChange(실시간),
// onBlur(활성화시),
// onFocus(클릭시),
// onTouch(터치시)  가 있음

// * useNavigate()
// => react-router-dom에서 지원함
// => 페이지 경로를 바꿀 수 있음
// => navigate("경로")
