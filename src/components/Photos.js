import React from 'react'
 const Photos = () => {
  return (
    <div>
        <ul>
          <div>Mohitha<img src={require('../resources//Mohitha.jpg')}  alt="Mohitha" width="300" height="400"/></div>
          <div>Jishaan <img src={require('../resources/Jishaan.jpeg')}  alt="Jishaan"width="400" height="400"/></div>
          <div>Veera <img src={require('../resources/Veera.jpeg')}  alt="Veera"width="300" height="400"/></div>
          <div>Divya <img src={require('../resources/Divya.jpeg')}  alt="Divya"width="300" height="400"/></div>
          <div>VeeraDivya <img src={require('../resources/VeeraDivya.jpeg')}  alt="VeeraDivya"width="500" height="400"/></div>
        </ul>
    </div>
  )
}
export default Photos