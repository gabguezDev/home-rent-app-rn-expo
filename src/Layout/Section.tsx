import React, { PropsWithChildren } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props extends PropsWithChildren {
	sectionName: string;
}

export const Section = ({ sectionName, children }: Props) => {
	return (
		<View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginVertical: 20,
				}}
			>
				<Text style={{ fontSize: 25, fontWeight: "600" }}>{sectionName}</Text>
				<TouchableOpacity>
					<Text style={{ fontSize: 15, color: "grey" }}>Ver más</Text>
				</TouchableOpacity>
			</View>
			<View>{children}</View>
		</View>
	);
};
