import './App.css'
import ShowClicks from './components/ShowClicks'
import ShowClicksUsingClass from './components/ShowClicksUsingClass'
import ShowClicksUsingHooks from './components/ShowClicksUsingHooks'


function App() {

  return (
    <div className='App'>
      {/* uncomment one on these */}
      <ShowClicks/>
      {/* <ShowClicksUsingClass/> */}
      {/* <ShowClicksUsingHooks/> */}
    </div>
  );
}

export default App;