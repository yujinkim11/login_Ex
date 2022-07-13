export const Login = () => {
  return (
    <Wrap>
      <div>
        <h3>LOGIN</h3>
        <form>
          <input type="text" placeholder="이메일또는 아이디를 입력 해주세요." />
          <input type="password" />
          <button>로그인</button>
        </form>
      </div>
    </Wrap>
  );
};

// <form action="??" method="post">
//   <input />
// </form>;

// action : input 내용을 담아 특정 페이지로 보낼때
// method : get - 검색처럼 내용이 보여도 될 때 / post - 로그인처럼 내용이 보이면 안 될 때
