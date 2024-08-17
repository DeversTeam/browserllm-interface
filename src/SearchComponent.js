import './SearchComponent.css'

function WriteResponse() {
    document.getElementById('response').value="La réponse à la recherche sera inscrite ici !";

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

    document.getElementById('question-response').textContent="You >: "+question;
    document.getElementById('query').value='';
    document.getElementById('loader').style.display="flex";
    document.getElementById('response').style.display='none';
    document.getElementById('loader-links').style.display='flex';
    document.getElementById('link-list').style.display='none';
    
    fetch('http://127.0.0.1:5000/api/data',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'preRetrievalOption':preRetrievalOption,'retrievalOption':retrievalOption,'postRetrievalOption':postRetrievalOption,'generationOption':generationOption,'presentationOption':presentationOption,'question':question,'top_k':top_k})
    })
    .then(response=>response.json())
    .then(data=>{
        console.log("Réponse du serveur:",data.answer);
        document.getElementById('loader-links').style.display='none';
        document.getElementById('link-list').style.display='flex';
        document.getElementById('loader').style.display='none';
        document.getElementById('response').style.display='flex';
        document.getElementById('response').textContent="Personal Assistant >: "+data.answer.answer;
        const documents=data.answer.documents;
        console.log(documents);
        var content="";
        for (const [key, value] of Object.entries(documents)) {
            console.log(value.meta["url"], value.content);
            content+="\n<div class='link'><a href="+value.meta["url"];
            if (presentationOption==="links + answer + summary") {
                content+=" title="+value.content;
            }
            content+=" target='_blank'>"+value.meta["url"]+"</a>";
            if (presentationOption==="links + answer + summary") {
                content+="<p>"+value.content+"</p>";
            }
            content+="</div>";
          }
        document.getElementById("link-list").innerHTML=content;
    })
    .catch(error=>console.error('Erreur:',error))
}

function SearchComponent(){
    return(
        <div id='query-div'>
            <input type='text' id='query' name='query' placeholder='recherche' size="75"></input>
            <button id="search-button" onClick={WriteResponse}>Rechercher</button>
        </div>
    );
}

export default SearchComponent;