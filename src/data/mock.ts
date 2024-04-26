import abyssGreatSword from "../assets/images/abyss-greatsword.png"
import { Item, SVGLogo } from "../types"

export const ITEMS: Item[] = Array(10)
    .fill("")
    .map((_, idx) => {
        const item: Omit<Item, "onSale" | "logo"> = {
            id: idx,
            game: "Dark Souls",
            description: `
                This greatsword belonged to 
                Lord Gwyn's Knight Artorias, 
                who fell to the Abyss.
            `,
            image: abyssGreatSword,
            name: "Abyss Grearsword",
            price: 522.5,
            quantity: 5,
            discount: 450,
            inStock: true,
        }

        const gameLogo: SVGLogo = {
            img: {
                url: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Dark_Souls_logo_black.svg",
                alt: `${item.game} logo`,
            },
            size: {
                height: 30,
                width: 50,
            },
        }

        return { ...item, logo: gameLogo, onSale: idx % 2 === 0 }
    })
