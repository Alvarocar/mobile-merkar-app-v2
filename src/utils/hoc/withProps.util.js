import React from "react"

const withProps = (Wrapped, customProps = {}) => {
  const WithProps = props => <Wrapped {...props} {...customProps} />
  return WithProps
}

export default withProps