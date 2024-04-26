import { SVGSizeProps } from "../../types"

export const MenuIcon = ({ height, width }: SVGSizeProps) => {
    return (
        <svg
            fill={"none"}
            height={height ?? 24}
            stroke={"currentColor"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            strokeWidth={2}
            viewBox={"0 0 24 24"}
            width={width ?? 24}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"} />
            <path d={"M4 6l16 0"} />
            <path d={"M4 12l16 0"} />
            <path d={"M4 18l16 0"} />
        </svg>
    )
}
