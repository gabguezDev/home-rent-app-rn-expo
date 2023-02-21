import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import {
	TextInput,
	TextInputChangeEventData,
	View,
	StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableHighlight } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

type Props = {};

export const Searchbar = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleSearch = (value: string) => {
		setSearchValue(value);
	};

	return (
		<View style={styles.searchbarContainer}>
			<TouchableOpacity>
				<Ionicons name="search-outline" size={25} />
			</TouchableOpacity>
			<TextInput
				value={searchValue}
				onChangeText={handleSearch}
				style={styles.textInput}
				placeholder="Buscar dirección, o cerca tuyo"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	searchbarContainer: {
		flex: 1,
		height: 40,

		flexDirection: "row",
		alignItems: "center",

		backgroundColor: "rgba(0,0,0,0.1)",

		borderRadius: 14,

		paddingHorizontal: 15,
		marginVertical: 10,
	},
	textInput: { flex: 1, marginHorizontal: 10, fontSize: 18 },
});
