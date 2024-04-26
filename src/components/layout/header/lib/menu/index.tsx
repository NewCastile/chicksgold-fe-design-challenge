import { HEADER_NAV_MENU_ITEMS } from "../../../../../data"

import { HeaderMenuItem } from "./lib/menu-item"

export const HeaderMenu = () => {
    return (
        <nav className={"header-menu"}>
            <ul className={"header-menu-list"}>
                {HEADER_NAV_MENU_ITEMS.map((option, optionIdx) => {
                    return (
                        <HeaderMenuItem
                            key={optionIdx}
                            {...{ itemName: option }}
                        />
                    )
                })}
            </ul>
        </nav>
    )
}
