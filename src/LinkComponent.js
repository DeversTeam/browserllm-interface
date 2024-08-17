function LinkComponent({link,summary}) {
    return(
        <div className="link">
            <a href={link} title={summary} target="_blank">{link}</a>
            <p>
                {summary}
            </p>
        </div>
    );
}

export default LinkComponent;