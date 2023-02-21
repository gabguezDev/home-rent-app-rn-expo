import React, { useCallback } from "react";

import {
	FlatList,
	ImageBackground,
	Text,
	View,
	SafeAreaView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {};

export const PropertiesSlider = (props: Props) => {
	const renderItem = useCallback(({ item }: { item: any }) => {
		return (
			<View style={{ position: "relative" }}>
				<View
					style={{
						position: "absolute",
						right: 15,
						top: 20,
						zIndex: 10,
						width: 70,
						borderRadius: 20,
						padding: 5,
						backgroundColor: "rgba(0,0,0,0.3)",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
					}}
				>
					<Ionicons name="location-outline" size={15} color="white" />
					<Text style={{ fontSize: 13, color: "white" }}>{item.near} km</Text>
				</View>
				<ImageBackground
					borderRadius={20}
					source={{ uri: item.uri }}
					style={{
						width: 250,
						height: 300,
					}}
				>
					<View style={{ position: "absolute", bottom: 20, left: 25 }}>
						<Text
							style={{
								fontSize: 25,
								color: "white",
								marginBottom: 10,
								fontWeight: "600",
							}}
						>
							{item.name}
						</Text>
						<Text
							style={{
								fontSize: 18,
								color: "white",
								fontWeight: "400",
							}}
						>
							{item.description}
						</Text>
					</View>
				</ImageBackground>
			</View>
		);
	}, []);

	return (
		<FlatList
			removeClippedSubviews
			initialNumToRender={4}
			horizontal
			style={{
				flexGrow: 0,
				height: 300,
			}}
			contentContainerStyle={{ overflow: "hidden" }}
			ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
			data={[
				{
					uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
					name: "first Property",
					description: "description",
					near: 1.8,
				},
				{
					uri: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
					name: "second Property",
					description: "description",
					near: 1.5,
				},
				{
					uri: "https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
					name: "third Property",
					description: "description",
					near: 2.5,
				},
				{
					uri: "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
					name: "fourth Property",
					description: "description",
					near: 10,
				},
			]}
			renderItem={renderItem}
		>
			<Text>PropertyTypeSelector</Text>
		</FlatList>
	);
};
