import {Text, View} from "react-native";
import { Button } from "@react-native-material/core";

export default function TextButtons () {
  return (
    <>
      <Text>
        Text:
      </Text>

      <View>
        <Button variant="text" color="primary" title="Button" />

        <Button variant="text" color="secondary" title="Button" />
      </View>
    </>
  );
}