import { DiscordIcon } from "../components/icons/socials/DiscordIcon"
import { FacebookIcon } from "../components/icons/socials/FacebookIcon"
import { InstagramIcon } from "../components/icons/socials/InstagramIcon"
import { TwitterIcon } from "../components/icons/socials/TwitterIcon"
import { SVGLogo } from "../types"

export const PAYMENT_METHODS_LOGOS: SVGLogo[] = [
    {
        img: {
            url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
            alt: "Visa logo",
        },
        size: {
            width: 80,
            height: 80,
        },
    },
    {
        img: {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg",
            alt: "Mastercard logo",
        },
        size: {
            width: 60,
            height: 60,
        },
    },
    {
        img: {
            url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg",
            alt: "American Express logo",
        },
        size: {
            width: 40,
            height: 40,
        },
    },
    {
        img: {
            url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Skrill_logo.svg",
            alt: "Skrill logo",
        },
        size: {
            width: 60,
            height: 60,
        },
    },
]

export const IMAGE_URLS = {
    icons: {
        greenMoneyBagIcon: {
            url: "https://chicksgold.com/icons/green-icons/item-bag.svg",
            alt: "Green money bag icon",
        },
        greenFeatherIcon: {
            url: "https://chicksgold.com/icons/green-icons/feather.svg",
            alt: "Green feather icon",
        },
        greenAdjusmentsIcon: {
            url: "https://chicksgold.com/icons/green-icons/filter.svg",
            alt: "Green adjustments icon",
        },
        arrowDownIcon: {
            url: "https://chicksgold.com/icons/arrow-white.svg",
            alt: "Arrow down icon",
        },
        arrowDownOutlinedIcon: {
            url: "https://chicksgold.com/icons/arrow-down.svg",
            alt: "Arrow down outlined icon",
        },
        cartIcon: {
            url: "https://chicksgold.com/icons/cart.svg",
            alt: "Cart icon",
        },
        profileIcon: {
            url: "	https://chicksgold.com/sign-in/profile.png",
            alt: "Profile icon",
        },
    },
    logos: {
        chicksLogo: {
            url: "https://chicksgold.com/logo/chicks-logo-large.svg",
            alt: "ChicksGold logo",
        },
    },
}

export const FOOTER_SECTIONS = [
    { links: ["support@chicksgold.com"] },
    { hero: "Chicks Gold", links: ["Games", "About Us", "Blog", "Sitemap"] },
    { hero: "Support", links: ["Contact Us", "FAQ"] },
    {
        hero: "Legal",
        links: ["Privacy Policy", "Terms of Service", "Copyright Policy"],
    },
]

export const SOCIAL_LINKS = [
    { name: "facebook", iconComponent: FacebookIcon },
    { name: "instagram", iconComponent: InstagramIcon },
    { name: "twitter", iconComponent: TwitterIcon },
    { name: "discord", iconComponent: DiscordIcon },
]

export const HEADER_NAV_MENU_ITEMS = [
    "currency",
    "items",
    "accounts",
    "services",
    "swap",
    "sell",
]
