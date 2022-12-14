import React from "react"
import videojs from "video.js"
import 'video.js/dist/video-js.css'
import './home.scss'

const { useRef, useEffect } = require("react")


let VideoComponent = ({ options })  => {
  const vidref = useRef(null)
  const playerref = useRef(null)

  useEffect(() => {
    const player = playerref.current;

    if (!player) {
      const videoElement = vidref.current;
      if (!videoElement) return;

      playerref.current = videojs(videoElement, options);
    };
    
    return () => {
      if (player) {
        player.dispose();
        playerref.current = null;
      }
    }
  }, [options, vidref, playerref])

  return(
    <video ref={vidref} className={"video-js vjs-default-skin vjs-1-1"} />
  )
}

export default VideoComponent;