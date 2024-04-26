import { IMAGE_URLS } from "../../../../data"

export const CurrencyDropdown = () => {
    return (
        <div className={"header__right-items-dropdown"}>
            <button className={"btn btn--inline-icon text--uppercase"}>
                <span>usd</span>
                <img
                    alt={IMAGE_URLS.icons.arrowDownOutlinedIcon.alt}
                    height={"10"}
                    src={IMAGE_URLS.icons.arrowDownOutlinedIcon.url}
                    width={"10"}
                />
            </button>
        </div>
    )
}
