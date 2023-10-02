import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	NativeSyntheticEvent,
	NativeScrollEvent,
	Image,
	Modal,
	Animated,
	Easing,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import IndexStore from "../stores/IndexStore";
import MainHeader from "../components/MainHeader";
import {
	responsiveHeight,
	responsiveWidth,
} from "react-native-responsive-dimensions";
import MemorialParkDesignLayout from "../styles/MemorialParkDesignLayout";
import Colors from "../stores/ColorStore";
import { LinearGradient } from "react-native-linear-gradient";
import mainprofileImg from "../../assets/images/adoption-main-img.png";
import RipnftCreate from "../components/RipnftCreate";
import { GraveData } from "src/stores/Gravedata";
import nftbgcloud from "../../assets/images/nftbg.png";
import axios from "../utils/axios";

const Main = ({ navigation }: any) => {
	const scrollViewRef = useRef<ScrollView>(null);
	useEffect(() => {
		setTimeout(() => {
			scrollViewRef.current?.scrollToEnd({ animated: false });
		}, 50);
	}, []);

	const initialData: GraveData = {
		message: "무덤 조회 완료",
		data: {
			graveNo: "0",
			userNo: "0",
			userName: "나무",
			dogNo: "0",
			dogName: "강아지",
			dogBirthDate: "2112.12.31",
			dogBreed: "시간역행개",
			dogDeathDate: "2100.01.01",
			dogSex: "M",
			dogNft: "0x...",
			dogImg: mainprofileImg,
		},
	};

	const [ripList, setRipList] = useState<Object[]>([]);
	const [dataList, setDataList] = useState<Object[]>([]);
	const { LoginStore } = IndexStore();

	useEffect(() => {
		AnimatedStart();
		axios.get("/grave").then((data) => {
			if (data.data.message === "무덤 조회 성공") {
				setRipList(data.data.data);
			}
		});
	}, []);

	if (ripList.length !== 0) {
		setDataList((prevList) => [ripList[0], ...prevList]);

		console.log(dataList);
	}

	const authHandling = (pageName: string) => {
		if (pageName === "Three") {
			navigation.navigate(pageName);
			return;
		}

		if (LoginStore.isLogged) {
			navigation.navigate(pageName);
		} else {
			alert("해당 서비스는 로그인 후 이용가능합니다.");
		}
	};

	const [atTop, setAtTop] = React.useState(false);

	const [nftIndex, setNftIndex] = useState(0);

	const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const { contentOffset } = event.nativeEvent;

		if (contentOffset.y <= 0) {
			// 스크롤이 맨 위에 도달했을 때
			setAtTop(true);
		} else {
			// 스크롤이 맨 위가 아닐 때
			setAtTop(false);
		}
	};

	const handleScrollEndDrag = (
		event: NativeSyntheticEvent<NativeScrollEvent>,
	) => {
		const { contentOffset } = event.nativeEvent;

		if (atTop && contentOffset.y <= 0 && ripList.length - 1 > nftIndex) {
			console.log("맨꼭데기여!!");
			const newData = getNewData(); // 새로운 데이터를 가져오는 함수
			setDataList((prevList) => [newData, ...prevList]); // 배열의 앞에 추가
			setNftIndex(nftIndex + 1);
		}
	};

	const getNewData = () => {
		const returnData = ripList[nftIndex];
		return returnData;
	};

	const animatedValue = new Animated.Value(0);

	const AnimatedStart = () => {
		Animated.timing(animatedValue, {
			toValue: 1,
			duration: 1000,
			easing: Easing.linear,
			useNativeDriver: true,
		}).start();
	};

	return (
		<>
			<Animated.View
				style={{
					opacity: animatedValue,
					top: responsiveHeight(0),
					bottom: responsiveHeight(0),
					left: responsiveWidth(0),
					right: responsiveWidth(0),
				}}
			>
				<ScrollView
					onScroll={handleScroll}
					onScrollEndDrag={handleScrollEndDrag}
					scrollEventThrottle={16}
					contentOffset={{ x: 0, y: 12000 }}
					ref={scrollViewRef}
					// pagingEnabled={true}
				>
					<MainHeader></MainHeader>
					<View style={MemorialParkDesignLayout.nftcontainer}>
						{ripList?.map((data, index) => {
							console.log(data);
							const startColor =
								index >= Colors.length - 1
									? "rgb(0, 0, 0)"
									: Colors[ripList.length - (index % Colors.length)];
							const endColor =
								index >= Colors.length - 1
									? "rgb(0, 0, 0)"
									: Colors[ripList.length - (index % Colors.length) - 1];

							return (
								<View
									key={index}
									style={[
										MemorialParkDesignLayout.nftview,
										// {
										// 	backgroundColor:
										// 		Colors[dataList.length - (index % Colors.length)],
										// },
									]}
								>
									<LinearGradient
										style={[MemorialParkDesignLayout.linearalign, { flex: 1 }]}
										// start={{ x: 0, y: 0 }}
										// end={{ x: 1, y: 1 }}
										colors={[startColor, endColor]}
									>
										<Image
											source={nftbgcloud}
											style={MemorialParkDesignLayout.lineralignbg}
										/>
										<View style={MemorialParkDesignLayout.nftbg}>
											<View style={MemorialParkDesignLayout.nftbgtitle}>
												<Text style={MemorialParkDesignLayout.nftbgtitletext}>
													반려견 추모하기
												</Text>
											</View>
											<View style={MemorialParkDesignLayout.nftinnercontainer}>
												<View style={MemorialParkDesignLayout.ripnftrow1}>
													<Image
														source={mainprofileImg}
														style={MemorialParkDesignLayout.ripnftinnermainimg}
													/>
												</View>
												<View style={MemorialParkDesignLayout.ripnftrow2}>
													<View style={MemorialParkDesignLayout.ripnftbwn}>
														<Text style={MemorialParkDesignLayout.nfttext}>
															{data.dogName}
														</Text>
														<Text style={MemorialParkDesignLayout.nfttext}>
															{data.dogBreed}
														</Text>
													</View>
													<Text style={MemorialParkDesignLayout.nfttextdate}>
														{data.dogBirthDate} ~ {data.dogDeathDate}
													</Text>
													<View style={MemorialParkDesignLayout.ripnftbwn}>
														<Text style={MemorialParkDesignLayout.nfttext}>
															{data.dogSex}
														</Text>
														<Text style={MemorialParkDesignLayout.nfttext}>
															{data.dogName}의 앨범
														</Text>
													</View>
													<View style={MemorialParkDesignLayout.ripnftbwn}>
														<Image
															source={mainprofileImg}
															style={MemorialParkDesignLayout.ripnftinnersubimg}
														/>
														<Image
															source={mainprofileImg}
															style={MemorialParkDesignLayout.ripnftinnersubimg}
														/>
														<Image
															source={mainprofileImg}
															style={MemorialParkDesignLayout.ripnftinnersubimg}
														/>
													</View>
												</View>
											</View>
											<View style={MemorialParkDesignLayout.ripdetailalign}>
												<TouchableOpacity
													onPress={() =>
														navigation.navigate("MemorialParkDetail")
													}
													style={
														MemorialParkDesignLayout.ripnftinnerbtncontainer
													}
												>
													<View
														style={[
															MemorialParkDesignLayout.ripnftinnerbtn,
															{ backgroundColor: startColor },
														]}
													>
														<Text
															style={MemorialParkDesignLayout.ripnftinnertext}
														>
															Detail
														</Text>
													</View>
												</TouchableOpacity>
											</View>
										</View>
									</LinearGradient>
								</View>
							);
						})}
					</View>
					<View>
						<RipnftCreate dataList={dataList} />
					</View>
				</ScrollView>
			</Animated.View>
		</>
	);
};

export default Main;
