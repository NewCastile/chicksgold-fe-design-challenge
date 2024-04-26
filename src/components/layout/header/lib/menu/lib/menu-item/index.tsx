import { IMAGE_URLS } from "../../../../../../../data"

export const HeaderMenuItem = ({ itemName }: { itemName: string }) => {
    return (
        <li>
            <span className={"header-menu-list-item"}>
                <button className={"btn btn--inline-icon text--uppercase"}>
                    <span>{itemName}</span>
                    <img
                        alt={IMAGE_URLS.icons.arrowDownOutlinedIcon.alt}
                        height={"10"}
                        src={IMAGE_URLS.icons.arrowDownOutlinedIcon.url}
                        width={"10"}
                    />
                </button>
            </span>
        </li>
    )
}
