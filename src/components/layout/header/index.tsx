import { MenuIcon } from "../../icons/MenuIcon"
import { ChicksLogo } from "../shared/chicks-logo"

import { CartDropdown } from "./lib/cart-dropdow"
import { CurrencyDropdown } from "./lib/currency-dropdown"
import { HeaderMenu } from "./lib/menu"
import { SignInButton } from "./lib/sign-in-button"
import "./styles.css"

export const Header = () => {
    return (
        <header className={"header"}>
            <div className={"header__menu-btn-container"}>
                <button className={"btn header__menu-btn"}>
                    <MenuIcon />
                </button>
                <div className={"header__chicks-logo-container"}>
                    <ChicksLogo />
                </div>
            </div>
            <HeaderMenu />
            <div className={"header__right-items-container"}>
                <CurrencyDropdown />
                <CartDropdown />
                <SignInButton />
            </div>
        </header>
    )
}
