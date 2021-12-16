import {useState,useRef,useEffect} from 'react'
import './render.scss'
import mutedBRUH from './muted.png'
import pun from './static files/roll.mp4'
import unmutedBRUH from './unmute.png'
function RenderViews(props) {
const [mute,setMute] = useState(true)
const [speaker,setSpeaker] = useState(mutedBRUH)
useEffect(()=>{
    const timers = setTimeout(()=>{
        window.scrollTo(0, 0)
    },200)
    
    const timer = setTimeout(()=>{
        if(props.vid == pun){setMute(!mute);}
        vidref.current.play()
    },2000)
    const timer2 = setTimeout(()=>{
        pp.current.remove()
        
    },4500)
    
    return()=>{
        console.log('removed')
        clearTimeout(timer)
        clearTimeout(timer2)
        clearTimeout(timers)
    }    
},[])
console.log('render')
const vidref = useRef()
const pp = useRef()
    return (   
        <div id="rendercons">
            <div id="billboardorsomethinglol">
                <video ref={vidref} id="bbvid"  muted={mute} 
                src={props.vid}/>
            <div id="bbTitle">
              <img src={props.pic}/>
              <p ref={pp}>
                  {props.des}</p>
              <div>
                <button id="play">PLAY</button>                         
                <button id="moreinfo">More In4</button>
              </div>                                    
            </div>
                <div id="controls">
                   <img onClick={()=>{
                       if(speaker === mutedBRUH ){
                        setMute(false)
                        setSpeaker(unmutedBRUH)
                       }else{
                           setMute(true)
                           setSpeaker(mutedBRUH)
                       }
                       
                   }}
                   src={speaker}/>
                </div>
            </div>
           
        </div>
    )
}

export default RenderViews
