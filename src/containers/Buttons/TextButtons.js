import {Text, View} from "react-native";
import { Button } from 'react-native-paper';

export default function TextButtons (props) {
  return (
    <>
        <View>
            <Text>
                Text:
            </Text>
        </View>

      <View style={props.styles.buttonsContainer}>
          <Button>
              Button
          </Button>
      </View>
    </>
  );
}