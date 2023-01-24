function Header(props) {
    return (
        <header className="w-full">
            <nav className="bg-[#3C3A40] px-2 sm:px-4 drop-shadow-lg">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" className="flex items-center">
                        <span className="self-center text-[30px] font-semibold whitespace-nowrap text-white">Mony Sary</span>
                    </a>
                    {props.children}
                </div>
            </nav>
        </header>
    )
}

export default Header;