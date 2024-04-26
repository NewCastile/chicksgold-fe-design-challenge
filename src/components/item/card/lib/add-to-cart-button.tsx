import { IMAGE_URLS } from "../../../../data"

export const ItemAddToCartButton = () => {
    return (
        <button className={"btn item-card__footer-btn btn--blue"}>
            <span>add</span>
            <span
                className={
                    "add-to-cart-btn__icon-container add-to-cart-btn__icon-container--dark-blue"
                }
            >
                <img
                    alt={IMAGE_URLS.icons.cartIcon.url}
                    src={IMAGE_URLS.icons.cartIcon.url}
                />
            </span>
        </button>
    )
}
