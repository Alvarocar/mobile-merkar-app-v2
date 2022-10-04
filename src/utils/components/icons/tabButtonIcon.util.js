import { useMemo } from "react"

export const tabButtonIcon = ({ name, style = {}, selected = {} }) => {
  return WrapperComponent => {
    const withTabButtonIcon = ({ focused }) => {
      const finalStyle = useMemo(
        () => (focused ? { ...style, ...selected } : style),
        [style, selected, focused]
      )
      return <WrapperComponent {...finalStyle} name={name} />
    }
    return withTabButtonIcon
  }
}
