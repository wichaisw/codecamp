import React, {useState, useEffect} from 'react';
function Carousel() {


  // ใช้ clearInterval clearTimeout ไม่ให้รันไปเรื่อยๆ
  useEffect(() => {
    console.log("useEffect")
    return () => {
      console.log("clean up")
    }
  }, [])

  useEffect(() => {
    console.log("2nd useEffect")
    return () => {
      console.log("2nd clean up")
    }
  } )

  // use image from local image in public folder
  // const imgList = [
  //   "/image/wallpaper-0-kiryu.jpg",
  //   "/image/wallpaper-0-majima.jpg",
  //   "/image/wallpaper-kiwami1-nishiki.jpg",
  //   "/image/wallpaper-kiwami1-kazama.jpg",
  //   "/image/wallpaper-kiwami1-majimi.jpg"
  // ]
  
  const imgList = [
    "https://images8.alphacoders.com/942/thumb-1920-942722.jpg",
    "https://images3.alphacoders.com/101/thumb-1920-1018186.jpg",
    "https://images4.alphacoders.com/101/thumb-1920-1018185.jpg",
    "https://images6.alphacoders.com/994/thumb-1920-994538.jpg",
    "https://images5.alphacoders.com/994/thumb-1920-994542.jpg"

  ]

  const [imgUrl, setImgUrl] = useState(imgList[0])

  function randomImg() {
    let randomIndex = Math.floor(Math.random()*4)
    setImgUrl( imgList[randomIndex])
  }

  return(
    <div>
      <figure>
        <img src={imgUrl} alt="wallpaper" style={{width: "800px", margin: `2rem auto` }} /><br />
      </figure>
      <div>
        <button onClick={ () => setImgUrl(imgList[0]) }>1</button>
        <button onClick={ () => setImgUrl(imgList[1]) }>2</button>
        <button onClick={ () => setImgUrl(imgList[2]) }>3</button>
        <button onClick={ () => setImgUrl(imgList[3]) }>4</button>
        <button onClick={ () => setImgUrl(imgList[4]) }>5</button>
        <br />
        <button onClick={randomImg}>random</button>
      </div> 
    </div>
  ) 
}

export default Carousel;