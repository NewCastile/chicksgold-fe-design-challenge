import { Item } from "../../../../types"

export const ItemPrice = ({
    discount,
    price,
    onSale,
}: {
    discount: Item["discount"]
    price: Item["price"]
    onSale: Item["onSale"]
}) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(price)

    const formattedDiscount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(discount)

    return (
        <div
            className={`item-card__price-container ${!onSale && "visibility--hidden"}`}
        >
            {discount === 0 ? (
                <span className={"item-card__item-price"}>
                    {formattedPrice}
                </span>
            ) : (
                <>
                    <span className={"item-card__item-price"}>
                        {formattedDiscount}
                    </span>
                    <span
                        className={
                            "text--gray--50 text--line--through text--decor--red--clear"
                        }
                    >
                        {formattedPrice}
                    </span>
                </>
            )}
        </div>
    )
}
