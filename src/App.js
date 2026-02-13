import logo from './logo.svg';
import './App.css';
import loadingGif from './heart.gif';

function App() {
  return (
    <div className='container'>
      <Heart/>
      <AskPrompt/>
      <Heart/>

    </div>
  );
}

const Heart = () => {
  return (
    <img id = "heart" src={loadingGif} alt="loading spinner" />
  )
}

const AskPrompt = () =>{
  return (
    <div id="prompt">
      <div>
        <h3 id = "output">Will you be my valentine? ❤️</h3>
      </div>
      <div>
        <button id = "yes" className="valentine-button" onClick={yes}> Yes </button>
        <button id = "no" className="valentine-button" onClick={yes} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        > No </button>
      </div>
    </div>
  );
}

const yes = () => {
  alert("YAYYYYY, I knew you were gonna say yes, I had a feeling");
  alert("I also made sure you couldn't say no <3");
  alert("I love youuuuuuuuu xoxo");
}

const handleMouseEnter = () => {
  let noButton = document.getElementById("no");
  noButton.innerText = "Yes";
}

const handleMouseLeave = () => {
  let noButton = document.getElementById("no");
  noButton.innerText = "No";
}

export default App;
