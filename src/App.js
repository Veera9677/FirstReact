import './App.css';

function App() {
  return (
    <div >
        <h1>Hello..</h1>
        <ul>
          <div>Mohitha<img src={require('./Mohitha.jpg')}  alt="Mohitha" width="300" height="400"/></div>
          <div>Jishaan <img src={require('./Jishaan.jpeg')}  alt="Jishaan"width="400" height="400"/></div>
          <div>Veera <img src={require('./Veera.jpeg')}  alt="Veera"width="300" height="400"/></div>
          <div>Divya <img src={require('./Divya.jpeg')}  alt="Divya"width="300" height="400"/></div>
          <div>VeeraDivya <img src={require('./VeeraDivya.jpeg')}  alt="VeeraDivya"width="500" height="400"/></div>
          </ul>
      </div>
  );
}

export default App;
