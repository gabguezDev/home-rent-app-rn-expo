import React from "react";

import {
	createDrawerNavigator,
	DrawerScreenProps,
} from "@react-navigation/drawer";
import {
	HomeScreen,
	BookmarkScreen,
	HelpScreen,
	MessageScreen,
	NearbyScreen,
	NotificationScreen,
	ProfileScreen,
	SettingsScreen,
} from "../screens";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

interface Props extends DrawerScreenProps<any, any> {}

const Drawer = createDrawerNavigator();

export const AppDrawerNavigation = () => {
	const { top } = useSafeAreaInsets();

	return (
		<Drawer.Navigator
			screenOptions={{
				drawerStyle: {
					paddingTop: 50,
					backgroundColor: "rgb(10,142,217)",
				},

				drawerItemStyle: {
					borderTopEndRadius: 30,
					borderBottomRightRadius: 30,
					marginEnd: 40,
					marginStart: 0,
					paddingStart: 20,
				},

				headerShown: false,

				sceneContainerStyle: {
					marginTop: top,
					// maxHeight: 100,
					backgroundColor: "rgb(10,142,217)",
				},

				drawerActiveBackgroundColor: "white",
				drawerActiveTintColor: "rgb(10,142,217)",
				drawerInactiveBackgroundColor: "transparent",
				drawerInactiveTintColor: "white",

				overlayColor: "transparent",

				// drawerHideStatusBarOnOpen: true,
				drawerType: "slide",
			}}
		>
			<Drawer.Screen
				name="HomeScreen"
				options={{
					title: "Home",
					drawerIcon({ color }) {
						return <Ionicons name="home-outline" color={color} size={30} />;
					},
				}}
				component={HomeScreen}
			/>
			<Drawer.Screen
				name="ProfileScreen"
				options={{
					title: "Profile",
					drawerIcon({ color }) {
						return <Ionicons name="person-outline" color={color} size={30} />;
					},
				}}
				component={ProfileScreen}
			/>
			<Drawer.Screen
				name="NearbyScreen"
				options={{
					title: "Nearby",
					drawerIcon({ color }) {
						return <Ionicons name="location-outline" color={color} size={30} />;
					},
				}}
				component={NearbyScreen}
			/>
			<Drawer.Screen
				name="BookmarkScreen"
				options={{
					title: "Bookmarks",
					drawerIcon({ color }) {
						return <Ionicons name="bookmark-outline" color={color} size={30} />;
					},
				}}
				component={BookmarkScreen}
			/>
			<Drawer.Screen
				name="NotificationScreen"
				options={{
					title: "Notifications",
					drawerIcon({ color }) {
						return (
							<Ionicons
								name="notifications-circle-outline"
								color={color}
								size={30}
							/>
						);
					},
				}}
				component={NotificationScreen}
			/>
			<Drawer.Screen
				name="MessageScreen"
				options={{
					title: "Messages",
					drawerIcon({ color }) {
						return (
							<Ionicons name="mail-unread-outline" color={color} size={30} />
						);
					},
				}}
				component={MessageScreen}
			/>

			<Drawer.Screen
				name="SettingsScreen"
				options={{
					title: "Settings",
					drawerIcon({ color }) {
						return <Ionicons name="settings-outline" color={color} size={30} />;
					},
				}}
				component={SettingsScreen}
			/>
			<Drawer.Screen
				name="HelpScreen"
				options={{
					title: "Help",
					drawerIcon({ color }) {
						return (
							<Ionicons name="help-circle-outline" color={color} size={30} />
						);
					},
				}}
				component={HelpScreen}
			/>
		</Drawer.Navigator>
	);
};
