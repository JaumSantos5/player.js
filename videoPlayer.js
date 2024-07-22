const idVideo = document.getElementById("id_video").getAttribute("value")

console.log(idVideo)

const getInfoVideo = async (data) => {
  const api = await fetch(
    `https://api.evideovsl.com.br/api/videos/get-by-id/${data}`,
  );
  const json = await api.json();

  return json?.response;
}
const videoConfig = getInfoVideo(idVideo)







const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://kit.fontawesome.com/91b77a6c5c.js';
fontAwesomeScript.crossOrigin = 'anonymous';

// Adicionar o elemento <script> ao final do corpo do documento



// document.addEventListener("DOMContentLoaded", async function () {


//   // Função para criar elementos HTML
//   async function createElement(tag, attributes = {}, children = []) {
//     const element = document.createElement(tag);

//     for (const key in attributes) {
//       element.setAttribute(key, attributes[key]);
//     }


//     children.forEach((child) => {
//       if (typeof child === "string") {
//         element.appendChild(document.createTextNode(child));
//       } else if (child instanceof Node) {
//         element.appendChild(child);
//       } else {
//         console.warn("Invalid child element:", child);
//         // opcional: trate o caso de 'child' não ser um nó DOM ou string.
//       }
//     });

//     return element;
//   }

//   // Função para criar o player de vídeo


//   // Cria o player e adiciona ao corpo do documento
//   const player = createVideoPlayer(idVideo, videoConfig);
// });
async function createVideoPlayer(id, anchorTimeInSeconds) {
  const videoConfig = await getInfoVideo(idVideo)
  const videoContainer = document.createElement("div")


  videoContainer.id = 'videoContainer';
  videoContainer.classList = 'video-container';
  videoContainer.style.width = '100%';
  videoContainer.style.position = 'relative';
  videoContainer.style.display = 'flex';
  videoContainer.style.alignItems = 'center';
  videoContainer.style.justifyContent = 'center';


  videoContainer.appendChild(fontAwesomeScript);



  document.body.style.margin = '1%';

  const video = document.createElement("video", {}, [
    document.createElement("source", {
      type: "video/mp4",
    }),
    "Seu navegador não suporta a tag de vídeo.",
  ]);


  video.id = 'myVideo';
  video.style.width = '100%';
  video.style.height = '100%';
  video.style.overflow = 'hidden';
  video.src = videoConfig?.video;
  video.autoplay = videoConfig?.haveAutoPlay
  video.muted = false;
  video.disablePictureInPicture = true;
  video.disableRemotePlayback = true;
  video.playsInline = true


  const frameInitial = document.createElement("img")

  frameInitial.id = 'frame';
  frameInitial.style.width = "100%";
  frameInitial.style.height = "100%";
  frameInitial.style.display = "none";

  videoContainer.appendChild(frameInitial)


  const thumbnail = document.createElement('img');
  thumbnail.id = 'thumb'
  thumbnail.style.width = "100%";
  thumbnail.style.height = "100%";
  thumbnail.style.display = "none";

  videoContainer.appendChild(thumbnail)




  const handleActionButtonClick = () => {
    console.log("Botão de ação clicado!");
};

const actionButton = document.createElement("button");
actionButton.textContent = "Ação";
actionButton.style.width = "10%";
actionButton.style.height = "5%";
actionButton.style.position = "absolute";
actionButton.style.bottom = "10%";
actionButton.style.left = "50%";
actionButton.style.transform = "translateX(-50%)";
actionButton.style.backgroundColor = "#3060ee";
actionButton.style.color = "#fff";
actionButton.style.fontSize = "15px";
actionButton.style.border = "none";
actionButton.style.borderRadius = "10px";
actionButton.style.cursor = "pointer";
actionButton.style.display = "none"; // Inicialmente oculto
actionButton.addEventListener("click", handleActionButtonClick);

videoContainer.appendChild(actionButton);

if (anchorTimeInSeconds) {
    video.addEventListener("timeupdate", () => {
        if (video.currentTime >= anchorTimeInSeconds) {
            actionButton.style.display = "block"; // Exibe o botão quando o tempo desejado for alcançado
            console.log("Vídeo atingiu o tempo de âncora!");
        }
    });
}




  const handleVideo = () => {

    const videos = document.getElementById('myVideo')
    const frame = document.getElementById('frame')
    const thumb = document.getElementById('thumb')

    frame.style.display = 'none'
    thumb.style.display = 'none'
    videos.style.display = 'block'

  }




  const handleFrame = async () => {
    const frame = document.getElementById('frame');
    if (frame) {
      frame.style.display = 'block';
      frame.src = videoConfig?.frame;
      video.src = videoConfig?.video;
      video.autoplay = videoConfig?.haveAutoPlay;
      thumb.src = videoConfig?.thumb ? videoConfig?.thumb : 'undefined';
      progressBar.style.display = 'none';
      progressBar.style.setProperty('--webkit-progress-value-bg-color', videoConfig?.corBar);

      if (videoConfig?.haveBorder) {
        console.log(videoContainer);
        videoContainer.style.border = `${videoConfig?.borderWidth}px solid ${videoConfig?.borderColor}`;
      }

      if (videoConfig?.haveBorderRadius) {
        console.log(videoContainer);
        videoContainer.style.borderRadius = '12px';
        video.style.borderRadius = '12px';
      }
    } else {
      console.error('Elemento com ID "frame" não encontrado.');
    }
    handleVideo()
  }
  handleFrame();


  const handlePlayPause = async () => {
    const unMuteButton = document.getElementById('unmute')
    if (!unMuteButton) {
      if (video?.paused) {
        removePlayButton()
        !thumb.src.includes('undefined') ? thumb.style.display = 'none' : thumb.style.display = 'none'
        !thumb.src.includes('undefined') ? video.style.display = 'block' : video.style.display = 'block'
        await video?.play()

      } else {

        await createButtonPlay()
        !thumb.src.includes('undefined') ? thumb.style.display = 'block' : thumb.style.display = 'none'
        !thumb.src.includes('undefined') ? video.style.display = 'none' : video.style.display = 'block'
        await video?.pause()
      }
    } else {
    }
  }


  video.addEventListener('click', handlePlayPause);
  video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
  });


  if (videoConfig?.haveBorder) {
    console.log(videoContainer)
    videoContainer.style.border = `${videoConfig?.borderWidth}px solid ${videoConfig?.borderColor}`
  }

  if (videoConfig?.haveBorderRadius) {
    console.log(videoContainer)
    videoContainer.style.borderRadius = `12px`
    video.style.borderRadius = '12px'
  }



  






  const playPauseBtnCenterDefault = document.createElement("div");

  playPauseBtnCenterDefault.classList.add('play-button');
  playPauseBtnCenterDefault.id = 'playButton';
  playPauseBtnCenterDefault.style.backgroundColor = videoConfig?.cor;
  playPauseBtnCenterDefault.style.height = '170px';
  playPauseBtnCenterDefault.style.width = '170px';
  playPauseBtnCenterDefault.style.position = 'absolute';
  playPauseBtnCenterDefault.style.top = '50%';
  playPauseBtnCenterDefault.style.left = '50%';
  playPauseBtnCenterDefault.style.transform = 'translate(-50%, -50%)';
  playPauseBtnCenterDefault.style.fontSize = '48px';
  playPauseBtnCenterDefault.style.cursor = 'pointer';
  playPauseBtnCenterDefault.style.border = 'none'
  playPauseBtnCenterDefault.style.borderRadius = '50%';
  playPauseBtnCenterDefault.style.display = 'flex !important';
  playPauseBtnCenterDefault.style.justifyContent = 'center';
  playPauseBtnCenterDefault.style.alignItems = 'center';
  playPauseBtnCenterDefault.style.zIndex = '5';
  playPauseBtnCenterDefault.addEventListener('click', handlePlayPause);
  playPauseBtnCenterDefault.innerHTML = '<i style="font-size: 80px ;" class="fa-solid fa-pause icon" style =  ></i>';
  playPauseBtnCenterDefault.innerHTML = '<i style="font-size: 80px ;" class="fa-solid fa-play icon" style =  ></i>';









  const fullscreenBtn = document.createElement("button");

  fullscreenBtn.id = 'fullscreenBtn';
  fullscreenBtn.className = 'fullscreenBtn';
  fullscreenBtn.style.position = 'absolute';
  fullscreenBtn.style.right = '10px';
  fullscreenBtn.style.backgroundColor = 'transparent'
  fullscreenBtn.style.color = videoConfig.cor;
  fullscreenBtn.style.border = 'none';
  fullscreenBtn.style.cursor = 'pointer';
  fullscreenBtn.style.fontSize = '24px';
  fullscreenBtn.style.height = '24px';
  fullscreenBtn.style.width = '24px';
  fullscreenBtn.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-expand icon" style =  ></i>';




  const controls = document.createElement("div");
  controls.id = "controls";
  controls.className = "controls";
  controls.style.position = "absolute";
  controls.style.top = "0";
  controls.style.bottom = "1%";
  controls.style.left = "1%";
  controls.style.right = "1%";
  controls.style.display = "flex";
  controls.style.flexDirection = "column";
  controls.style.justifyContent = "space-between";
  controls.style.justifyContent = "flex-end";
  controls.style.zIndex = "1";

  const areaProgressBar = document.createElement("div");
  areaProgressBar.id = "areaProgressBar";
  areaProgressBar.className = "areaProgressBar";
  areaProgressBar.style.display = 'flex';
  areaProgressBar.style.justifyContent = 'center';


  const progressBar = document.createElement("input");
  progressBar.id = "progressBar";
  progressBar.className = "progressBar";
  progressBar.type = "range";
  progressBar.min = "0";
  progressBar.max = "100";
  progressBar.step = "1";
  progressBar.value = "0";
  progressBar.style.width = "100%";
  progressBar.style.height = "5px";
  progressBar.style.borderRadius = "10px";
  progressBar.style.position = "absolute";
  progressBar.style.marginTop = "-10px";













  const areaButtons = document.createElement("div");
  areaButtons.id = "areaButtons";
  areaButtons.className = "areaButtons";
  areaButtons.style.width = "100%";
  areaButtons.style.display = "flex";
  areaButtons.style.gap = "10px";
  areaButtons.style.alignItems = "center";


  const playPauseBtn = document.createElement("button");
  playPauseBtn.id = "playPauseBtn";
  playPauseBtn.className = "playPauseBtn";
  playPauseBtn.style.backgroundColor = "transparent";
  playPauseBtn.style.color = videoConfig.cor;
  playPauseBtn.style.border = "none";
  playPauseBtn.style.cursor = "pointer";
  playPauseBtn.style.fontSize = "24px";
  playPauseBtn.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-play icon" style =  ></i>';

  const rewindBtn = document.createElement("button");
  rewindBtn.id = "rewindBtn";
  rewindBtn.className = "rewindBtn";
  rewindBtn.style.backgroundColor = "transparent";
  rewindBtn.style.color = videoConfig.cor;
  rewindBtn.style.border = "none";
  rewindBtn.style.cursor = "pointer";
  rewindBtn.style.fontSize = "24px";
  rewindBtn.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-backward icon" style =  ></i>';

  const forwardBtn = document.createElement("button");
  forwardBtn.id = "forwardBtn";
  forwardBtn.className = "forwardBtn";
  forwardBtn.style.backgroundColor = "transparent";
  forwardBtn.style.color = videoConfig.cor;
  forwardBtn.style.border = "none";
  forwardBtn.style.cursor = "pointer";
  forwardBtn.style.fontSize = "24px";
  forwardBtn.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-forward icon" style =  ></i>';

  const volumeBtn = document.createElement("button");
  volumeBtn.id = "volumeBtn";
  volumeBtn.className = "volumeBtn";
  volumeBtn.style.backgroundColor = "transparent";
  volumeBtn.style.color = videoConfig.cor;
  volumeBtn.style.border = "none";
  volumeBtn.style.cursor = "pointer";
  volumeBtn.style.fontSize = "24px";
  volumeBtn.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-volume-high icon" style =  ></i>';

  const volumeSlider = document.createElement("input");
  volumeSlider.id = "volumeSlider";
  volumeSlider.className = "volumeSlider";
  volumeSlider.type = "range";
  volumeSlider.min = "0";
  volumeSlider.max = "100";
  volumeSlider.step = "1";
  volumeSlider.value = "100";
  volumeSlider.style.display = "none";

  const currentTimeSpan = document.createElement("span");
  currentTimeSpan.id = "currentTime";
  currentTimeSpan.className = "currentTime";
  currentTimeSpan.style.color = videoConfig.cor;
  currentTimeSpan.style.fontSize = "16px";
  currentTimeSpan.textContent = "0:00";

  const separatorSpan = document.createElement("span");
  separatorSpan.className = "separator";
  separatorSpan.style.color = videoConfig.cor;
  separatorSpan.style.fontSize = "16px";
  separatorSpan.textContent = ":";

  const durationSpan = document.createElement("span");
  durationSpan.id = "duration";
  durationSpan.className = "duration";
  durationSpan.style.color = videoConfig.cor;
  durationSpan.style.fontSize = "16px";
  durationSpan.textContent = "0:00";




  const soundIcon = document.createElement('img');
  soundIcon.id = 'iconSound';
  soundIcon.src = 'https://stream.evideovsl.com.br/sound.svg';
  soundIcon.style.width = '50%'



  const customButton = document.createElement('div');
  customButton.id = 'unmute'
  customButton.style.visibility = 'visible';


  const textSuperior = document.createElement('span');
  const textInferior = document.createElement('span');
  textSuperior.textContent = videoConfig?.textSuperior;
  textSuperior.className = 'text-button'
  textSuperior.style.color = videoConfig.corText


  textInferior.textContent = videoConfig?.textInferior;
  textInferior.className = 'text-button'
  textInferior.style.color = videoConfig.corText





  


 

  customButton.style.position = 'absolute';
  customButton.style.left = '50%';
  customButton.style.top = '50%';
  customButton.style.transform = 'translate(-50%, -50%)';
  customButton.style.backgroundColor = videoConfig?.cor;
  customButton.style.color = videoConfig?.corText;
  customButton.style.border = '2px solid transparent';
  customButton.style.display = 'flex';
  customButton.style.textAlign = 'center';
  customButton.style.textDecoration = 'none';
  customButton.style.cursor = 'pointer';
  customButton.style.borderRadius = '5px';
  customButton.style.width = '37%';
  customButton.style.height = '38%';
  customButton.style.flexDirection = 'column';
  customButton.style.justifyContent = 'space-evenly';
  customButton.style.alignItems = 'center';
  customButton.style.gap = '5%';
  customButton.style.zIndex = '70';


 
  customButton.appendChild(textSuperior);
  customButton.appendChild(soundIcon);
  customButton.appendChild(textInferior);
  videoContainer.appendChild(customButton);


  const Container = document.getElementById("playerContainer")


  



  // Adicionando os elementos ao DOM
  areaProgressBar.appendChild(progressBar);
  areaButtons.appendChild(playPauseBtn);
  areaButtons.appendChild(rewindBtn);
  areaButtons.appendChild(forwardBtn);
  areaButtons.appendChild(volumeBtn);
  areaButtons.appendChild(volumeSlider);
  areaButtons.appendChild(currentTimeSpan);
  areaButtons.appendChild(separatorSpan);
  areaButtons.appendChild(durationSpan);
  areaButtons.appendChild(fullscreenBtn);

  controls.appendChild(areaProgressBar);
  controls.appendChild(areaButtons);


  videoContainer.appendChild(video);
  videoContainer.appendChild(playPauseBtnCenterDefault);
  videoContainer.appendChild(controls);
  Container.appendChild(videoContainer);



let timeoutId;

const hideControls = () => {
    controls.style.opacity = 0;
};

const showControls = () => {
    controls.style.opacity = 1;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideControls, 4000);
};

videoContainer.addEventListener("mouseover", () => {
    showControls();
});

videoContainer.addEventListener("mouseout", () => {
    hideControls();
});

videoContainer.addEventListener("click", () => {
    showControls();
});

timeoutId = setTimeout(hideControls, 4000);







  const videoElement = document.getElementById("myVideo");
  const playPauseBtns = document.getElementById("playPauseBtn");
  const rewindBtns = document.getElementById("rewindBtn");
  const forwardBtns = document.getElementById("forwardBtn");
  const progressBars = document.getElementById("progressBar");
  const currentTimeSpans = document.getElementById("currentTime");
  const durationSpans = document.getElementById("duration");
  const volumeBtns = document.getElementById("volumeBtn");
  const volumeSliders = document.getElementById("volumeSlider");

  let volumeTimeout;




  if (document.getElementById('controls')) {

    customButton.style.visibility = 'hidden';
  } else {
    customButton.style.visibility = 'visible';
  }




  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  function updateDuration() {
    const minutes = Math.floor(videoElement.duration / 60);
    const seconds = Math.floor(videoElement.duration % 60);
    durationSpans.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
  }

  function togglePlayPause() {
    if (videoElement.paused) {
      videoElement.play();
      playPauseBtns.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-pause icon" style =  ></i>';
      playPauseBtnCenterDefault.style.display = "none";
    } else {
      videoElement.pause();
      playPauseBtns.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-play icon" style =  ></i>';;
      playPauseBtnCenterDefault.style.display = "flex";
    }
  }

  function rewind10s() {
    videoElement.currentTime -= 10;
  }

  function forward10s() {
    videoElement.currentTime += 10;
  }

  function updateVolume() {
    const volumeValue = volumeSliders.value * 0.01;
    videoElement.volume = volumeValue;


    clearTimeout(volumeTimeout);
    volumeTimeout = setTimeout(() => {
      volumeSliders.style.display = 'none';
    }, 3000);
  }

  function handleVideoEnd() {
    playPauseBtns.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-play icon" style =  ></i>';
    playPauseBtnCenterDefault.style.display = "flex";
  }

  function updateProgressBar() {
    const percentage = (videoElement.currentTime / videoElement.duration) * 100;
    progressBars.value = percentage;
    const minutes = Math.floor(videoElement.currentTime / 60);
    const seconds = Math.floor(videoElement.currentTime % 60);
    currentTimeSpans.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
  }

  console.log(currentTimeSpans)

  function toggleMute() {
    if (videoElement.muted) {
      videoElement.muted = false;
      volumeBtns.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-volume-high icon" style =  ></i>';
      volumeSliders.value = videoElement.volume * 100;
    } else {
      videoElement.muted = true;
      volumeBtns.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-volume-xmark icon" style =  ></i>';
      volumeSliders.value = 0;
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      videoContainer.requestFullscreen().catch(err => {
        alert(`Erro ao aticar o modo de tela cheia: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function updateVideoDimensions() {
    const { videoWidth, videoHeight } = videoElement;
    const aspectRatio = videoWidth / videoHeight;
  
    if (window.innerHeight > window.innerWidth && aspectRatio < 1) {
      // Dispositivo está na orientação retrato e o vídeo é vertical
      video.style.width = '100%';
      video.style.height = 'auto';
    } else {
      // Dispositivo está na orientação paisagem ou o vídeo é horizontal
      video.style.width = 'auto';
      video.style.height = '100%';
    }
  }

  // Event listeners
  playPauseBtns?.addEventListener("click", togglePlayPause);
  playPauseBtnCenterDefault?.addEventListener("click", togglePlayPause);
  videoElement?.addEventListener("click", togglePlayPause);
  rewindBtns?.addEventListener("click", rewind10s);
  forwardBtns?.addEventListener("click", forward10s);
  progressBars?.addEventListener("input", function () {
    const progressValue = progressBars.value;
    videoElement.currentTime = (progressValue / 100) * videoElement.duration;
  });
  videoElement?.addEventListener("timeupdate", updateProgressBar);
  videoElement?.addEventListener("ended", handleVideoEnd);
  volumeSliders?.addEventListener("input", updateVolume);
  volumeBtns?.addEventListener('click', toggleMute);
  fullscreenBtn?.addEventListener('click', toggleFullscreen);


  volumeBtns?.addEventListener('mouseover', () => volumeSliders.style.display = 'block');
  volumeSliders?.addEventListener('mouseover', () => volumeSliders.style.display = 'block');
  volumeBtns?.addEventListener('mouseout', () => {

    clearTimeout(volumeTimeout);
    volumeTimeout = setTimeout(() => {
      volumeSliders.style.display = 'none';
    }, 3000);
  });
  volumeSliders?.addEventListener('mouseout', () => {
    clearTimeout(volumeTimeout);
    volumeTimeout = setTimeout(() => {
      volumeSliders.style.display = 'none';
    }, 3000);
  });


  window.addEventListener('orientationchange', () => {
    updateVideoDimensions();
  });


  window.addEventListener('resize', () => {
    updateVideoDimensions();
  });

  if (videoElement !== null) {
    videoElement.onloadedmetadata = () => {
      updateDuration();
      updateProgressBar();
      updateVideoDimensions();


      videoElement.pause();
      playPauseBtns.innerHTML = '<i style="font-size: 20px ;" class="fa-solid fa-play icon" style =  ></i>';
      playPauseBtnCenterDefault.style.display = "flex";
    };

  }


  function createFakeProgressBar(cor, value, max) {
    const fakeProgressBar = document.createElement("progress");
    fakeProgressBar.style.width = "100%";
    fakeProgressBar.style.height = "5px";
    fakeProgressBar.style.borderRadius = "10px";
    fakeProgressBar.style.position = "absolute";
    fakeProgressBar.style.top = "0"; // Posiciona no topo
    fakeProgressBar.style.backgroundColor = cor || "#0129BB";
    fakeProgressBar.value = value || 0;
    fakeProgressBar.max = max || 100;
    fakeProgressBar.style.display = "none"; // Inicia invisível

    return fakeProgressBar;
}

const progressBarReal = document.getElementById("progressBar");


if (progressBarReal) {
    const cor = "#aaa";
    const currentProgress = progressBarReal.value;
    const max = progressBarReal.max;

    const fakeProgressBar = createFakeProgressBar(cor, currentProgress, max);

    
    videoContainer.appendChild(fakeProgressBar);

   
    progressBarReal.addEventListener("input", function() {
        fakeProgressBar.value = progressBarReal.value;
    });
}


  // CSS Estilizado
  const styleElement = document.createElement("style", {}, [
    `
    #video-container {
      position: relative;
    }

    #video-container video {
      display: flex;
      max-width: 100%;
      height: auto;
    }

    .separator {
      margin: 0 5px;
    }
  `,
  ]);


  document.head.appendChild(styleElement);




  const handleBeforeUnload = () => {
    const currentPosition = document.getElementById("myVideo").currentTime;

    // Armazena a posição atual no localStorage
    if (currentPosition < 10) {
      localStorage.setItem("ultimaPosicao", currentPosition);
      localStorage.setItem("continuePlayback", true);
    }
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  // Função para continuar de onde parou
  function handleContinue() {
    const video = document.getElementById("myVideo");
    const storedPosition = localStorage.getItem("ultimaPosicao");

    if (video && storedPosition !== null) {
      video.currentTime = parseFloat(storedPosition);
      video.style.display = "block";
      video.muted = false;
      video.play();
      // Remover os botões após o clique
      containerButtons.style.display = "none";
    }
  }

  // Função para reiniciar o vídeo
  function handleRestart() {
    const video = document.getElementById("myVideo");

    if (video) {
      video.currentTime = 0;
      video.style.display = "block";
      video.pause();
      containerButtons.style.display = "none";
    }
  }

  // Carrega o vídeo e continua de onde parou ao carregar a página
  window.onload = function () {
    const storedPosition = localStorage.getItem("ultimaPosicao");
    const video = document.getElementById("myVideo");

    if (storedPosition !== null && video) {
      video.currentTime = parseFloat(storedPosition);
      video.style.display = "block";
      video.muted = false;
      video.play();
    }
  };


  const containerButtons = document.createElement("div");
  containerButtons.id = "containerButtons";
  containerButtons.style.position = "absolute";
  containerButtons.style.width = "100%";
  containerButtons.style.height = "100%";
  containerButtons.style.backgroundColor = "blue"
  containerButtons.style.zIndex = "5";
  containerButtons.style.display = "flex";
  containerButtons.style.flexDirection = "column"; 
  containerButtons.style.gap = "10px";
  containerButtons.style.alignItems = "center";
  containerButtons.style.justifyContent = "center";
  
  videoContainer.appendChild(containerButtons);
  
  // Criar o título
  const titleSpan = document.createElement("span");
  titleSpan.textContent = "Título Aqui"; 
  titleSpan.style.color = videoConfig.corText;
  titleSpan.style.fontSize = "40px"; 
  titleSpan.style.marginBottom = "20px"; 
  containerButtons.appendChild(titleSpan);
  
  // Criar contêiner para os botões
  const buttonsContainer = document.createElement("div");
  buttonsContainer.style.display = "flex";
  buttonsContainer.style.gap = "10px";
  containerButtons.appendChild(buttonsContainer);
  
  // Criar botão de continuar de onde parou
  const continueButton = document.createElement("button");
  continueButton.textContent = "Continuar assistindo?";
  continueButton.addEventListener("click", handleContinue);
  continueButton.style.padding = "10px 20px";
  continueButton.style.backgroundColor = "transparent";
  continueButton.style.color = videoConfig.corText;
  continueButton.style.border = "none";
  continueButton.style.borderRadius = "5px";
  continueButton.style.cursor = "pointer";
  
  buttonsContainer.appendChild(continueButton);
  
  // Criar botão de reiniciar
  const restartButton = document.createElement("button");
  restartButton.textContent = "Assistir do início";
  restartButton.addEventListener("click", handleRestart);
  restartButton.style.padding = "10px 20px";
  restartButton.style.backgroundColor = "transparent";
  restartButton.style.color = videoConfig.corText;
  restartButton.style.border = "none";
  restartButton.style.borderRadius = "5px";
  restartButton.style.cursor = "pointer";
  
  buttonsContainer.appendChild(restartButton);



  









  function hideVideoControls() {
    const video = document.getElementById('myVideo');
    const controls = document.getElementById('controls');
    if (video && controls) {
      controls.style.display = 'none';
    }
  }

  function showVideoControls() {
    const video = document.getElementById('myVideo');
    const controls = document.getElementById('controls');
    if (video && controls) {
      controls.style.display = 'block';
    }
  }




  function createVideoForm() {
    const formContainer = document.createElement("div");
    formContainer.id = "videoFormContainer";
    formContainer.style.position = "absolute";
    formContainer.style.boxSizing = "border-box";
    formContainer.style.top = "0";
    formContainer.style.left = "0";
    formContainer.style.bottom = "0";
    formContainer.style.width = "100%";
    formContainer.style.height = "100%";
    formContainer.style.display = "flex";
    formContainer.style.flexDirection = "column";
    formContainer.style.justifyContent = "center";
    formContainer.style.alignItems = "center";
    formContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    formContainer.style.zIndex = "777";

    const titleSpan = document.createElement("span");
    titleSpan.textContent = "titulo";
    titleSpan.style.marginBottom = "10px";
    titleSpan.style.fontSize = "30px";
    titleSpan.style.color = videoConfig.corText;

    const form = document.createElement("form");
    form.id = "videoForm";
    form.style.display = "flex";
    form.style.flexDirection = "row";
    form.style.flexWrap = "wrap";
    form.style.alignItems = "center";
    form.style.justifyContent = "center";
    form.style.width = "50%";
    form.style.height = "19%";

    

    
  

    // Campo de nome
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "nameInput";
    nameInput.placeholder = "Seu nome";
    nameInput.style.width = "30%";
    nameInput.style.height = "50px";
    nameInput.style.display = "flex";
    nameInput.style.justifyContent = "center";
   

    // Campo de telefone para WhatsApp
    const whatsappInput = document.createElement("input");
    whatsappInput.type = "tel";
    whatsappInput.id = "whatsappInput";
    whatsappInput.placeholder = "Seu WhatsApp";
    whatsappInput.style.width = "50%";
    whatsappInput.style.height = "50px";
    whatsappInput.style.display = "flex";
    whatsappInput.style.justifyContent = "center";
    whatsappInput.style.marginLeft = "5%";

   

    // Campo de e-mail
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "emailInput";
    emailInput.placeholder = "Seu e-mail";
    emailInput.style.width = "74%";
    emailInput.style.height = "50px";
    emailInput.style.display = "flex";
    emailInput.style.justifyContent = "center";
  

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Play";
    submitButton.style.display = "flex";
    submitButton.style.justifyContent = "center";
    submitButton.style.alignItems = "center";
    submitButton.style.width = "12%";
    submitButton.style.height = "56px";
    submitButton.style.backgroundColor = "#3060ee";
    submitButton.style.color = "#fff";
    submitButton.style.fontSize = "20px";
    submitButton.style.border = "none";
    submitButton.style.cursor = "pointer";

    const footerSpan = document.createElement("span");
    footerSpan.textContent = "texto de rodapé";
    footerSpan.style.marginTop = "20px";
    footerSpan.style.fontSize = "17px";
    footerSpan.style.color = videoConfig.corText;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("nameInput").value;
        const whatsapp = document.getElementById("whatsappInput").value;
        const email = document.getElementById("emailInput").value;

        console.log("Nome:", name);
        console.log("WhatsApp:", whatsapp);
        console.log("E-mail:", email);

        formContainer.remove();
    });

    // Verifica a quantidade de inputs
    const inputs = [nameInput, whatsappInput, emailInput];
    const numInputs = inputs.filter(input => input.value.trim() !== '').length;

    if (numInputs === 1) {
        form.style.justifyContent = "center";
        submitButton.style.width = "100%";
    } else if (numInputs === 2) {
        nameInput.style.width = "50%";
        whatsappInput.style.width = "50%";
        form.style.justifyContent = "space-between";
        submitButton.style.width = "50%";
    } else if (numInputs === 3) {
        nameInput.style.width = "40%";
        whatsappInput.style.width = "40%";
        emailInput.style.width = "60%";
        form.style.justifyContent = "space-between";
        form.style.alignItems = "flex-start";
        submitButton.style.width = "100%";
    }

    // Adiciona os elementos ao formContainer
    formContainer.appendChild(titleSpan);
    formContainer.appendChild(form);
    form.appendChild(nameInput);
    form.appendChild(whatsappInput);
    form.appendChild(emailInput);
    form.appendChild(submitButton);
    formContainer.appendChild(footerSpan);

    videoContainer.appendChild(formContainer);
}
  createVideoForm();


  //Formulário Vertical

  function createVerticalVideoForm() {
    const formContainer = document.createElement("div");
    formContainer.id = "verticalVideoFormContainer";
    formContainer.style.position = "absolute";
    formContainer.style.boxSizing = "border-box";
    formContainer.style.top = "0";
    formContainer.style.left = "0";
    formContainer.style.bottom = "0";
    formContainer.style.width = "50%"; // Metade do container do vídeo
    formContainer.style.height = "100%";
    formContainer.style.display = "flex";
    formContainer.style.flexDirection = "column";
    formContainer.style.justifyContent = "center";
    formContainer.style.alignItems = "center"; // Alinhado à esquerda do container do vídeo
    formContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    formContainer.style.zIndex = "777";

    const titleSpan = document.createElement("span");
    titleSpan.textContent = "Título";
    titleSpan.style.fontSize = "30px";
    titleSpan.style.color = "white";
    titleSpan.style.marginBottom = "20px";

    const form = document.createElement("form");
    form.id = "verticalVideoForm";
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.alignItems = "center";
    form.style.width = "100%";

    // Campo de nome
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "verticalNameInput";
    nameInput.placeholder = "Seu nome";
    nameInput.style.width = "70%";
    nameInput.style.height = "50px";
    nameInput.style.padding = "5px";
    nameInput.style.marginBottom = "20px";

    // Campo de telefone para WhatsApp
    const whatsappInput = document.createElement("input");
    whatsappInput.type = "tel";
    whatsappInput.id = "verticalWhatsappInput";
    whatsappInput.placeholder = "Seu WhatsApp";
    whatsappInput.style.width = "70%";
    whatsappInput.style.height = "50px";
    whatsappInput.style.padding = "5px";
    whatsappInput.style.marginBottom = "20px";

    // Campo de e-mail
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "verticalEmailInput";
    emailInput.placeholder = "Seu e-mail";
    emailInput.style.width = "70%";
    emailInput.style.height = "50px";
    emailInput.style.padding = "5px";
    emailInput.style.marginBottom = "20px";

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Play";
    submitButton.style.width = "70%";
    submitButton.style.height = "50px";
    submitButton.style.padding = "5px";
    submitButton.style.backgroundColor = "#3060ee";
    submitButton.style.color = "white";
    submitButton.style.fontSize = "20px";
    submitButton.style.border = "none";
    submitButton.style.cursor = "pointer";

    const footerSpan = document.createElement("span");
    footerSpan.textContent = "Texto de rodapé";
    footerSpan.style.fontSize = "20px";
    footerSpan.style.color = "white";
    footerSpan.style.marginTop = "5%";

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("verticalNameInput").value;
        const whatsapp = document.getElementById("verticalWhatsappInput").value;
        const email = document.getElementById("verticalEmailInput").value;

        console.log("Nome:", name);
        console.log("WhatsApp:", whatsapp);
        console.log("E-mail:", email);

        formContainer.remove();
    });

    // Adiciona os elementos ao formContainer
    formContainer.appendChild(titleSpan);
    formContainer.appendChild(form);
    form.appendChild(nameInput);
    form.appendChild(whatsappInput);
    form.appendChild(emailInput);
    form.appendChild(submitButton);
    formContainer.appendChild(footerSpan);

    videoContainer.appendChild(formContainer);
}

// Chamada da função para criar o formulário vertical
createVerticalVideoForm();

  


  let views = 400;

  function handleAtualizaNumero() {
      let pessoas = Math.floor(Math.random() * 10) - 5;
  
      const min = views - 100;
      const max = views + 200;
  
      let novoNumero = views + pessoas;
  
      novoNumero = Math.max(min, Math.min(novoNumero, max));
      views = novoNumero;
  
      const viewsElement = document.getElementById("viewsElement");
      viewsElement.textContent = ""; 
  
    
      const liveIcon = document.createElement("span");
      liveIcon.classList.add("live-icon");
      liveIcon.style.backgroundColor = "red";
      liveIcon.style.border = "1px solid rgba(0, 0, 0, 0.1)";
      liveIcon.style.borderRadius = "50%";
      liveIcon.style.zIndex = "1";
      liveIcon.style.marginRight = "5px"; 
      liveIcon.style.animation = "live 1.75s ease-in-out infinite"; 
  
     
      const liveText = document.createElement("span");
      liveText.textContent = "Ao vivo - ";
      liveText.style.color = "#ffffff";
  
     
      const viewsNumber = document.createElement("span");
      viewsNumber.textContent = views;
      viewsNumber.style.marginLeft = "5px"; 
  
      
      viewsElement.appendChild(liveIcon);
      viewsElement.appendChild(liveText);
      viewsElement.appendChild(viewsNumber);
  }
  
  const viewsElement = document.createElement("div");
  viewsElement.id = "viewsElement";
  viewsElement.style.position = "absolute";
  viewsElement.style.top = "4%";
  viewsElement.style.left = "2%";
  viewsElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  viewsElement.style.color = "#ffffff";
  viewsElement.style.padding = "10px";
  viewsElement.style.borderRadius = "30px";
  viewsElement.style.zIndex = "999"; 
  
  videoContainer.appendChild(viewsElement); // Adiciona ao body em vez do videoContainer
  
  setInterval(handleAtualizaNumero, 3000);



  return videoContainer;
} createVideoPlayer(idVideo);