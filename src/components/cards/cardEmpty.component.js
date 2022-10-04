import { View } from "react-native"
import { cardEmptyStyles } from "@src/styles/components/cards/_cardEmpty"

const CardEmpty = ({ header: Header, children }) => (
  <View style={cardEmptyStyles.container}>
    <View style={cardEmptyStyles.header}>{Header}</View>
    <View style={cardEmptyStyles.body}>{children}</View>
  </View>
)

export default CardEmpty
