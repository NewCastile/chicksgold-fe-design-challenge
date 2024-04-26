import { ItemCard } from "./components/item/card"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { Pagination } from "./components/search/pagination"
import { PaginationControllers } from "./components/search/pagination/lib/pagination-controllers"
import { SearchBar } from "./components/search/search-bar"
import { ITEMS } from "./data/mock"

import "./App.css"

function App() {
    return (
        <>
            <Header />
            <div className={"main-container"}>
                <div className={"main-container__bg-mod-layer"} />
                <main className={"main-content"}>
                    <h2 className={"main-content__hero"}>
                        Condimentun consectetur
                    </h2>
                    <SearchBar />
                    <div className={"items-container"}>
                        <PaginationControllers />
                        <div className={"items-grid"}>
                            {ITEMS.map((item) => {
                                return <ItemCard key={item.id} item={item} />
                            })}
                        </div>
                        <Pagination />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default App
