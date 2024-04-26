import { FOOTER_SECTIONS } from "../../../data"
import { ChicksLogo } from "../shared/chicks-logo"

import { Copyright } from "./lib/copyright"
import { NavSectionHero } from "./lib/nav-section/hero"
import { NavSectionLinks } from "./lib/nav-section/links"
import { PaymentMethods } from "./lib/payment-methods"
import { Reviews } from "./lib/reviews"
import { Socials } from "./lib/socials"
import "./styles.css"

export const Footer = () => {
    return (
        <footer className={"footer"}>
            <PaymentMethods />
            <Socials />
            <nav className={"footer-nav"}>
                <div
                    className={"footer-section__responsive-container--desktop"}
                >
                    <ChicksLogo />
                </div>
                <>
                    {FOOTER_SECTIONS.map((section, sectionIdx) => {
                        if (section.hero)
                            return (
                                <div
                                    key={sectionIdx}
                                    className={"footer-nav-content"}
                                >
                                    <div className={"footer-section-container"}>
                                        <NavSectionHero
                                            {...{ heroText: section.hero }}
                                        />
                                    </div>
                                </div>
                            )
                    })}
                </>
                <div
                    className={"footer-section__responsive-container--desktop"}
                >
                    <Reviews />
                </div>
                <>
                    {FOOTER_SECTIONS.map((section, sectionIdx) => {
                        return (
                            <NavSectionLinks
                                key={sectionIdx}
                                {...{ links: section.links }}
                            />
                        )
                    })}
                </>
            </nav>
            <div className={"footer-section__responsive-container--mobile"}>
                <Reviews />
            </div>
            <Copyright />
        </footer>
    )
}
