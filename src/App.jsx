import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert("Button clicked");
  }

  const handleClick2 = () => {
    alert('Click button by arrow fucntion');
  }

  const handleClickPerameter = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concept part 2</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me </button>
      <button onClick={() => { alert('hello from inline')}}>Click Me inline</button>
      <button onClick={ () => {handleClickPerameter(4)}}>button function pera</button>
    </>
  )
}

export default App
