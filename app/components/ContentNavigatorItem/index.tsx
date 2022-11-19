import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
  id: string;
  icon: string;
};

const ContentNavigatoritem: FC<Props> = ({ text, icon }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default ContentNavigatoritem;

const styles = StyleSheet.create({});
