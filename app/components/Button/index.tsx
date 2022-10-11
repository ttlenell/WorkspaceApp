import * as React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
// import safelist from 'tailwind-safelist';
import tw from 'twrnc';
type Props = {
  text: string;
  style: any;
  classes: any;
};

const Button: React.FC<Props> = ({ text, classes }) => {
  return (
    <TouchableOpacity style={tw`${classes.containerClasses}`}>
      <View>
        <Text style={tw`${classes.buttonClasses}`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Button;
