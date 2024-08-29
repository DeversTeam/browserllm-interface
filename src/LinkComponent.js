function LinkComponent({title,link,summary}) {
    let buttonid="button-"+link
    return(
        <div className="flex flex-col pt-2 mt-2">
            <a className="flex font-sans text-xl text-ellipsis hover:underline pl-5 pr-5 text-blue-600 visited:text-purple-600" href={link} title={link} target="_blank">{title}</a>
            <div className="pt-2 pb-2 pl-5 pr-5 text-ellipsis overflow-hidden">
                {summary}
            </div>
        </div>
    );
}

export default LinkComponent;