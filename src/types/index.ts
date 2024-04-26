export interface Item {
    id: number
    onSale: boolean
    game: string
    inStock: boolean
    name: string
    image: string
    quantity: number
    price: number
    description: string
    discount: number
    logo: SVGLogo
}

export interface SVGLogo {
    img: SVGRelevantImgProps
    size: SVGSizeProps
}

export interface SVGRelevantImgProps {
    url: string
    alt: string
}

export interface SVGSizeProps {
    height?: React.SVGAttributes<SVGSVGElement>["height"]
    width?: React.SVGAttributes<SVGSVGElement>["width"]
}
