import React, { PropsWithChildren } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleProp, ViewStyle } from "react-native";

interface Props extends PropsWithChildren {
	style: StyleProp<ViewStyle>;
}

export const BlueLinearGradient = ({ style, children }: Props) => {
	return (
		<LinearGradient colors={["#33a2e2", "#80c9f3"]} style={style}>
			{children}
		</LinearGradient>
	);
};
