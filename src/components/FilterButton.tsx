import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { BlueLinearGradient } from "../Layout";

type Props = {};

export const FilterButton = (props: Props) => {
	return (
		<BlueLinearGradient style={styles.linearGradient}>
			<TouchableOpacity>
				<Ionicons name="options-outline" size={25} color="white" />
			</TouchableOpacity>
		</BlueLinearGradient>
	);
};

const styles = StyleSheet.create({
	linearGradient: {
		padding: 8,
		borderRadius: 10,
		marginHorizontal: 3,
	},
});
