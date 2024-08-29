//import './GeneratedResponseComponent.css'

function GeneratedResponseComponent({response}) {
    return(
        <div id="generated-response" className="flex flex-col pl-5 pt-5 pb-2 pr-2 ml-5 mr-5 mt-5 border-l border-gray-300">
            <div className="flex flex-col items-start">
                <p id="question-response" className="flex flex-row self-end bg-slate-400 px-5 py-2 rounded-l-2xl rounded-tr-2xl"></p>
                <div className="flex flex-row items-start mt-5">
                    <svg id="response-icon" aria-hidden="true" className="flex flex-1 size-9 text-blue-200 dark:text-stone-500 fill-blue-500" viewBox="0 0 392 383" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clipRule="evenodd" d="M136 382.646C57.1011 357.303 0 283.32 0 196C0 87.7522 87.7522 0 196 0C304.248 0 392 87.7522 392 196C392 283.32 334.899 357.303 256 382.646V352.124C319.134 328.127 364 267.053 364 195.5C364 102.992 289.008 28 196.5 28C103.992 28 29 102.992 29 195.5C29 266.675 73.3926 327.481 136 351.74V382.646ZM372.5 39C383.27 39 392 30.2695 392 19.5C392 8.73047 383.27 0 372.5 0C361.73 0 353 8.73047 353 19.5C353 30.2695 361.73 39 372.5 39ZM196 208C239.078 208 274 173.078 274 130C274 86.9218 239.078 52 196 52C152.922 52 118 86.9218 118 130C118 173.078 152.922 208 196 208ZM196 184.141C225.901 184.141 250.141 159.901 250.141 130C250.141 100.099 225.901 75.8589 196 75.8589C166.099 75.8589 141.859 100.099 141.859 130C141.859 159.901 166.099 184.141 196 184.141ZM215 130.5C215 141.27 206.27 150 195.5 150C184.73 150 176 141.27 176 130.5C176 119.73 184.73 111 195.5 111C206.27 111 215 119.73 215 130.5ZM215 241H175V383H215V241Z"/>
                    </svg>
                    <p id="response" className="flex bg-slate-400 px-5 py-2 rounded-r-2xl rounded-bl-2xl w-[364px] ml-2">{response}</p>
                </div>
            </div>
            <div id="loader-answer" className="hidden mt-14 flex-col items-center">
                <svg aria-hidden="true" className="flex flex-1 size-20 text-blue-200 sm:animate-spin max-sm:animate-bounce dark:text-stone-500 fill-blue-500" viewBox="0 0 392 383" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M136 382.646C57.1011 357.303 0 283.32 0 196C0 87.7522 87.7522 0 196 0C304.248 0 392 87.7522 392 196C392 283.32 334.899 357.303 256 382.646V352.124C319.134 328.127 364 267.053 364 195.5C364 102.992 289.008 28 196.5 28C103.992 28 29 102.992 29 195.5C29 266.675 73.3926 327.481 136 351.74V382.646ZM372.5 39C383.27 39 392 30.2695 392 19.5C392 8.73047 383.27 0 372.5 0C361.73 0 353 8.73047 353 19.5C353 30.2695 361.73 39 372.5 39ZM196 208C239.078 208 274 173.078 274 130C274 86.9218 239.078 52 196 52C152.922 52 118 86.9218 118 130C118 173.078 152.922 208 196 208ZM196 184.141C225.901 184.141 250.141 159.901 250.141 130C250.141 100.099 225.901 75.8589 196 75.8589C166.099 75.8589 141.859 100.099 141.859 130C141.859 159.901 166.099 184.141 196 184.141ZM215 130.5C215 141.27 206.27 150 195.5 150C184.73 150 176 141.27 176 130.5C176 119.73 184.73 111 195.5 111C206.27 111 215 119.73 215 130.5ZM215 241H175V383H215V241Z"/>
                </svg>
            </div>
        </div>
    );
}

export default GeneratedResponseComponent;