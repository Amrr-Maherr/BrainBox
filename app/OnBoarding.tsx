import { Text, View } from "@/components/Themed";
import Slider from "@/data/SliderData";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {Image, Dimensions, StyleSheet, Pressable } from "react-native";
import Carousel, { Pagination } from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";


const { width } = Dimensions.get("window");

export default function OnboardingSlider() {
  // console.log(Slider);
  const Router = useRouter()
  const carouselRef = useRef(null);
  const progress = useSharedValue(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container} lightColor="#fff" darkColor="#000">
        <View style={styles.skipContainer}>
          <Pressable style={styles.skipButton} onPress={()=>{Router.replace("/(tabs)")}}>
            <Text
              lightColor="#000"
              darkColor="#FFFFFF"
              style={styles.skipButtonText}
            >
              Skip
            </Text>
          </Pressable>
        </View>
        <Carousel
          ref={carouselRef}
          width={width}
          height={750}
          data={Slider}
          loop
          autoPlay
          autoPlayInterval={3000}
          pagingEnabled
          onProgressChange={(offsetProgress, absoluteProgress) => {
            progress.value = absoluteProgress;
          }}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Image source={item?.image} style={styles.image} />

              <Text style={styles.title} lightColor="#000" darkColor="#FFFFFF">
                {item?.title}
              </Text>
              <Text
                lightColor="#000"
                darkColor="#8E9295"
                style={styles.subTitle}
              >
                {item?.SubTitle}
              </Text>
            </View>
          )}
        />
        <Pagination.Basic
          progress={progress}
          data={Slider}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    width:"100%"
  },
  slide: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 445,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 33.9,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    lineHeight: 50.9,
  },
  subTitle: {
    fontSize: 16.3,
    textAlign: "center",
    lineHeight: 28.9,
  },
  skipContainer: {
    width: "100%",
    alignItems: "flex-end",
    justifyContent:"center",
    paddingRight: 10,
    zIndex: 1,
  },
  skipButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#8E9295",
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
});
