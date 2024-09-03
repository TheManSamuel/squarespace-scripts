{\rtf1\ansi\ansicpg1252\cocoartf2706
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // External script to initialize Wavesurfer.js\
document.addEventListener('DOMContentLoaded', function () \{\
  const wavesurfer = WaveSurfer.create(\{\
    container: '#waveform',\
    waveColor: '#4F4A85',\
    progressColor: '#383351',\
    url: '/audio.mp3', // Replace with the actual URL of your audio file\
  \});\
\
  // Event listeners for play/pause buttons\
  const playButton = document.getElementById('play-button');\
  const pauseButton = document.getElementById('pause-button');\
\
  playButton.addEventListener('click', () => wavesurfer.play());\
  pauseButton.addEventListener('click', () => wavesurfer.pause());\
\});\
}