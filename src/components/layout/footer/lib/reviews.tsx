import { StarIcon } from "../../../icons/StarIcon"

export const Reviews = () => {
    return (
        <div className={"reviews-container"}>
            <div className={"reviews-qualification"}>
                {Array(5)
                    .fill("")
                    .map((_, idx) => {
                        return (
                            <div
                                key={idx}
                                className={
                                    "reviews-qualification-item-container"
                                }
                            >
                                <StarIcon height={14} width={14} />
                            </div>
                        )
                    })}
            </div>
            <span>Trustpilot Reviews</span>
        </div>
    )
}
