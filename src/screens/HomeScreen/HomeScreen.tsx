import React from "react";

import { styles } from "./HomeScreen.styles";
import { View } from "react-native";
import { DrawerNavigationOptions } from "@react-navigation/drawer";

import {
	FilterButton,
	LocationDropdown,
	NotificationButton,
	PropertiesList,
	PropertiesSlider,
	PropertyTypeSelector,
	Searchbar,
} from "../../components";
import { Section } from "../../Layout";
import { ScrollView } from "react-native-gesture-handler";

interface Props extends DrawerNavigationOptions {}

export const HomeScreen = (props: Props) => {
	return (
		<ScrollView>
			<View
				style={{
					flex: 1,
					backgroundColor: "white",
					padding: 20,
					overflow: "scroll",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<LocationDropdown />
					<NotificationButton />
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Searchbar />
					<FilterButton />
				</View>
				<PropertyTypeSelector />
				<Section sectionName="Cerca tuyo">
					<PropertiesSlider />
				</Section>
				<Section sectionName="Mejor para tí">
					<PropertiesList />
				</Section>
			</View>
		</ScrollView>
	);
};
