import { IMAGE_URLS } from "../../../../data"
import { SearchFilter } from "../../search-bar/lib/search-filter"

export const PaginationControllers = () => {
    return (
        <div className={"items-container__heading-container"}>
            <span className={"pagination-shown-items"}>
                Showing 20 - from 135
            </span>
            <div className={"pagination-filter-container"}>
                <SearchFilter
                    {...{
                        filterKey: "sort by",
                        filterIconUrl: IMAGE_URLS.icons.greenAdjusmentsIcon.url,
                        filterIconAltText:
                            IMAGE_URLS.icons.greenAdjusmentsIcon.alt,
                    }}
                />
            </div>
        </div>
    )
}
