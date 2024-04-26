// appends visibility--hidden classname to the classnames list
export const visibiliyFilteredClassname = ({
    baseClassname,
    visibilityCondition,
}: {
    baseClassname: string
    visibilityCondition: boolean
}) => {
    if (!baseClassname) return
    if (visibilityCondition) {
        return `${baseClassname} visibility--hidden`
    } else {
        return baseClassname
    }
}
