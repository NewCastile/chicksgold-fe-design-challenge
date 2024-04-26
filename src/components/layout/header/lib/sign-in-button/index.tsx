import { IMAGE_URLS } from "../../../../../data"
import "./styles.css"

export const SignInButton = () => {
    return (
        <button className={"sign-in-btn btn btn--fluorescent-green"}>
            sign in
            <img
                alt={"Profile Icon"}
                className={"sign-in-btn__icon"}
                height={"14"}
                src={IMAGE_URLS.icons.profileIcon.url}
                width={"16"}
            />
        </button>
    )
}
