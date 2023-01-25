import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";

function App() {

  const [page] = useState([
    { name: 'Home' },
    { name: 'Projects' },
    { name: 'Resume' },
    { name: 'Contact' }
  ])

  const [currentPage, setCurrentPage] = useState(page[0])

  return (
    <div>
      <Header>
        <Nav 
          page={page}
        />
      </Header>
      <Page 
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
