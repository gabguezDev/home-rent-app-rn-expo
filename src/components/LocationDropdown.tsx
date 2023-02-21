import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {};

export const LocationDropdown = (props: Props) => {
	return (
		<View style={styles.dropdownContainer}>
			<Text style={styles.dropdownLabel}>Location</Text>
			<View style={styles.dropdownMenu}>
				<Text style={styles.selected}>Jakarta</Text>
				<TouchableOpacity style={styles.chevronDown}>
					<Ionicons name="chevron-down" size={20} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	dropdownContainer: {},
	dropdownLabel: { fontSize: 15, color: "grey" },
	dropdownMenu: { flexDirection: "row", alignItems: "center" },
	selected: { fontSize: 23, fontWeight: "600" },
	chevronDown: { marginHorizontal: 5 },
});
