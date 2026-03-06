//© Zero - Código libre no comercial

// Cargar el SVG y animar los corazones
fetch('Img/treelove.svg')
  .then(res => res.text())
  .then(svgText => {
    const container = document.getElementById('tree-container');
    container.innerHTML = svgText;
    const svg = container.querySelector('svg');
    if (!svg) return;

    const allPaths = Array.from(svg.querySelectorAll('path'));

    allPaths.forEach(path => {
      path.style.stroke = '#222';
      path.style.strokeWidth = '2.5';
      path.style.fillOpacity = '0';

      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.transition = 'none';
    });

    setTimeout(() => {

      allPaths.forEach((path, i) => {

        path.style.transition =
          `stroke-dashoffset 1.2s cubic-bezier(.77,0,.18,1) ${i * 0.08}s,
           fill-opacity 0.5s ${0.9 + i * 0.08}s`;

        path.style.strokeDashoffset = 0;

        setTimeout(() => {
          path.style.fillOpacity = '1';
          path.style.stroke = '';
          path.style.strokeWidth = '';
        }, 1200 + i * 80);

      });

      const totalDuration = 1200 + (allPaths.length - 1) * 80 + 500;

      setTimeout(() => {

        svg.classList.add('move-and-scale');

        setTimeout(() => {

          showDedicationText();
          startFloatingObjects();
          startKirbys();
          startLoveHearts();
          showCountdown();
          playBackgroundMusic();

        }, 1200);

      }, totalDuration);

    }, 50);

    const heartPaths = allPaths.filter(el => {
      const style = el.getAttribute('style') || '';
      return style.includes('#FC6F58') || style.includes('#C1321F');
    });

    heartPaths.forEach(path => {
      path.classList.add('animated-heart');
    });

  });


// TEXTO PERSONALIZADO
function showDedicationText() {

  let text = `Arlette 💚

Todo empezó el 12 de febrero.
A la 1:15 pm te mandé mensaje.
A las 3:17 me respondiste.

Y desde ese momento todo cambió.

Hemos jugado Fortnite juntos,
hemos minado en Minecraft,
tenemos una casita
y hasta un conejito llamado Melón.

Me encanta cuando nos tomamos fotos,
cuando te di tus dibujos,
cuando me diste la playera de Goku,
el libro para pintar
y hasta la vaselina jajaja.

Me encantó la Carlota de limón,
Gracias por tu tiempo,
por tus detalles
y por todos los momentos que hemos vivido.
gracias por tu confianza,
gracias por permitirme estar en tu vida,
gracias por tu amor, 
gracias por todo en si <3,
y disculpame, 
disculpame si alguna vez hice algo mal,
creeme no es mi intención :(    ,
y sabes que cualquier cosa, 
la podemos hablar <3.
me encantas, me encanta tu sonrisa,
me encanta tu risa,
me encanta tu forma de ser,
me encanta todo de ti.
Nuestro primer beso me encantó,
fue en mi camioneta,
escuchando Cigarettes After Sex
como a las 9 de la noche.

Fue uno de esos momentos
que nunca voy a olvidar.

Ojalá todo esto siga creciendo.
Ojalá esto sí se dé.

Porque la verdad,
me encanta estar contigo.
todo de ti me encanta.
te extraño, lo bueno que ya te voy a ver hoy 6 de marzo <3.
espero te guste este detallito, lo hice con mucho amor <3.
espero te sientas mejor con esto, ya que ayer estabas algo triste:(  ,
te amo tanto, y quiero que sepas que siempre voy a estar aquí para ti, para lo que necesites, para lo que quieras, para lo que sea <3.
y gracias por ser tú, gracias por ser tan increíble, gracias por ser tan hermosa, gracias por ser tan dulce, gracias por ser tan linda, 
gracias por ser tan maravillosa, gracias por ser tan especial, gracias por ser tan única, gracias por ser tan tú <3.
creeme que has sido lo mejor que me ha pasado<3.
y te agradezco por traerme tanta felicidad a mi vida, por hacerme tan feliz, por hacerme sentir tan especial, 
por hacerme sentir tan amado, por hacerme sentir tan completo, por hacerme sentir tan vivo, por hacerme sentir tantas cosas lindas <3.
te amo GODLETTE jajajaj, y eres nub en maincra 👻,
y pues es todo<3.
Con amor,
Eli 💚`

  const container = document.getElementById('dedication-text')

  container.classList.add('typing')

  let i = 0

  function type(){

    if(i <= text.length){

      container.textContent = text.slice(0,i)
      container.scrollTop = container.scrollHeight

      i++

      setTimeout(type,0,01)

    } else {

      // CUANDO TERMINA EL TEXTO
      setTimeout(showFinalPhotos,5000)

    }

  }

  type()

}



// PÉTALOS ORIGINALES
function startFloatingObjects(){

  const container = document.getElementById('floating-objects')

  function spawn(){

    const el = document.createElement("div")

    el.className = "floating-petal"

    el.style.left = Math.random()*90+"vw"
    el.style.top = "110vh"

    container.appendChild(el)

    const duration = 6000 + Math.random()*4000

    const drift = (Math.random()-0.5)*60

    setTimeout(()=>{

      el.style.transition=`transform ${duration}ms linear`

      el.style.transform=`translate(${drift}px,-120vh)`

    },30)

    setTimeout(()=>{

      el.remove()

    },duration+2000)

    setTimeout(spawn,900)

  }

  spawn()

}



// KIRBYS FLOTANDO
function startKirbys(){

  const container = document.getElementById("floating-objects")

  function spawnKirby(){

    const img = document.createElement("img")

    img.src = "Img/kb.png"

    img.style.position="absolute"

    img.style.width = 40 + Math.random()*20 + "px"

    img.style.left = Math.random()*90+"vw"

    img.style.top = "110vh"

    container.appendChild(img)

    const duration = 8000 + Math.random()*3000

    const drift = (Math.random()-0.5)*150

    setTimeout(()=>{

      img.style.transition=`transform ${duration}ms linear`

      img.style.transform=`translate(${drift}px,-130vh) rotate(${Math.random()*360}deg)`

    },30)

    setTimeout(()=>{

      img.remove()

    },duration+2000)

    setTimeout(spawnKirby,1500)

  }

  spawnKirby()

}



// CORAZONES VERDES Y ROSAS
function startLoveHearts(){

  const container = document.getElementById("floating-objects")

  function spawnHeart(){

    const heart = document.createElement("div")

    heart.innerHTML="💚"

    if(Math.random()>0.5) heart.innerHTML="💗"

    heart.style.position="absolute"

    heart.style.fontSize="24px"

    heart.style.left=Math.random()*90+"vw"

    heart.style.top="110vh"

    container.appendChild(heart)

    const duration=7000+Math.random()*3000

    const drift=(Math.random()-0.5)*100

    setTimeout(()=>{

      heart.style.transition=`transform ${duration}ms linear`

      heart.style.transform=`translate(${drift}px,-130vh)`

    },30)

    setTimeout(()=>{

      heart.remove()

    },duration+2000)

    setTimeout(spawnHeart,1200)

  }

  spawnHeart()

}



// CUENTA REGRESIVA ORIGINAL
function showCountdown() {

  const container = document.getElementById('countdown');

  let startDate = new Date('2026-02-12T13:15:00');
  let eventDate = new Date('2026-02-12T00:00:00');

  function update() {

    const now = new Date();

    let diff = now - startDate;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    container.innerHTML =
      `Tiempo a tu lado 💚 <b>${days}</b> días`;

    container.classList.add('visible');
  }

  update();
  setInterval(update, 1000);
}



// MUSICA
function playBackgroundMusic(){

  const songs=[
    "Music/music1.mp3"
  ]

  const audio=document.getElementById("bg-music")

  let index=0

  audio.src=songs[index]

  audio.volume=0.7

  audio.play().catch(()=>{})

  audio.onended=()=>{

    index++

    if(index>=songs.length) index=0

    audio.src=songs[index]

    audio.play()

  }

}



// MOSTRAR FOTOS AL FINAL
function showFinalPhotos(){

  const tree = document.getElementById("tree-container")

  if(tree){
    tree.style.transition="opacity 2s"
    tree.style.opacity="0"
  }

  const photos=document.createElement("div")
  photos.id="photo-container"

  const images=[
    "Img/foto1.JPG",
    "Img/foto2.JPG",
    "Img/foto3.JPG",
    "Img/foto4.jpg"
  ]

  images.forEach((src,i)=>{

    const img=document.createElement("img")

    img.src=src
    img.className="love-photo"

    img.style.animationDelay=(i*1.2)+"s"

    photos.appendChild(img)

  })

  document.body.appendChild(photos)

  // -----------------------------
  // ACTIVAR TE AMO DESPUÉS
  // -----------------------------

  setTimeout(()=>{

    const watermark=document.getElementById("watermark-love")

    if(watermark){

      watermark.classList.add("visible")

      // DESVANECER DESPUÉS
      setTimeout(()=>{

        watermark.classList.add("fade-out")

      },8000)

    }

  },3000)

}
document.addEventListener("click", function(){

  const audio=document.getElementById("bg-music")

  if(audio && audio.paused){
    audio.play().catch(()=>{})
  }

}, { once:true })
