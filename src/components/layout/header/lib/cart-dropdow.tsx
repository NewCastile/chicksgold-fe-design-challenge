import { IMAGE_URLS } from "../../../../data"

export const CartDropdown = () => {
    return (
        <div className={"header__right-items-dropdown"}>
            <button className={"btn btn--inline-icon text--uppercase"}>
                <img
                    alt={IMAGE_URLS.icons.cartIcon.alt}
                    height={"18"}
                    src={IMAGE_URLS.icons.cartIcon.url}
                    width={"18"}
                />
                <span>cart</span>
                <span>(5)</span>
            </button>
        </div>
    )
}
