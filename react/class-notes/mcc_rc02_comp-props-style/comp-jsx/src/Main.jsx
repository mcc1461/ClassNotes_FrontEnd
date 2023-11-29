import React from 'react'
import bird from "./bird.jpg"


export const Main = () => {
    const parStyle = { 
        color: "red", 
        backgroundColor: "yellow", 
        fontFamily: "Arial",
        fontSize: "2rem",
        fontWeight: "bold",
    }
    const imgStyle = {
        width: "200px",
        height: "200px",
        borderRadius: "10px",
        border: "2px solid red",
    }

  return (
    <div>Main
    <p style={parStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus, excepturi dolore nemo veniam doloremque vitae ab fugiat cupiditate cumque! Asperiores enim ex omnis unde atque aspernatur tempora a accusantium ipsam. Sed necessitatibus voluptatem neque distinctio eius. Expedita dolorem, harum mollitia autem eum vitae quidem, velit earum consequatur labore beatae.</p>

    <img style={imgStyle} src="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg" alt="random" />
    <img style={imgStyle}
        src="https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_640.jpg"
        alt="macaw"
      />
        <img style={imgStyle} src={bird} alt="bird" />
        <img src="" alt="bird2" />
    
    </div>
  )
}








