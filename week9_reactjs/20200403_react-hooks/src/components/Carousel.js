import React, {useState} from 'react';

function Carousel() {
  
  const imgYakuza = [
    "./image/wallpaper-0-kiryu-.jpg",
    "./image/wallpaper-0-majima.jpg",
    "./image/wallpaper-kiwami1-nishiki.jpg",
    "./image/wallpaper-kiwami1-kazama.jpg",
    "./image/wallpaper-kiwami1-majimi.jpg"
  ]
  
  const [imgUrl, setImgUrl] = useState(imgYakuza[0])

  function randomImg() {
    let randomIndex = Math.floor(Math.random()*4)
    setImgUrl( imgYakuza[randomIndex])
  }

  return(
    <div>
      <figure>
        <img src={ require(`${imgUrl}`) } alt="wallpaper" style={{width: "800px", margin: `2rem auto` }} /><br />
      </figure>
      <div>
        <button onClick={ () => setImgUrl(imgYakuza[0]) }>1</button>
        <button onClick={ () => setImgUrl(imgYakuza[1]) }>2</button>
        <button onClick={ () => setImgUrl(imgYakuza[2]) }>3</button>
        <button onClick={ () => setImgUrl(imgYakuza[3]) }>4</button>
        <button onClick={ () => setImgUrl(imgYakuza[4]) }>5</button>
        <br />
        <button onClick={randomImg}>random</button>
      </div> 
    </div>
  ) 
}

export default Carousel;