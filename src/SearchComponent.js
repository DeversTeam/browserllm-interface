//import './SearchComponent.css'
import LinkListComponent from './LinkListComponent';
import './output.css'
import AdvancedOptionsComponent from './AdvancedOptionsComponent';
import Documents from './Documents';

function WriteResponse() {
    const preRetrievalOption=document.getElementById("pre-retrieval-options-list").value;
    const retrievalOption=document.getElementById("retrieval-options-list").value;
    const postRetrievalOption={
        "fusion":document.getElementById("fusion").checked,
        "fusionOption":document.getElementById("fusionOption").value,
        "summary":document.getElementById("summary").checked,
        "summaryOption":document.getElementById("summaryOption").value,
        "rerank":document.getElementById("rerank").checked,
        "rerankOption":document.getElementById("rerankOption").value
    };
    const generationOption=document.getElementById("generation-options-list").value;
    const presentationOption=document.getElementById("presentation-option-list").value;
    const question=document.getElementById("query").value;
    const top_k=document.getElementById("top_k").value;

    searchStart(question);
    
    fetch('http://192.168.2.138:5000/api/data',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'preRetrievalOption':preRetrievalOption,'retrievalOption':retrievalOption,'postRetrievalOption':postRetrievalOption,'generationOption':generationOption,'presentationOption':presentationOption,'question':question,'top_k':top_k})
    })
    .then(response=>response.json())
    .then(data=>{
        console.log("Réponse du serveur:",data.answer);
        searchEnd();
        //document.getElementById('response').textContent="Personal Assistant >: "+data.answer.answer;
        displayText('response','',data.answer.answer)
        const documents=data.answer.documents;
        console.log(documents);
        var content="";
        var links=[];
        var summaries=[];
        var index=0
        for (const [key, value] of Object.entries(documents)) {
            console.log(value.meta["url"], value.content);
            //content+="\n<div class='link'><a href="+value.meta["url"];
            if (links.includes(value.meta["url"])){
            }else{
                links.push(value.meta["url"])
            }
            index=links.indexOf(value.meta["url"])
            //content+=" target='_blank'>"+value.meta["url"]+"</a>";
            if (presentationOption==="links + answer + summary") {
                //content+="<p>"+value.content+"</p>";
                summaries[index]=summaries[index]+"\n"+value.content
            }
        }
        for (let i=0;i<links.length;i++){
            content+="\n<div className='w-full h-full '><a href="+links[i]+" target='_blank'>"+links[i]+"</a>"
            if (presentationOption==="links + answer + summary") {
                content+="<p>"+summaries[i]+"</p>"
                content+="<embed type='text/html' src=\""+links[i]+"\" width='100%' height='20%'></div>";
            }
            Documents.documents.push({link:links[i],summary:summaries[i]})
        }
        //document.getElementById("link-list").innerHTML=content;
    })
    .catch(error=>console.error('Erreur:',error))
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

function search(){
    document.activeElement.blur();
    WriteResponse();
}

function searchStart(question){
    console.log(question);
    document.getElementById('response-div').style.display="flex";
    //document.getElementById('question-response').textContent="You >: "+question;
    displayText('question-response',"",question,100)
    deleteQuery();
    document.getElementById('query').placeholder="Searching";
    document.getElementById('query').disabled=true;
    document.getElementById('loader').style.display="flex";
    document.getElementById('loader-answer').style.display="flex";
    document.getElementById('loader-list').style.display="flex";
    document.getElementById('response').style.display='none';
    document.getElementById('loader-links').style.display='flex';
    document.getElementById('link-list').style.display='none';
    displayText('response','',"Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés.",10)

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
    searchEnd();
}

function searchEnd(){
    document.getElementById('loader-list').style.display='none';
    document.getElementById('query').placeholder="Type";
    document.getElementById('loader-answer').style.display="none";
    document.getElementById('link-list').style.display='flex';
    document.getElementById('loader').style.display='none';
    document.getElementById('query').disabled=false;
    document.getElementById('response').style.display='flex';
}


function clickPress(event) {
    if (event.key === "Enter") {
        search();
    }else{
        if(document.getElementById("query").value!==""){
            console.log(document.getElementById("query").value);
            var input=document.getElementById("query");
            var d=document.getElementById("delete-icon");
            input.addEventListener('input', function() {
                if(input.value === ""){
                    d.style.display = "none";
                }
                else{
                    d.style.display = "flex";
                }
                });
        }
    }
}

function deleteQuery(){
    document.getElementById("query").value="";
    document.getElementById("query").focus();
    document.getElementById("delete-icon").style.display="none";
}

function SearchComponent(){
    return(
        <div id="search-div" className="flex w-full flex-col items-center">
            <div id='query-div' className="flex subpixel-antialiased hover:shadow-xl focus-within:shadow-xl flex-row items-center w-1/3 border-solid border border-gray-800 rounded-full pl-5 pr-5 pt-2 pb-2 bg-white">
                <svg className="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                <input type='text' className="flex flex-row focus:outline-none bg-white w-full pl-2 placeholder:italic" id='query' name='query' placeholder='Type' onKeyDown={clickPress}></input>
                <div id="delete-icon" className="hidden">
                    <button id="delete-button" title="delete text" type="button" className="flex p-0 antialiased m-0 rounded-full hover:scale-110 transition hover:duration-150" onClick={deleteQuery}>
                        <svg className="h-6 w-6 text-slate-600 hover:text-gray-800"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                </div>
                <div id="loader" className="hidden">
                    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-stone-400 fill-gray-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
            </div>
            <div id="search-buttons" className="flex subpixel-antialiased flex-row justify-center mt-5 w-1/3">
                <div className="flex flex-col">
                    <button type="button" className="flex py-2 px-5 border mr-3 hover:border-gray-300 border-white rounded" onClick={search}>GISE Search</button>
                </div>
                <AdvancedOptionsComponent/>
            </div>
        </div>
    );
}

export default SearchComponent;