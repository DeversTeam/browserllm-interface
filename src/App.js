import logo from './logo.svg';
//import './App.css';
import SearchComponent from './SearchComponent';
import AdvancedOptionsComponent from './AdvancedOptionsComponent';
import GeneratedResponseComponent from './GeneratedResponseComponent';
import LinkListComponent from './LinkListComponent';

function reload(){
  window.location.reload(true);
}

function App() {
  return (
    <div className="flex flex-col bg-white h-screen">
      <div id="navbar" className="">
        navbar
      </div>
      <div id="body" className="flex grow flex-col items-center w-full bg-opacity-100 z-50 backdrop-blur-sm bg-white/30">
        <div id="empty-div" className="flex grow"></div>
        <div id="body2" className="flex flex-col items-center grow w-full">
          <h1 id="title" className="flex text-8xl subpixel-antialiased font-title pb-5 pt-5 select-none bg-gradient-to-r from-schroom to-haze text-transparent bg-clip-text cursor-pointer" onClick={reload}></h1>
          <SearchComponent/>
        </div>
        <div id="empty-div2" className="flex grow"></div>
      </div>
      <div id="response-div" className="hidden flex-row grow mt-36">
        <div id="links-div" className="grow flex w-1/2 ml-44 mt-5">
          <LinkListComponent/>
        </div>
        <div className="flex flex-row fixed w-1/2 grow right-0 overflow-scroll h-3/4">
          <GeneratedResponseComponent/>
        </div>
      </div>
      <footer className="flex flex-row justify-center bg-stone-200 border-t text-black mt-5">
        <p>This system has been developed by a student to complete his graduation work.</p>
      </footer>
    </div>
  );
}

export default App;
