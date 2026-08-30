import 'react-native-reanimated';
import { StyleSheet, View, Text } from 'react-native';
import Buttons from "../src/containers/Buttons";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
      <View style={styles.container}>
        <Buttons styles={styles} />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
    buttonsContainer: {
        flexDirection: "row",
    }
});
