import React, { createRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const videoControl=()=>{
  }
  const [currentTime, setcurrnetTime] = useState(0);
  const [maxTime,setMaxTime]=useState(0);
  const [isPlaying,setIsplaying]=useState(false);
  const videoRef = createRef<HTMLVideoElement>();


  const updateTimeBar=(e:React.SyntheticEvent<HTMLVideoElement, Event>)=>{
    setcurrnetTime(e.currentTarget.currentTime);
  }
  const onClickPlayButton=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{

    isPlaying?videoRef.current?.pause():videoRef.current?.play();
    setIsplaying(!isPlaying);
  }
  const onLoaded=(e:React.SyntheticEvent<HTMLVideoElement, Event>)=>{
    setMaxTime(e.currentTarget.duration);
  }
  const onInput=(e:React.FormEvent<HTMLInputElement>)=>{

    setcurrnetTime(Number(e.currentTarget.value));
    if(videoRef.current)
    videoRef.current.currentTime=Number(e.currentTarget.value);
  }
  const onClickSkipButtons=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    
   
    switch (e.currentTarget.name) {
      case "backward":
        if(videoRef.current)
        videoRef.current.currentTime-=5;
        break;
      case "forward":
        if(videoRef.current)
        videoRef.current.currentTime+=5;
          break;
      default:
        break;
    }
  
  }

  return (
    <div>
      <header id='player_header'>
        <h1>video player</h1>
      </header>
      <section>
        <div id="video_player">
          <video id="video" ref={videoRef} width="1000" src="https://video-public.canva.com/VADbyUViLz0/videos/33cbbd0bc0.mp4" onTimeUpdate={updateTimeBar} onLoadedData={onLoaded}  playsInline/>
          <input id='video_time_bar' type='range' onInput={onInput}  value={currentTime} defaultValue={0}  max={maxTime} />
         <div id="control_buttons">
            <button id='backward' name="backward" onClick={onClickSkipButtons}>back 5sec</button>
            <button id='play' onClick={onClickPlayButton}>{isPlaying?"pause":"start"}</button>
            <button id='forward' name="forward" onClick={onClickSkipButtons}>skip 5sec</button>
         </div>
        
        </div>
      </section>
    </div>
  );
}

export default App;
