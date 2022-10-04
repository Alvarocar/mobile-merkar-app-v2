import EmptyComponent from "@src/utils/components/emptyComponent.util"
import withProps from "@src/utils/hoc/withProps.util"
import { isNull, isUndefined } from "lodash"
import React from "react"
import { compose } from "redux"

const SubRoute = ({ component: Component, children, middlewares = [] }) => {
  if (!isUndefined(children)) {
    const Stack = children.stack
    const routes = children.routes
    return (
      <Stack.Navigator {...children.navProps}>
        {routes.map((route, i) => {
          return (
            <Stack.Screen
              name={route.name}
              options={{ ...route.screenProps }}
              component={withProps(SubRoute, route)}
              key={i}
            />
          )
        })}
      </Stack.Navigator>
    )
  }
  const MainComponent = isNull(Component)
    ? EmptyComponent
    : compose(...middlewares)(Component)
  return <MainComponent />
}

export default SubRoute
