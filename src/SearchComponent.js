//import './SearchComponent.css'
import './output.css'
import AdvancedOptionsComponent from './AdvancedOptionsComponent';
import { useState } from 'react';

function handleChange(value,setQuestion){
    setQuestion(value);
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

function enterPressed(event,onSearch,question,setQuestion){
    if (event.key === "Enter") {
        onSearch(question);
        deleteQuery(setQuestion);
    }
}

function deleteQuery(setQuestion){
    setQuestion("");
    document.getElementById("query").focus();
    document.getElementById("delete-icon").style.display="none";
  }

function SearchComponent({onSearch, setPreRetrievalOption, setRetrievalOption, setTopK, setSummary, setFusion, setRerank, setGenerationOption, setPresentationOption}){

    const [question,setQuestion] = useState('');

    return(
        <div id="search-div" className="flex sm:w-[600px] max-sm:w-full max-sm:pl-[20px] max-sm:pr-[20px] flex-col items-center">
            <div id='query-div' className="flex hover:shadow-md focus-within:shadow-md flex-row items-center w-full border-solid border border-gray-300 rounded-full pl-5 pr-5 pt-2 pb-2 bg-white">
                <svg className="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                <input type='text' value={question} onChange={e=> handleChange(e.target.value,setQuestion)} className="flex flex-row w-full focus:outline-none bg-white pl-2 placeholder:italic" id='query' name='query' placeholder='Type' onKeyDown={e=>{enterPressed(e,onSearch,question,setQuestion);}}></input>
                <div id="delete-icon" className="hidden">
                    <button id="delete-button" title="delete text" type="button" className="flex p-0 antialiased m-0 rounded-full hover:scale-110 transition hover:duration-150" onClick={e=>{deleteQuery(setQuestion)}}>
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
            <div id="search-buttons" className="flex subpixel-antialiased min-[865px]:flex-row max-[865px]:flex-col justify-center mt-5">
                <div className="">
                    <button type="button" className="py-2 px-5 border mr-3 hover:border-gray-300 border-white rounded w-[170px] bg-gray-50" onClick={e=>{onSearch(question); deleteQuery(setQuestion);}}>GISE Search</button>
                </div>
                <AdvancedOptionsComponent setPreRetrievalOption={setPreRetrievalOption} setRetrievalOption={setRetrievalOption} setTopK={setTopK} setSummary={setSummary} setFusion={setFusion} setRerank={setRerank} setGenerationOption={setGenerationOption} setPresentationOption={setPresentationOption}/>
            </div>
        </div>
    );
}

export default SearchComponent;