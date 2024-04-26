import { Item } from "../../../../types"
import { visibiliyFilteredClassname } from "../../../../utils/components/visibiltyFilteredClassname"

export const ItemInStockPill = ({ inStock }: { inStock: Item["inStock"] }) => {
    const inStockPillClassname = visibiliyFilteredClassname({
        baseClassname: "item-card__item-stock-status",
        visibilityCondition: !inStock,
    })

    return (
        <>
            <span className={inStockPillClassname}>In stock</span>
        </>
    )
}
