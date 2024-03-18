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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Feather as Icon } from "@expo/vector-icons";
import colors from "./src/color.js";
import color from "./src/color.js";

const Tab = createMaterialTopTabNavigator();
const width = Dimensions.get("window").width;

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "community", title: "" },
    { key: "chat", title: "Chats" },
    { key: "update", title: "Updates" },
    { key: "call", title: "Calls" },
  ]);
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
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const renderTabBar = (props) => {
  const layout = useWindowDimensions();

  return (
    <TabBar
      {...props}
      style={{
        backgroundColor: colors.mainBackgroundColor,
        fontSize: 14,
        fontWeight: "400",
        paddingLeft: 8,
      }}
      renderTabBarItem={(item) => {
        console.log("item----->", JSON.stringify(item));
        if (item.route.title === "") {
          return (
            <View
              style={{
                marginRight: width / 30,
                justifyContent: "center",
              }}
            >
              <Icon name="users" size={20} color={colors.tabTextColor} />
            </View>
          );
        }
        return (
          <View
            style={{
              width: width / 3.5,
              padding: 12,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colors.tabTextColor,
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              {item.route.title}
            </Text>
          </View>
        );
      }}
    />
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

const renderScene = SceneMap({
  community: CommunityRoute,
  chat: ChatRoute,
  update: UpdateRoute,
  call: CallRoute,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
