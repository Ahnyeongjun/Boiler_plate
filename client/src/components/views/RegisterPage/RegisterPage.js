import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_actions";


function RegisterPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (Password != ConfirmPassword) {
      return alert("비번 아이디 다름");
    }
    let body = {
      email: Email,
      name: Name,
      password: Password,
    }
    dispatch(registerUser(body))
    // .then(response => {
    //   if (response.paylod.register) {
    //     props.history.push("/login");
    //   }
    //   else {
    //     alert("Error");
    //   }
    // })
    //서버에서 register을 안보냄
  }
  return (
    <div style={
      { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }
    }>
      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Name</label>
        <input type="name" value={Name} onChange={onNameHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <label>Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

        <br />
        <button type="submit">
          회원가입
               </button>
      </form>
    </div>
  );
}

export default RegisterPage
