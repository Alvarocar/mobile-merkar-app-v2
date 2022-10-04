import { _mainHeaderStyles } from "@src/styles/scenes/_home.styles"
import { View } from "react-native"
import LogoMerkar from "../../../assets/LogoMerkar.component"

const MainHeader = () => (
  <View style={_mainHeaderStyles.container}>
    <LogoMerkar width={250} />
  </View>
)

export default MainHeader
