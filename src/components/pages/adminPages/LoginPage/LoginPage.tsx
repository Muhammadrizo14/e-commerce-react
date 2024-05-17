import React, {useState} from 'react';
import './LoginPage.scss'
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()


  const login = (e: any)=> {
    e.preventDefault()
    if (name === 'root' && password === 'admin') {
      localStorage.setItem('accessToken', 'true')
      navigate('/admin/orders')
    } else {
      setName('')
      setPassword('')
    }
  }


  return (
    <div className='login__wrap'>
      <div className="login">
        <h1>Логин</h1>
        <form className='login__form'>
          <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name="u" placeholder="Username" required/>
          <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" name="p" placeholder="Password" required/>
          <button onClick={(e)=> login(e)} type="submit" className="btn btn-primary btn-block btn-large">Войти.</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;