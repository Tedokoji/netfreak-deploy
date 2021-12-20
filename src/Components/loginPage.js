import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './ReuseComps/login.scss'
import NavBar from './ReuseComps/NavBar';
import netflix from './ReuseComps/static files/netflix.png'
const LoginPage = (props) => {
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const [logininfo,setLogininfo] = useState({})
    const [logged,setLogged] = useState(false)
    const navi = useNavigate()
    const handleLogin =  () => {
        setLogininfo({name: name,pass: pass})
        setLogged(true);
        navi('/browse')
    }
    console.log('reender login')
    if(logged){
        return <NavBar/>
    }
    else return (
        <div className="login-page">
            <div className="login-Form">
                <div className="login">
                    <img src={netflix}/>
                   <p>name:</p><input onChange={e=>setName(e.target.value)}/>
                   <p>pass:</p><input onChange={e=>setPass(e.target.value)}/>
                   <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
