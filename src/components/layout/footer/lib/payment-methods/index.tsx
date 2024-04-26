import { PAYMENT_METHODS_LOGOS } from "../../../../../data"
import "./styles.css"
export const PaymentMethods = () => {
    return (
        <div className={"payment-methods-bg-container bg--darker-blue"}>
            <div className={"payment-methods-container"}>
                <div className={"payment-methods-list"}>
                    {PAYMENT_METHODS_LOGOS.map((logo, logoIdx) => {
                        return (
                            <img
                                key={logoIdx}
                                alt={logo.img.alt}
                                height={logo.size.height}
                                src={logo.img.url}
                                width={logo.size.width}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
