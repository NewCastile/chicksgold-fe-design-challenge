import { Item } from "../../../../types"
import { visibiliyFilteredClassname } from "../../../../utils/components/visibiltyFilteredClassname"

export const ItemOnSalePill = ({ onSale }: { onSale: Item["onSale"] }) => {
    const onSalePillClassname = visibiliyFilteredClassname({
        baseClassname: "item-card__item-sale-status-container",
        visibilityCondition: !onSale,
    })

    return (
        <>
            <div className={onSalePillClassname}>
                <div className={"item-card__item-sale-status-crcl"} />
                <span className={"item-card__item-sale-status"}>on sale</span>
            </div>
        </>
    )
}
