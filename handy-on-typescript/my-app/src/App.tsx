import './App.css';
import MyButton from './components/Button';
import  {CounterProvider} from "./provider/Counter"

function App() {
  return (
    <div className="App">
      <CounterProvider>
      <MyButton  onClick={()=>{alert('okay tha')}} text='click me again'/>
      </CounterProvider>
          </div>
  );
}

export default App;
