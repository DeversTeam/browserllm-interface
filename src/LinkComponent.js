function LinkComponent({link,summary}) {
    let buttonid="button-"+link
    return(
        <div className="flex flex-col pt-2 mt-2">
            <a className="hover:underline pl-5 pr-5 text-blue-600 visited:text-purple-600" href={link} title={link} target="_blank">{link}</a>
            <p className="pt-2 pb-2 pl-5 pr-5">
                {summary}
            </p>
            <button id={buttonid} type="button" className="bg-blue-200 hidden" data-modal-target="default-modal" data-modal-toggle="default-modal">Website</button>
            <div id="default-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed w-1/2 h-1/2 top-1/4 left-1/4 rounded-xl border z-50 p-5 bg-white">
                <embed id={link} className="pl-5 pr-5 flex w-full" type='text/html' src={link}/>
            </div>
        </div>
    );
}

export default LinkComponent;