import React, { createRef, useState } from 'react';
import logo from './logo.svg';

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
    videoRef.current.currentTime=currentTime;
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
      <header>
        <h1>video player</h1>
      </header>
      <section>
        <video ref={videoRef} width="1000" src="https://video-public.canva.com/VADbyUViLz0/videos/33cbbd0bc0.mp4" id='video_tag' onTimeUpdate={updateTimeBar} onLoadedData={onLoaded}  loop autoPlay={true}  playsInline/>
        <input type='range' onInput={onInput}  value={currentTime} defaultValue={0}  max={maxTime} />
        <button name="backward" onClick={onClickSkipButtons}>back 5sec</button>
        <button onClick={onClickPlayButton}>{isPlaying?"pause":"start"}</button>
        <button name="forward" onClick={onClickSkipButtons}>skip 5sec</button>
      </section>
    </div>
  );
}

export default App;
