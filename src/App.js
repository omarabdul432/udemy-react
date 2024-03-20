import Navbar from "./components/navbar"
import Cate from "./components/categories"
import Sale from "./components/sale"
import Course from "./components/course"
import Topic from "./components/topics"
import Popular from "./components/popular"
import Footer from "./components/footer"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Cate></Cate>
            <Sale></Sale>
            <Course></Course>
            <Topic></Topic>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}

export default App