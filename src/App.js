import './App.css';
// import TopNav from './components/TopNav';
import Links from './components/Links';
import Projects from './components/Projects';
import Articles from  './components/Articles';
import MediaList from  './components/MediaList';
import Contact from  './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import { getBooks, getPodcasts } from './utils/utils';

const App = () => {

  return (
    <div id="site-container" className="App container py-3">
      <Header/>
      <Links/>
      <Projects/>
      <Articles/>
      <MediaList value={getBooks()}/>
      <MediaList value={getPodcasts()}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
