import { IMAGE_URLS } from "../../../../data"
import { DeviceGamepadIcon } from "../../../icons/DeviceGamepadIcon"

export const SearchGameInput = () => {
    return (
        <div className={"search-game-input-container bg--gray--translucent"}>
            <button className={"btn"}>
                <DeviceGamepadIcon />
            </button>
            <input
                className={"search-game-input"}
                placeholder={"Select a game"}
            />
            <button className={"btn"}>
                <img
                    alt={IMAGE_URLS.icons.arrowDownIcon.alt}
                    className={"arrow-down-icon--xs"}
                    src={IMAGE_URLS.icons.arrowDownIcon.url}
                />
            </button>
        </div>
    )
}
