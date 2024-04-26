import "./styles.css"
export const Pagination = () => {
    return (
        <div className={"pagination-container"}>
            <button className={"btn btn--blue--outline"}>❮</button>
            {Array(6)
                .fill("")
                .map((_, idx) => {
                    return (
                        <button key={idx} className={"btn btn--blue"}>
                            {idx === 4 ? "..." : idx}
                        </button>
                    )
                })}
            <button className={"btn btn--blue--outline"}>❯</button>
        </div>
    )
}
