import React from 'react';
import Neurosonics from './Neurosonics';
import SpotifyAudioMotion from './SpotifyAudioMotion';
import D3Exoplanets from './D3Exoplanets';

export default function Projects() {
  return (
    <div>
      <h2>projects</h2>
      <div>
        <SpotifyAudioMotion />
        <D3Exoplanets />
        <Neurosonics />
      </div>
    </div>
  )
}
