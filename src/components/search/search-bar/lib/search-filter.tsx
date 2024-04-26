import { IMAGE_URLS } from "../../../../data"
import "../styles.css"

export const SearchFilter = ({
    filterKey,
    filterIconUrl,
    filterIconAltText,
}: {
    filterKey: string
    filterIconUrl: string
    filterIconAltText: string
}) => {
    return (
        <div className={"search-filter-container"}>
            <div className={"search-filter__select-container"}>
                <img alt={filterIconAltText} src={filterIconUrl} />
                <div className={"search-filter__select"}>
                    <span
                        className={"search-filter__select-key text--capitalize"}
                    >
                        {filterKey}
                    </span>
                    <span>All</span>
                </div>
            </div>
            <button className={"btn"}>
                <img
                    alt={IMAGE_URLS.icons.arrowDownIcon.alt}
                    className={"arrow-down-icon--xs"}
                    src={IMAGE_URLS.icons.arrowDownIcon.url}
                />
            </button>
        </div>
    )
}
