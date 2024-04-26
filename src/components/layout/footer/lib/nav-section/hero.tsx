import { IMAGE_URLS } from "../../../../../data"

export const NavSectionHero = ({ heroText }: { heroText: string }) => {
    return (
        <span className={"footer-section-hero"}>
            {heroText}
            <button className={"btn footer-section__dropdown-btn"}>
                <img
                    alt={"Arrow down icon"}
                    height={"10"}
                    src={IMAGE_URLS.icons.arrowDownOutlinedIcon.url}
                    width={"10"}
                />
            </button>
        </span>
    )
}
