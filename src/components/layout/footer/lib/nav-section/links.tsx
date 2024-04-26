export const NavSectionLinks = ({ links }: { links: string[] }) => {
    return (
        <ul className={"footer-section-links"}>
            {links.map((link, linkIdx) => {
                return (
                    <li key={linkIdx}>
                        <a key={linkIdx} href={"/"}>
                            {link}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
