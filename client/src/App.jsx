import Nav from "./components/nav/nav"
import Arcticles from "./components/articles/arcticles"
import Button from "./components/button/button"
const App =()=>{
    return(
        <>
        <header>
        <Nav/>
        </header>
        <main>
            <Arcticles/>
        </main>
        <footer>
            <Button text="Load more"/>
        </footer>
        </>
    )
}   
export default App