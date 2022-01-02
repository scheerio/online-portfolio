import './App.css';
// import TopNav from './components/TopNav';
import Links from './components/Links';
import Projects from './components/Projects';
import Articles from  './components/Articles';
import MediaList from  './components/MediaList';
import Contact from  './components/Contact';
import Footer from './components/Footer';
import { getBooks, getPodcasts } from './utils/utils';

const App = () => {

  return (
    <div id="site-container" className="App container py-3">
      <header>
        {/* <a href="/" className="d-flex align-items-center text-dark text-decoration-none"> */}
          <h1 className="fs-1">Ben's Porfolio 📚</h1>
        {/* </a> */}
        <p className="bio"><strong>Welcome!</strong> I'm Ben, a software engineer who loves designing, building, and launching digital products. I'm focused on front-end and full-stack engineering, especially for web development.</p>
      </header>
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
