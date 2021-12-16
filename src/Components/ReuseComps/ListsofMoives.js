import React from 'react'
import './ListsofMovies.scss'
import evan from './logo.png'
import {memo,useEffect,useRef,useState} from 'react'
import play from './play.png'
import plus from './plus.png'
import like from './like.png'
import unlike from './unlike.png'
function ListsofMoives() {
    const  imgref = useRef()
    const  allref = useRef()
    const  L = useRef()
    const  R = useRef()
    const moveL = ()=>{
        allref.current.style.transform = `translateX(-231px)`
    }
    const moveR = ()=>{
        allref.current.style.transform = `translateX(231px)`
    }
  
    return (
        <div className="frame">
            <h5>Trending now</h5>
            <div className="line">
           <span>
               <h1 onClick={moveL} ref={L} style={{
                   position: 'relative', color: 'white',cursor : 'pointer'
               }}>L</h1>
           </span>
           <span>
              <div ref={allref} className="items">
                  <div>
                    <img ref={imgref} src={evan}/>
                 </div>
                 <div className="iinfos">
                   <div className="iinfosicons">
                    <span>
                    <img src={play}/>
                    <img src={plus}/>
                    <img src={like}/>
                    <img src={unlike}/>
                    <img className='arrowdown'/>
                    <span> <p style={{color: 'lightgreen',
                                fontSize: '10px',
                                margin: '8px'}}>69% Match</p></span>         
                    </span>
                    <p style={{color: 'white',
                                fontSize: '12px',
                                margin: '12px'}}>*Tags*Tags</p>
                    
                   </div>
                 </div>
              </div>
           </span>
           <span>
              <div ref={allref} className="items">
                  <div>
                    <img ref={imgref} src={evan}/>
                 </div>
                 <div className="iinfos">
                   <div className="iinfosicons">
                    <span>
                    <img src={play}/>
                    <img src={plus}/>
                    <img src={like}/>
                    <img src={unlike}/>
                    <img className='arrowdown'/>
                    <span> <p style={{color: 'lightgreen',
                                fontSize: '10px',
                                margin: '8px'}}>69% Match</p></span>         
                    </span>
                    <p style={{color: 'white',
                                fontSize: '12px',
                                margin: '12px'}}>*Tags*Tags</p>
                    
                   </div>
                 </div>
              </div>
           </span>
           <span>
              <div ref={allref} className="items">
                  <div>
                    <img ref={imgref} src={evan}/>
                 </div>
                 <div className="iinfos">
                   <div className="iinfosicons">
                    <span>
                    <img src={play}/>
                    <img src={plus}/>
                    <img src={like}/>
                    <img src={unlike}/>
                    <img className='arrowdown'/>
                    <span> <p style={{color: 'lightgreen',
                                fontSize: '10px',
                                margin: '8px'}}>69% Match</p></span>         
                    </span>
                    <p style={{color: 'white',
                                fontSize: '12px',
                                margin: '12px'}}>*Tags*Tags</p>
                    
                   </div>
                 </div>
              </div>
           </span>
           <span>
              <div ref={allref} className="items">
                  <div>
                    <img ref={imgref} src={evan}/>
                 </div>
                 <div className="iinfos">
                   <div className="iinfosicons">
                    <span>
                    <img src={play}/>
                    <img src={plus}/>
                    <img src={like}/>
                    <img src={unlike}/>
                    <img className='arrowdown'/>
                    <span> <p style={{color: 'lightgreen',
                                fontSize: '10px',
                                margin: '8px'}}>69% Match</p></span>         
                    </span>
                    <p style={{color: 'white',
                                fontSize: '12px',
                                margin: '12px'}}>*Tags*Tags</p>
                    
                   </div>
                 </div>
              </div>
           </span><span>
              <div ref={allref} className="items">
                  <div>
                    <img ref={imgref} src={evan}/>
                 </div>
                 <div className="iinfos">
                   <div className="iinfosicons">
                    <span>
                    <img src={play}/>
                    <img src={plus}/>
                    <img src={like}/>
                    <img src={unlike}/>
                    <img className='arrowdown'/>
                    <span> <p style={{color: 'lightgreen',
                                fontSize: '10px',
                                margin: '8px'}}>69% Match</p></span>         
                    </span>
                    <p style={{color: 'white',
                                fontSize: '12px',
                                margin: '12px'}}>*Tags*Tags</p>
                    
                   </div>
                 </div>
              </div>
           </span>
           <span>
              <div ref={allref} className="items">
                  <div>
                    <img ref={imgref} src={evan}/>
                 </div>
                 <div className="iinfos">
                   <div className="iinfosicons">
                    <span>
                    <img src={play}/>
                    <img src={plus}/>
                    <img src={like}/>
                    <img src={unlike}/>
                    <img className='arrowdown'/>
                    <span> <p style={{color: 'lightgreen',
                                fontSize: '10px',
                                margin: '8px'}}>69% Match</p></span>         
                    </span>
                    <p style={{color: 'white',
                                fontSize: '12px',
                                margin: '12px'}}>*Tags*Tags</p>
                    
                   </div>
                 </div>
              </div>
           </span><span>
              <div ref={allref} className="items">
                  <div>
                    <img ref={imgref} src={evan}/>
                 </div>
                 <div className="iinfos">
                   <div className="iinfosicons">
                    <span>
                    <img src={play}/>
                    <img src={plus}/>
                    <img src={like}/>
                    <img src={unlike}/>
                    <img className='arrowdown'/>
                    <span> <p style={{color: 'lightgreen',
                                fontSize: '10px',
                                margin: '8px'}}>69% Match</p></span>         
                    </span>
                    <p style={{color: 'white',
                                fontSize: '12px',
                                margin: '12px'}}>*Tags*Tags</p>
                    
                   </div>
                 </div>
              </div>
           </span>
           <span>
              <div ref={allref} className="items">
                  <div>
                    <img ref={imgref} src={evan}/>
                 </div>
                 <div className="iinfos">
                   <div className="iinfosicons">
                    <span>
                    <img src={play}/>
                    <img src={plus}/>
                    <img src={like}/>
                    <img src={unlike}/>
                    <img className='arrowdown'/>
                    <span> <p style={{color: 'lightgreen',
                                fontSize: '10px',
                                margin: '8px'}}>69% Match</p></span>         
                    </span>
                    <p style={{color: 'white',
                                fontSize: '12px',
                                margin: '12px'}}>*Tags*Tags</p>
                    
                   </div>
                 </div>
              </div>
           </span>
           <span>
           <h1 onClick={moveR} ref={R} style={{
                   position: 'absolute',
                    color: 'white',
                    right:'10px',
                    cursor : 'pointer'
               }}>R</h1>
           </span>
       </div>

        </div>
    )
}

export default memo(ListsofMoives)
