import {Text, View} from "react-native";
import { Button } from "@react-native-material/core";

export default function TextButtons (props) {
  return (
    <>
        <View>
            <Text>
                Text:
            </Text>
        </View>

      <View style={props.styles.buttonsContainer}>
        <Button variant="text" color="primary" title="Button" />

        <Button variant="text" color="secondary" title="Button" />
      </View>
    </>
  );
}