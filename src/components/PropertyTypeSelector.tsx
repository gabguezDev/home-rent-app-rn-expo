import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BlueLinearGradient } from "../Layout";

type Props = {};

export const PropertyTypeSelector = (props: Props) => {
	return (
		<FlatList
			horizontal
			style={{
				flexGrow: 0,
				marginVertical: 15,
				height: 50,
			}}
			contentContainerStyle={{ overflow: "hidden" }}
			overScrollMode="never"
			ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
			data={[
				"House",
				"Apartment",
				"Hotel",
				"Villa",
				"House",
				"Apartment",
				"Hotel",
				"Villa",
			]}
			renderItem={({ item }) => {
				return (
					<TouchableOpacity
						style={{
							shadowOpacity: 0.1,
							shadowColor: "black",
							shadowRadius: 3,
							shadowOffset: { width: 2, height: 5 },
						}}
					>
						<BlueLinearGradient
							style={{
								borderRadius: 10,
								padding: 10,
							}}
						>
							<Text style={{ fontSize: 18, color: "white" }}>{item}</Text>
						</BlueLinearGradient>
					</TouchableOpacity>
				);
			}}
		>
			<Text>PropertyTypeSelector</Text>
		</FlatList>
	);
};
