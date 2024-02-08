import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import WatchHistory from './Pages/WatchHistory'

function App() {
  return (
    <div className="App">
      <Header />
            <Routes>
              {/* localhost3000-landing page */}
                     <Route path='/'element={<LandingPage/>}/>
              {/* localhost3000/home -Home */}
                     <Route path='/home'element={<Home/>}/>
                     <Route path='/watch-history' element={<WatchHistory/>}/>
              {/* localhost3000hgdahkd9089*/}
              <Route path='*' element={<PageNotFound/>}/>


           </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
