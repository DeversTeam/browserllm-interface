function NavbarComponent({children}){
    return(
        <div className="flex flex-row">
            <div className="px-7 py-5">
                <a className="hover:underline" href="">À propos</a>
            </div>
            <a></a>
        </div>
    );
}

export default NavbarComponent;