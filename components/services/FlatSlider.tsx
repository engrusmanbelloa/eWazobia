import React, { useRef } from "react"
import { View, Image, Animated, Dimensions, StyleSheet } from "react-native"

const windowWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
  },
  slide: {
    width: windowWidth,
    height: 200,
  },
  slideImage: {
    width: "100%",
    height: "100%",
  },
})

const FlatSlider = ({ slides }: any) => {
  const scrollX = useRef(new Animated.Value(0)).current

  const renderItem = ({ item, index }: any) => {
    const inputRange = [
      (index - 1) * windowWidth,
      index * windowWidth,
      (index + 1) * windowWidth,
    ]

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    })

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [10, 0, 10],
    })

    return (
      <Animated.View
        style={[styles.slide, { opacity, transform: [{ translateY }] }]}
      >
        <Image source={{ uri: item.image }} style={styles.slideImage} />
      </Animated.View>
    )
  }

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  )
}

export default FlatSlider
