import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList'
import Error from './components/Error'
import Header from "./components/Header"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  while (mobile) {
    alert("Please View in Large screen")      
  }

  return (
   <>
   
    <div className="App">
      <Router>
    <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App