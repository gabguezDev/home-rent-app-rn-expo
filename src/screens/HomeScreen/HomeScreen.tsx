import React, { useEffect, useState } from "react";

import { styles } from "./HomeScreen.styles";
import { View, Text, DrawerSlideEvent } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
	useDrawerStatus,
	DrawerScreenProps,
	DrawerNavigationOptions,
} from "@react-navigation/drawer";

interface Props extends DrawerNavigationOptions {}

export const HomeScreen = (props: Props) => {
	// let drawer = useDrawerStatus();
	// const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	// useEffect(() => {
	// setIsDrawerOpen(drawer == "open");
	// }, [isDrawerOpen]);

	console.log(props);
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "white",
				padding: 20,

				// borderTopLeftRadius: isDrawerOpen ? 50 : 0,
			}}
		>
			<Text>HomeScreen</Text>
		</View>
	);
};
