//import './App.css';
import SearchComponent from './SearchComponent';
import GeneratedResponseComponent from './GeneratedResponseComponent';
import LinkListComponent from './LinkListComponent';
import {useState, useEffect} from "react";

function reload(){
  window.location.reload(true);
}

function proveLinks(data,presentationOption,setTitles,setLinks,setSummaries){
  const documents=data.answer.documents;
  console.log(documents);
  var titles=[];
  var links=[];
  var summaries=[];
  var index=0
  for (const [key, value] of Object.entries(documents)) {
      if (links.includes(value.meta["url"])){
      }else{
          links.push(value.meta["url"]);
          titles.push(value.meta["title"]);
      }
      index=links.indexOf(value.meta["url"])
      if (presentationOption==="links + answer + summary") {
        if (summaries.length===links.length) {
          summaries[index]=summaries[index]+"\n"+value.content;
        }else{
          summaries[index]=value.content;
        }
      }else{
        if (summaries.length===links.length) {
          summaries[index]=summaries[index]+"\n"+value.content;
        }else{
          summaries[index]=value.content;
        }
      }
  }
  setTitles(titles);
  setLinks(links);
  setSummaries(summaries);
}

function displayText(element,prefix,text,speed){
  var i = 0;
  document.getElementById(element).textContent=prefix;
  var interval = setInterval(function(){
    document.getElementById(element).textContent += text.charAt(i);
    i++;
    if (i > text.length){
        clearInterval(interval);
    }
  }, speed);
}

function displayResponse(setResponse,answer,speed){
  var r="";
  var i = 0;
  console.log(answer);
  var interval = setInterval(function(){
    r+=answer.charAt(i)
    setResponse(r);
    i++;
    if (i > answer.length){
        clearInterval(interval);
    }
  }, speed);
}

function searchStart(question){
  console.log(question);
  document.getElementById('response-div').style.display="flex";
  //document.getElementById('question-response').textContent="You >: "+question;
  displayText('question-response',"",question,100)
  document.getElementById('query').placeholder="Searching";
  document.getElementById('query').disabled=true;
  document.getElementById('loader').style.display="flex";
  document.getElementById('loader-answer').style.display="flex";
  document.getElementById('loader-list').style.display="flex";
  document.getElementById('response').style.display='none';
  document.getElementById('loader-links').style.display='flex';
  document.getElementById('link-list').style.display='none';
  document.getElementById('response-icon').style.display='none';
  //displayText('response','',"Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés.",10)

  document.getElementById('body').style.flexDirection="row";
  document.getElementById('body').style.flexGrow="0";
  document.getElementById('body').style.position="fixed";
  document.getElementById('body2').style.flexDirection="row";
  document.getElementById('body2').style.flexGrow="0";
  document.getElementById('search-div').style.flexDirection="row";
  document.getElementById('search-div').style.flexGrow="0";
  document.getElementById('search-buttons').style.display="none";
  document.getElementById('title').style.fontSize="2rem";
  document.getElementById('title').style.marginRight="2rem";
  document.getElementById('title').style.marginLeft="5rem";
  document.getElementById('empty-div').style.display="none";
  document.getElementById('empty-div2').style.display="none";
  document.getElementById('navbar').style.display="none";
  
  document.getElementById('body2').style.borderBottomWidth="1px";
  document.getElementById('body2').style.borderBottomColor="rgb(209 213 219)";
  document.getElementById('body2').style.borderBottomStyle="solid";
  document.getElementById('body2').style.paddingBottom="2rem";
  document.getElementById('body2').style.paddingTop="2rem";

  document.getElementById('search-div').style.paddingRight="20px";
  var x = window.matchMedia("not all and (max-width: 640px)");
  if(x.matches){
    document.getElementById('search-div').style.paddingLeft="0px";
  }
  document.getElementById('search-div').style.minWidth="600px";
}

function searchEnd(){
  document.getElementById('loader-list').style.display='none';
  document.getElementById('loader-links').style.display='none';
  document.getElementById('query').placeholder="Type";
  document.getElementById('link-list').style.display='flex';
  document.getElementById('loader').style.display='none';
  document.getElementById('query').disabled=false;
}

function generationEnd(){
  document.getElementById('loader-answer').style.display="none";
  document.getElementById('response').style.display='flex';
  document.getElementById('response-icon').style.display='flex';
}

async function Test(question,setResponse) {
  let response = await fetch("http://192.168.2.138:8080/completion", {
      method: 'POST',
      body: JSON.stringify({
          prompt: question,
          n_predict: 512,
          temperature: 0.1
      })
  });
  displayResponse(setResponse,(await response.json()).content,50);
  generationEnd();
}

function App() {
  const [preRetrievalOption, setPreRetrievalOption] = useState("");
  const [retrievalOption, setRetrievalOption] = useState("embeddings");
  const [summary, setSummary] = useState([true,"Zero Shot Summary"]);
  const [fusion, setFusion] = useState([false,"Zero Shot Fusion"]);
  const [rerank, setRerank] = useState([false,"Lost In The Middle"]);
  const [generationOption, setGenerationOption] = useState("mixtral");
  const [presentationOption, setPresentationOption] = useState("links + answer + summary");
  const [question, setQuestion] = useState('');
  const [validate,setValidate]=useState(false);
  const [top_k, setTopK] = useState(10);
  const [response, setResponse] = useState(null);
  const [titles, setTitles] = useState([]);
  const [links, setLinks] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('Hello');

  useEffect(() => {
    if (question) {
      setIsLoading(true);
      console.log("question : "+question);
      console.log("pre ret options : "+preRetrievalOption);
      console.log("ret options : "+retrievalOption);
      console.log("top_k : ",top_k);
      console.log("post ret options : ");
      const postRetrievalOption={
        "summary":summary[0],
        "summaryOption":summary[1],
        "fusion":fusion[0],
        "fusionOption":fusion[1],
        "rerank":rerank[0],
        "rerankOption":rerank[1],
      }
      console.log(postRetrievalOption);
      console.log(generationOption);
      console.log(presentationOption);
      
      
      searchStart(question);
      setQuestion('');
      
      fetch('http://192.168.2.138:5000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          preRetrievalOption,
          retrievalOption,
          postRetrievalOption,
          generationOption,
          presentationOption,
          question,
          top_k,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        //console.log('Réponse du serveur:', data.answer);
        //displayResponse(setResponse,data.answer.answer,50);
        searchEnd();
        proveLinks(data,presentationOption,setTitles,setLinks,setSummaries)
        setIsLoading(false);
      })
      .then(()=>{Test(question,setResponse);})
      .catch((error) => {
        console.error('Erreur:', error);
        setIsLoading(false);
      });
    }
  }, [question]); // Déclenchement du fetch quand la question change

  const handleSearch = (newQuestion) => {
    setQuestion(newQuestion);
  };

  return (
    <div className="flex flex-col bg-white h-screen">
      <div id="navbar" className="">
        navbar
      </div>
      <div id="body" className="flex grow flex-col items-center w-screen bg-opacity-100 z-50 backdrop-blur-sm bg-white/30">
        <div id="empty-div" className="flex flex-col grow flex-shrink"></div>
        <div id="body2" className="flex flex-col items-center grow w-full">
          <h1 id="title" className="flex text-8xl subpixel-antialiased font-title pb-5 pt-5 select-none bg-gradient-to-r from-schroom to-haze text-transparent bg-clip-text cursor-pointer" onClick={reload}>G</h1>
          <SearchComponent onSearch={handleSearch} setPreRetrievalOption={setPreRetrievalOption} setRetrievalOption={setRetrievalOption} setTopK={setTopK} setSummary={setSummary} setFusion={setFusion} setRerank={setRerank} setGenerationOption={setGenerationOption} setPresentationOption={setPresentationOption}/>
        </div>
        <div id="empty-div2" className="flex grow"></div>
      </div>
      <div id="response-div" className="hidden flex-row grow mt-36 xl:w-[900px] max-xl:w-[700px]">
        <div id="empty-div2" className="flex flex-col xl:w-[200px] max-xl:w-0"></div>
        <div id="links-div" className="flex w-full grow mt-5">
          <LinkListComponent titles={titles} links={links} summaries={summaries}/>
        </div>
        <div className="fixed xl:left-[800px] max-xl:left-[600px] overflow-scroll h-3/4 w-[900px]">
          <GeneratedResponseComponent response={response}/>
        </div>
      </div>
      <footer className="flex flex-row bottom-0 justify-center bg-stone-200 border-t text-black mt-5">
        <p>This system has been developed by a student to complete his graduation work.</p>
      </footer>
    </div>
  );
}

export default App;
