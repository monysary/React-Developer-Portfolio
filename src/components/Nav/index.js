function Nav() {
    return (
        <>
            <button data-collapse-toggle="navbar-default" type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
            </button>
            <div className="w-full md:block md:w-auto hidden" id="navbar-default">
                <ul className="flex flex-col px-4 py-6 mt-4 bg-[#3C3A40] md:flex-row md:space-x-16 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#3C3A40]">
                    <li>
                        <a href="/" className="text-[18px] block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/" className="text-[18px] block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">About Me</a>
                    </li>
                    <li>
                        <a href="/" className="text-[18px] block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Projects</a>
                    </li>
                    <li>
                        <a href="/" className="text-[18px] block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav;