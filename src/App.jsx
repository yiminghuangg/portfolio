import { Topbar } from './sections/topBar';
import About from './sections/about';
import Contact from './sections/contact';
import Home from './sections/home';
import Portfolio from './sections/portfolio';
import "./app.scss"
function App() {
  return (
    <div className='app'>
      <Topbar/>
      <div className='sections'>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
    
  )
}

export default App;
