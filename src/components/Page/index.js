import Home from '../Home';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact';

function Page({ currentPage }) {
    const setPage = () => {
        switch (currentPage.name) {
            case 'Home':
                return <Home />;
            case 'Projects':
                return <Projects />;
            case 'Resume':
                return <Resume />;
            case 'Contact':
                return <Contact />;
            default :
                return <Home />;
        }
    };

    return (
        <>
            {setPage()}
        </>
    )
}

export default Page;