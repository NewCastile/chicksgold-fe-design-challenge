import { SOCIAL_LINKS } from "../../../../../data"
import "./styles.css"

export const Socials = () => {
    return (
        <div className={"socials-container"}>
            <div className={"socials-list"}>
                {SOCIAL_LINKS.map((social, socialIdx) => {
                    const { name: socialName, iconComponent: IconComponent } =
                        social
                    const containerClassname = `social-list-item__social-icon-container bg--${socialName.toLowerCase()}`

                    return (
                        <div key={socialIdx} className={containerClassname}>
                            <IconComponent />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
