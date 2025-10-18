import { Image } from "expo-image";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState, useRef } from "react";
import { useRouter } from "expo-router";

export default function On_Boarding_1() {
  const router = useRouter();
  const { width } = Dimensions.get("window");
  const SplashScreenData = [
    {
      id: 1,
      title: "Unlock the Power Of Future AI",
      text: "Chat with the smartest AI Future Experience power of AI with us",
      image: require("../assets/images/On_Boarding_1.png"),
    },
    {
      id: 2,
      title: "Chat With Your Favorite Ai",
      text: "Chat with the smartest AI Future  Experience power of AI with us",
      image: require("../assets/images/On_Boarding_2.png"),
    },
    {
      id: 3,
      title: "Boost Your Mind Power with Ai",
      text: "Chat with the smartest AI Future  Experience power of AI with us",
      image: require("../assets/images/On_Boarding_3.png"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event:any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };

  return (
    <View style={Styles.container}>
      {/* Skip Text */}
      <View style={Styles.skipWrapper}>
        <TouchableOpacity onPress={()=>{router.replace("/(tabs)")}}>
          <Text style={Styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Slides */}
      <View style={{ width }}>
        <FlatList
          ref={flatListRef}
          data={SplashScreenData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <View style={{ width, alignItems: "center", gap: 20 }}>
              <Image
                alt="OnBoarding"
                style={Styles.image}
                source={item.image}
              />
              <View style={Styles.textContainer}>
                <Text style={Styles.title}>{item.title}</Text>
                <Text style={Styles.text}>{item.text}</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* Dots Indicators */}
      <View style={Styles.dotsContainer}>
        {SplashScreenData.map((_, index) => (
          <View
            key={index}
            style={[Styles.dot, currentIndex === index && Styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingTop: 41,
  },
  skipWrapper: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 26,
    marginBottom: 10,
  },
  skipText: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    color: "#D7D7D7",
  },
  textContainer: {
    maxWidth: 316,
  },
  image: {
    width: "90%",
    height: 438.45,
    borderRadius: 33.05,
  },
  title: {
    fontSize: 33.9,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    color: "#23262F",
  },
  text: {
    fontSize: 16.3,
    textAlign: "center",
    fontWeight: "300",
    fontFamily: "Poppins_300Light",
    color: "#8E9295",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#23262f88",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#141718",
    width: 16,
  },
});
