import { Routes,Route,Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import './navbar.scss'
import logo from './static files/netflix.png'
import Home from '../Home'
import TVShows from '../TVShows'
import Movies from '../Movies'
import NAP from '../NAP'
import Mylist from '../MYlist'
import search from './static files/search.png'
import bell from './static files/bell.png'
import ahegao from './static files/ahegao.png'
function NavBar() {
    const[type,setType] = useState('home')
    const active= 'navactive'
    const [pop,setPop] = useState(false)
    const [noti,setNoti] = useState(false)
    const [dim,setDim] = useState(false)
    useEffect(()=>{
     window.addEventListener("scroll",()=>{
         if (window.scrollY >= 100){
             setDim(true)
         }else(setDim(false))
     })
    },[dim])

    return (
        <>
            <div className="navbar"  style={dim === true ? {backgroundColor : "black"} : {}}>
                <div id="left">
                <img src={logo}/>
                <Link to="/browse">
                    <p
                    onClick={()=>{setType('home')}}
                     className={type === 'home' ? active:''}>Home</p>
                    
                    </Link>
                <Link to="/tvshows">
                    <p
                    onClick={()=>{setType('tv')}}
                     className={type === 'tv' ? active:''}>TV Shows</p>
                    
                    </Link>
                <Link to="/movies">
                    <p
                    onClick={()=>{setType('movies')}}
                     className={type === 'movies' ? active:''}>Movies</p>
                    
                    </Link>
                    <Link to="/nap">
                    <p
                    onClick={()=>{setType('nap')}}
                     className={type === 'nap' ? active:''}>New & Popular</p>
                    
                    </Link>
                    <Link to="/ml">
                    <p
                    onClick={()=>{setType('ml')}}
                     className={type === 'ml' ? active:''}>My list</p>
                    
                    </Link>
                </div>
                <div id="right">
                    <div id="searchbar">
                      <img onClick={()=>{setPop(!pop)}} src={search}/>
                      <div className={pop === false ?'':'searchpop'}>
                          <input placeholder="Titles,Peoples,Movies..."/>
                      </div>
                    </div>
                    <div id="bell">
                    <img src={bell}  onClick={()=>{setNoti(!noti)}}/>
                      <div id={noti === false ? '':'noti'}>
                         <div className={'notiitems'}>

                         </div>
                      </div>
                    </div>
                    <div id="profile">
                     <img src={ahegao}/>

                    </div>
                </div>
            </div>
                <Routes>
                    <Route path="/browse" element={<Home />} />
                    <Route path="/tvshows" element={<TVShows />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/nap" element={<NAP />} />
                    <Route path="/ml" element={<Mylist />} />
                </Routes>
        </>
    )
}

export default NavBar
