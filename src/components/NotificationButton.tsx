import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {};

export const NotificationButton = (props: Props) => {
	return (
		<TouchableOpacity>
			<Ionicons name="notifications-outline" size={35} />
		</TouchableOpacity>
	);
};
