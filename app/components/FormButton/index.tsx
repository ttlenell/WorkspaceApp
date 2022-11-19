import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { IFormButton } from "./types";
import Colors from "../../constants/Colors";

const width = Dimensions.get("window").width;

const FormButton: FC<IFormButton> = ({
  onPress,
  text,
  size,
  bordered = false,
  type = "filled",
  textSize = 16,
  textToUpperCase = false,
}) => {
  const large = width / 1.3;
  const small = width / 3;
  const btnSize = size === "large" ? large : small;
  const btnBorderRadius = bordered ? 30 : 15;
  const btnFontSize = textSize;
  const btnBgColor = type === "filled" ? Colors.BACKUP_COLOR : "transparent";
  const btnTextColor = type === "filled" ? "#FFF" : "#6371c2";
  const toUpperCase = textToUpperCase === true ? "uppercase" : null;
  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 10,
    width: btnSize,
    borderRadius: btnBorderRadius,
  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: textSize,
    textTransform: toUpperCase,
    textAlign: "center",
  };

  const border = type === "outlined" && {
    borderColor: "#e7e7e7",
    borderWidth: 2,
  };

  return (
    <TouchableOpacity style={[containerCommonStyle, border]} onPress={onPress}>
      <Text style={[textCommonStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  formButton: {
    marginHorizontal: "10%",
    backgroundColor: "#3B40B5",
    borderRadius: 6,
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  formButtonText: {
    color: "#FFF",
  },
});
