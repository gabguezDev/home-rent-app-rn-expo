import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";
import { AppDrawerNavigation } from "./src/navigation";

import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function App() {
	return (
		<SafeAreaProvider>
			<StatusBar hidden />
			<NavigationContainer>
				<AppDrawerNavigation />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
