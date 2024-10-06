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
  for (const [, value] of Object.entries(documents)) {
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
  return summaries;
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
  console.log(window.innerWidth);
  var x = window.matchMedia("not all and (max-width: 640px)");
  if(x.matches){
    console.log(window.innerWidth);
  }else{
    document.getElementById('search-div').style.minWidth='1080px';
  }
  //displayText('response','',"Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés.",10)

  document.getElementById('body').style.flexDirection="row";
  document.getElementById('body').style.flexGrow="0";
  document.getElementById('body').style.position="flex";
  //var x = window.matchMedia("not all and (max-width: 640px)");
  if(x.matches){
    document.getElementById('body2').style.flexDirection="row";
    document.getElementById('body2').style.flexGrow="0";
  }else{
  }
  document.getElementById('search-div').style.flexDirection="row";
  document.getElementById('search-div').style.flexGrow="0";
  document.getElementById('search-buttons').style.display="none";
  document.getElementById('title').style.fontSize="2rem";
  //var x = window.matchMedia("not all and (max-width: 640px)");
  if(x.matches){
    document.getElementById('title').style.marginRight="2rem";
    document.getElementById('title').style.marginLeft="5rem";
  }else{
    
  }
  document.getElementById('empty-div').style.display="none";
  document.getElementById('empty-div2').style.display="flex";
  document.getElementById('empty-div3').style.display="none";
  document.getElementById('empty-div4').style.display="none";
  document.getElementById('navbar').style.display="none";
  
  document.getElementById('body2').style.borderBottomWidth="1px";
  document.getElementById('body2').style.borderBottomColor="rgb(209 213 219)";
  document.getElementById('body2').style.borderBottomStyle="solid";
  document.getElementById('body2').style.paddingBottom="2rem";
  document.getElementById('body2').style.paddingTop="2rem";

  document.getElementById('search-div').style.paddingRight="20px";
  //var x = window.matchMedia("not all and (max-width: 640px)");
  if(x.matches){
    document.getElementById('search-div').style.paddingLeft="0px";
  }else{
    document.getElementById('search-div').style.minWidth="100%";
  }
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

async function getAnswer(contents,question,setResponse,address){
  let response = await fetch(address+"/answer", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'documents':contents,
      'query':question
    })
  });
  response=await response.json();
  console.log(response);
  displayResponse(setResponse,response["answer"],50);
  generationEnd();
}

async function getSummaries(data,question,setSummaries,address) {
  console.log('send summaries');
  console.log(data);
  var documents=data;
  
  let response = await fetch(address+"/summary", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "documents":documents,
      'query':question
    })
  });
  response=await response.json();
  console.log(response);
  setSummaries(response);
  return response
}

function App() {
  const [preRetrievalOption, setPreRetrievalOption] = useState("");
  const [retrievalOption, setRetrievalOption] = useState("embeddings");
  const [summary, setSummary] = useState([true,"Zero Shot Summary"]);
  const [fusion, setFusion] = useState([false,"Zero Shot Fusion"]);
  const [rerank, setRerank] = useState([false,"Lost In The Middle"]);
  const [generationOption, setGenerationOption] = useState("mixtral");
  const [presentationOption, setPresentationOption] = useState("links + answer");
  const [question, setQuestion] = useState('');
  //const [validate,setValidate]=useState(false);
  const [top_k, setTopK] = useState(10);
  const [response, setResponse] = useState(null);
  const [titles, setTitles] = useState([]);
  const [links, setLinks] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const [, setIsLoading] = useState(false);
  //const [prompt, setPrompt] = useState('Hello');
  const [footerText, ]=useState('This system has been developed by a student to complete his graduation work.');
  const [titleText, ]=useState('GISE');
  const [address,]=useState('http://192.168.2.138:5000')
  
  /*useEffect(()=>{
    var title="GenerationIntegratedSearchEngine";
    var currentTitle="G";
    var currentLetter="";
    var i = 1;
    var sleep=100;
    var interval = setInterval(function(){
      currentLetter=title.charAt(i);
      currentTitle+=currentLetter;
      setTitleText(currentTitle);
      if(currentTitle==="Generation"){
        currentTitle="G."
      }else if(currentTitle==="G.Integrated"){
        currentTitle="G.I."
      }else if(currentTitle==="G.I.Search"){
        currentTitle="G.I.S."
      }else if(currentTitle==="G.I.S.Engine"){
        currentTitle="GISE"
      }
      i++;
      if (i > title.length){
          clearInterval(interval);
      }
    }, sleep);
  },[]);*/

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
      console.log(address+'/retreive')
      fetch(address+'/retreive', {
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
        searchEnd();
        const s=proveLinks(data,presentationOption,setTitles,setLinks,setSummaries)
        setIsLoading(false);
        return [data,s];
      })
      .then(([data,s])=>{
        console.log(postRetrievalOption['summary']);
        console.log(presentationOption);
        if (postRetrievalOption['summary'] || presentationOption==="links + answer + summary") {
          var contents=getSummaries(s,question,setSummaries,address);
        }else{
          contents=s;
        }
        return contents;
      })
      .then((contents)=>{
        console.log(contents);
        getAnswer(contents,question,setResponse,address);
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setIsLoading(false);
      });
    }
  }, [question,address,fusion,generationOption,preRetrievalOption,presentationOption,rerank,retrievalOption,summary,top_k]); // Déclenchement du fetch quand la question change

  const handleSearch = (newQuestion) => {
    setQuestion(newQuestion);
  };

  
  return (
    <div className="flex flex-col bg-white h-screen">
      <div id="navbar" className="">
        navbar
      </div>
      <div id="body" className="flex grow flex-col items-center bg-opacity-100 z-50 backdrop-blur-sm bg-white/30">
        <div id="empty-div" className="flex flex-col grow"></div>
        <div id="body2" className="flex flex-col items-center w-full">
          <h1 id="title" className="flex text-8xl text-center subpixel-antialiased font-title pb-5 pt-5 select-none bg-gradient-to-r from-schroom to-haze text-transparent bg-clip-text cursor-pointer" onClick={reload}>{titleText}</h1>
          <SearchComponent onSearch={handleSearch} setPreRetrievalOption={setPreRetrievalOption} setRetrievalOption={setRetrievalOption} setTopK={setTopK} setSummary={setSummary} setFusion={setFusion} setRerank={setRerank} setGenerationOption={setGenerationOption} setPresentationOption={setPresentationOption}/>
        </div>
        <div id="empty-div3" className="flex flex-col grow"></div>
        <div id="empty-div4" className="flex flex-col grow"></div>
      </div>
      <div id="response-div" className="hidden max-sm:flex-col sm:flex-row grow xl:w-[1280px] max-xl:w-[1080px] max-sm:w-full">
        <div id="empty-div2" className="flex flex-col xl:w-[200px] max-xl:w-0"></div>
        <div className="sm:absolute xl:left-[800px] max-xl:left-[600px] sm:w-[480px]">
          <GeneratedResponseComponent response={response}/>
        </div>
        <div id="links-div" className="flex sm:w-[600px] mt-5 max-sm:w-full">
          <LinkListComponent titles={titles} links={links} summaries={summaries}/>
        </div>
      </div>
      <footer className="flex flex-row bottom-0 justify-center bg-slate-200 border-t text-black mt-5 z-50">
        <span>{footerText}</span>
      </footer>
    </div>
  );
}

export default App;
