import { IMAGE_URLS } from "../../../../data"

export const ItemQuantityInput = ({ quantity }: { quantity: number }) => {
    return (
        <div className={"item-card__item-qty-container"}>
            <div className={"item-card__item-qty-select bg--gray--90"}>
                <span className={"item-card__item-qty-display"}>
                    {quantity}
                </span>
                <div
                    className={
                        "item-card__item-qty-select__controllers-container"
                    }
                >
                    <button className={"btn btn--xs"}>
                        <img
                            alt={"Arrow down icon"}
                            className={"arrow-up-icon--xs"}
                            src={IMAGE_URLS.icons.arrowDownIcon.url}
                        />
                    </button>
                    <button className={"btn btn--xs"}>
                        <img
                            alt={"Arrow down icon"}
                            className={"arrow-down-icon--xs"}
                            src={IMAGE_URLS.icons.arrowDownIcon.url}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
