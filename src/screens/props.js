import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, View, Text, Image, TouchableOpacity } from "react-native";

import List from "../components/list";
// title="Learn More"
  // color="#841584"
  // accessibilityLabel="Learn more about this purple button"
export default function Props() {
  // Create variable to insert link Image
  let pic = {
    uri: "https://www.nipponexpress.com/press/report/img/06-Nov-20-ogp.jpeg",
  };

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>On the Image elemensdfasdfsdafadst using the default props, namely source</Text>
      <Image source={pic} style={{ width: "100%", height: 200 }} />

      <Button onPress={() => alert("halo")} title="Halo" />
      <TouchableOpacity onPress={() => alert("Hello Full-Stack Bootcamp Participants")}>
        <Text>Click Here</Text>
      </TouchableOpacity>

  
      <List listData="BMW" />
      <List listData="Mercedes-Benz" />
      <List listData="Lamborghini" />
    </View>
  );
}