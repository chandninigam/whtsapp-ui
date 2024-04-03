// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  StatusBar,
  StatusBarStyle,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather as Icon } from "@expo/vector-icons";
import colors from "./src/color.js";
import color from "./src/color.js";

const BottomNavigator = createBottomTabNavigator();
const width = Dimensions.get("window").width;

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  // const [routes] = useState([
  //   { key: "community", title: "" },
  //   { key: "chat", title: "Chats" },
  //   { key: "update", title: "Updates" },
  //   { key: "call", title: "Calls" },
  // ]);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <StatusBar backgroundColor={colors.mainBackgroundColor} style="light" />
      <View
        style={{
          height: layout.height / 14,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.mainBackgroundColor,
          paddingLeft: 18,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontSize: 22,
            color: colors.mainTextColor,
            fontWeight: "400",
          }}
        >
          WhatsApp
        </Text>
        <View style={{ marginRight: 10, flexDirection: "row" }}>
          <Icon
            name="camera"
            size={20}
            style={{ marginRight: 24 }}
            color={colors.mainTextColor}
          />
          <Icon
            name="search"
            size={20}
            style={{ marginRight: 24 }}
            color={colors.mainTextColor}
          />
          <Icon
            name="more-vertical"
            size={20}
            color={colors.mainTextColor}
            style={{ marginLeft: -4 }}
          />
        </View>
      </View>
      <RenderTabBar />
    </View>
  );
}

const RenderTabBar = (props) => {
  const layout = useWindowDimensions();

  return (
    <NavigationContainer>
      <BottomNavigator.Navigator>
        <BottomNavigator.Screen
          name="Chat"
          component={ChatRoute}
          option={{
            tabBarShowLabel: true,
            tabBarIcon: ({ size }) => {
              return <Icon name="message-square" size={20} />;
            },
          }}
        />
        <BottomNavigator.Screen
          name="Updates"
          component={UpdateRoute}
          option={{
            tabBarShowLabel: false,
            tabBarIcon: ({ size }) => {
              return <Icon name="message-square" size={20} />;
            },
          }}
        />
        <BottomNavigator.Screen
          name="Communities"
          component={CommunityRoute}
          option={{
            headerShown: false,
            tabBarIcon: ({ size }) => {
              return <Icon name="message-circle" size={20} />;
            },
          }}
        />
        <BottomNavigator.Screen
          name="Call"
          component={CallRoute}
          option={{
            headerShown: false,
            tabBarIcon: ({ size }) => {
              return <Icon name="message-circle" size={20} />;
            },
          }}
        />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  );
};

const ChatRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const UpdateRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const CallRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const CommunityRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
