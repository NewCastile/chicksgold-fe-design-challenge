import { IMAGE_URLS } from "../../../../data"
import "./styles.css"

export const ChicksLogo = () => {
    return (
        <div className={"chicks-logo-container"}>
            <img
                alt={IMAGE_URLS.logos.chicksLogo.alt}
                className={"chicks-logo-img"}
                src={IMAGE_URLS.logos.chicksLogo.url}
            />
        </div>
    )
}
