import { Navbar } from "./components/Navbar"
import { SectionList } from "./components/SectionList"

function App() {
  return (
    <div className="container">
        <Navbar/>
        <SectionList openedSections={[{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6}]}/>
    </div>
  )
}

export default App
