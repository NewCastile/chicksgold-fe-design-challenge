import { IMAGE_URLS } from "../../../data"

import { SearchFilter } from "./lib/search-filter"
import { SearchGameInput } from "./lib/search-game-input"
import { SearchItemInput } from "./lib/search-item-input"

import "./styles.css"

export const SearchBar = () => {
    return (
        <div className={"searchbar-container"}>
            <div className={"searchbar__responsive-container--tablet"}>
                <SearchGameInput />
            </div>
            <div className={"contain"}>
                <div className={"searchbar__responsive-container--mobile"}>
                    <SearchGameInput />
                </div>
                <SearchItemInput />
                <div
                    className={
                        "searchbar__right-filters-container bg--gray--translucent"
                    }
                >
                    <SearchFilter
                        {...{
                            filterKey: "price",
                            filterIconUrl:
                                IMAGE_URLS.icons.greenMoneyBagIcon.url,
                            filterIconAltText:
                                IMAGE_URLS.icons.greenMoneyBagIcon.alt,
                        }}
                    />
                    <SearchFilter
                        {...{
                            filterKey: "item type",
                            filterIconUrl:
                                IMAGE_URLS.icons.greenFeatherIcon.url,
                            filterIconAltText:
                                IMAGE_URLS.icons.greenFeatherIcon.alt,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
