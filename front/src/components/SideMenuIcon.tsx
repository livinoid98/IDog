import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {
	responsiveWidth,
	responsiveHeight,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import IndexStore from "../stores/IndexStore";

const SideMenuIcon = ({ title, imageIcon, movePage }: any) => {
	const navigation = useNavigation();
	const {LoginStore} = IndexStore();

	const authHandling = () => {
		// 추모공원은 로그인이 진행되지 않아도 랜딩 가능
		if(movePage === "Three"){
			navigation.navigate(movePage);
			return;
		}

		// 추모공원 외 페이지는 로그인에 따른 핸들링 진행
		if(LoginStore.isLogged){
			navigation.navigate(movePage);
		}else{
			alert('로그인 후 이용하실 수 있는 서비스입니다.');
		}
	}
	return (
		<>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={authHandling}
			>
				<View style={styles.iconWrap}>
					<Image source={imageIcon} style={styles.sideMenuIcon} />
					<Text style={styles.text}>{title}</Text>
				</View>
			</TouchableOpacity>
		</>
	);
};

const styles = StyleSheet.create({
	iconWrap: {
		marginHorizontal: responsiveWidth(4),
		marginTop: 25,
	},
	sideMenuIcon: {
		width: 44,
		height: 44,
	},
	text: {
		fontSize: 10,
		fontWeight: "500",
		color: "#494949",
		marginTop: 4,
	},
});

export default SideMenuIcon;
