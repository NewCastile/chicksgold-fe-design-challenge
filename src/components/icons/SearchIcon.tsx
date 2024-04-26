import { SVGSizeProps } from "../../types"

export const SearchIcon = ({ height, width }: SVGSizeProps) => {
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
            <path d={"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"} />
            <path d={"M21 21l-6 -6"} />
        </svg>
    )
}
