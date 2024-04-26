import { SearchIcon } from "../../../icons/SearchIcon"

export const SearchItemInput = () => {
    return (
        <div className={"search-item-input-container bg--gray--translucent"}>
            <button className={"btn search-item-input__submit-btn"}>
                <SearchIcon />
            </button>
            <input
                className={"search-item-input"}
                placeholder={"Search"}
                type={"text"}
            />
        </div>
    )
}
