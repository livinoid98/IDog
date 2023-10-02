import { StyleSheet } from "react-native";
import {
	responsiveWidth,
	responsiveHeight,
} from "react-native-responsive-dimensions";

const SideMenuLayout = StyleSheet.create({
	ripContent: {
		// display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: responsiveWidth(100),
		height: responsiveHeight(100),
		// backgroundColor: "#f2f2f2",
	},
	riptext1: {
		color: "#EE8A72",
		fontSize: 24,
		fontWeight: "900",
		marginTop: 50,
		marginBottom: 10,
	},
	riptext2: {
		color: "#EE8A72",
		fontSize: 24,
		fontWeight: "900",
		marginTop: 10,
	},

	ripImage: {
		zIndex: -1,
		height: 200,
		overflow: "hidden",
		position: "absolute",
	},
	ripImage2: {
		display: "flex",
		height: 150,
		width: 100,
		borderRadius: 20,
	},
	ripImage3: {
		display: "flex",
		height: 70,
		width: 60,
		borderRadius: 10,
		// marginHorizontal: 8,
		// marginVertical: 10,
	},
	ripImage4: {
		display: "flex",
		height: 100,
		width: 100,
		borderRadius: 10,
		// marginHorizontal: 8,
		// marginVertical: 10,
	},
	viewProfile1: {
		// matginTop: ,
		display: "flex",
		flexDirection: "row",
		// justifyContent: "center",
		// alignItems: "center",
		// backgroundColor: "green",
		// marginHorizontal: 15,
		// marginVertical: 15,
	},
	viewPorifile2: {
		// flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 17,
		// marginVertical: 10,
	},
	viewPorifile3: {
		display: "flex",
		flexDirection: "column",
		// justifyContent: "center",
		// alignItems: "",
		// backgroundColor: "blue",
	},
	viewPorifile4: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		// backgroundColor: "red",
		width: 200,
		// alignItems: "center",
		marginTop: 3,
	},
	viewPorifile5: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		// backgroundColor: "red",
		// width: 200
		// alignItems: "center",
	},

	gradient: {
		zIndex: -1,
		height: responsiveHeight(100),
		width: 500,
		position: "absolute",
		top: 150,
		display: "flex",
		flexDirection: "column",
		// justifyContent: "center",
		alignItems: "center",
		// paddingHorizontal: responsiveWidth(4),
		// paddingVertical: responsiveHeight(4),
	},
	view2: {
		marginTop: 10,
		width: 350,
		height: 200,
		backgroundColor: "#f2f2f2",
		zIndex: 2,
		borderRadius: 20,
		justifyContent: "center",
		// alignItems: "center",
	},
	view3: {
		marginTop: 10,
		width: 350,
		height: 200,
		backgroundColor: "#f2f2f2",
		zIndex: 2,
		borderRadius: 20,
		// justifyContent: "center",
		// alignItems: "center",
	},
});

export default SideMenuLayout;
