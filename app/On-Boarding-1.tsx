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
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";

export default function On_Boarding_1() {
  const router = useRouter();
  const { width } = Dimensions.get("window");
  const SplashScreenData = [
    {
      id: 1,
      title: "Unlock the Power Of Future AI",
      text: "Chat with the smartest AI Future Experience power of AI with us",
      image: require("../assets/images/On_Boarding_1.png"),
      blur: require("../assets/images/On_Boarding_1_blur.png"),
    },
    {
      id: 2,
      title: "Chat With Your Favorite Ai",
      text: "Chat with the smartest AI Future  Experience power of AI with us",
      image: require("../assets/images/On_Boarding_2.png"),
      blur: require("../assets/images/On_Boarding_2_blur.png"),
    },
    {
      id: 3,
      title: "Boost Your Mind Power with Ai",
      text: "Chat with the smartest AI Future  Experience power of AI with us",
      image: require("../assets/images/On_Boarding_3.png"),
      blur: require("../assets/images/On_Boarding_3_blur.png"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event:any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };

  return (
    <ThemedView
      style={Styles.container}
      lightColor="#F7F8FA"
      darkColor="#000000"
    >
      <Image
        alt="background_blur"
        source={require("../assets/images/On_Boarding_3_blur.png")}
        style={Styles.blurBackground}
        contentFit="contain"
      />

      {/* Skip Text */}
      <View style={Styles.skipWrapper}>
        <TouchableOpacity
          onPress={() => {
            router.replace("/Welcome");
          }}
        >
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
                <ThemedText
                  lightColor="#23262F"
                  darkColor="#fff"
                  style={Styles.title}
                >
                  {item.title}
                </ThemedText>
                <ThemedText
                  lightColor="#23262F"
                  darkColor="#8E9295"
                  style={Styles.text}
                >
                  {item.text}
                </ThemedText>
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
    </ThemedView>
  );
}

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    paddingTop: 41,
  },
  blurBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  skipWrapper: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 26,
    marginBottom: 10,
    zIndex: 10,
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
    zIndex: 2,
  },
  title: {
    fontSize: 33.9,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    lineHeight: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 16.3,
    textAlign: "center",
    fontWeight: "300",
    fontFamily: "Poppins_300Light",
    lineHeight: 20,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    zIndex: 10,
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
