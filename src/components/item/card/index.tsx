import { Item } from "../../../types"

import { ItemAddToCartButton } from "./lib/add-to-cart-button"
import { ItemDetailsButton } from "./lib/details-button"
import { ItemInStockPill } from "./lib/in-stock-pill"
import { ItemOnSalePill } from "./lib/on-sale-pill"
import { ItemPrice } from "./lib/price"
import { ItemQuantityInput } from "./lib/quantity-input"
import "./styles.css"

export const ItemCard = ({ item }: { item: Item }) => {
    const {
        name,
        description,
        discount,
        inStock,
        onSale,
        price,
        quantity,
        image,
        logo,
    } = item

    return (
        <div className={"item-card"}>
            <div className={"item-card-heading"}>
                <div className={"item-card-status-container"}>
                    <ItemOnSalePill {...{ onSale }} />
                    <ItemInStockPill {...{ inStock }} />
                </div>
                <ItemQuantityInput {...{ quantity }} />
            </div>
            <img
                alt={`${name} image`}
                className={"item-card__item-img"}
                src={image}
            />
            <span className={"item-card__card-content-heading"}>
                <span className={"item-card__item-name"}>{name}</span>
                <img
                    alt={logo.img.alt}
                    height={logo.size.height}
                    src={logo.img.url}
                    width={logo.size.width}
                />
            </span>
            <ItemPrice
                {...{
                    discount,
                    price,
                    onSale,
                }}
            />
            <p className={"item-card__description"}>{description}</p>
            <div className={"item-card__footer text--uppercase"}>
                <ItemDetailsButton />
                <ItemAddToCartButton />
            </div>
        </div>
    )
}
