import React, { useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";

type Props = {};

export const PropertiesList = (props: Props) => {
	const renderItem = useCallback(({ item }: { item: any }) => {
		return (
			<View style={styles.propertyContainer}>
				<Image
					borderRadius={20}
					source={{ uri: item.uri }}
					style={styles.propertyImage}
				/>
				<View style={{ flex: 1 }}>
					<Text style={styles.propertyName}>{item.name}</Text>
					<Text style={styles.propertyPrice}>$ {item.price} / Year</Text>
					<View style={styles.propertyRoomsContainer}>
						<View style={styles.propertyRoomDetail}>
							<Ionicons name="bed-outline" size={22} />
							<Text style={styles.propertyRoomText}>
								{item.rooms.bedrooms} Bedroom
							</Text>
						</View>
						<View style={styles.propertyRoomDetail}>
							<Ionicons name="water-outline" size={22} />
							<Text style={styles.propertyRoomText}>
								{item.rooms.bathrooms} Bathroom
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}, []);

	return (
		<FlatList
			nestedScrollEnabled
			scrollEnabled={false}
			removeClippedSubviews
			initialNumToRender={3}
			data={[
				{
					uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
					name: "first Property",
					rooms: { bedrooms: 6, bathrooms: 4 },
					price: 2500000000,
				},
				{
					uri: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
					name: "second Property",
					rooms: { bedrooms: 6, bathrooms: 4 },
					price: 2500000000,
				},
				{
					uri: "https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
					name: "third Property",
					rooms: { bedrooms: 6, bathrooms: 4 },
					price: 2500000000,
				},
				{
					uri: "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
					name: "fourth Property",
					rooms: { bedrooms: 6, bathrooms: 4 },
					price: 2500000000,
				},
			]}
			renderItem={renderItem}
		/>
	);
};

const styles = StyleSheet.create({
	propertyContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 12,
	},
	propertyImage: {
		width: 100,
		height: 100,
		marginEnd: 25,
	},
	propertyName: { fontSize: 22, fontWeight: "500" },
	propertyPrice: { fontSize: 16, color: "blue", marginVertical: 10 },
	propertyRoomsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	propertyRoomDetail: { flexDirection: "row", alignItems: "center" },
	propertyRoomText: { fontSize: 15, color: "grey", marginStart: 5 },
});
