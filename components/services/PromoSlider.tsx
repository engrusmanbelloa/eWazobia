import React, { useRef, useEffect, useState } from "react"
import {
  FlatList,
  Animated,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  PanResponder,
} from "react-native"
import {
  NativeBaseProvider,
  Text,
  Box,
  Pressable,
  Input,
  VStack,
  HStack,
  Button,
  Modal,
} from "native-base"
import { LinearGradient } from "expo-linear-gradient"
import { slides } from "../../constants/data"
import { Ionicons } from "@expo/vector-icons"
import styled from "styled-components/native"

interface SliderItem {
  id: number
  imageUrl: string
}

interface SliderProps {
  data: SliderItem[]
  slideDuration?: number // The duration for each slide (in milliseconds)
}

const Container = styled.View`
  width: 95%;
  margin: auto;
  top: 115px;
  height: 100px;
  border-radius: 15px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`
const SliderImage = styled(Animated.Image)`
  width: 100%;
  height: 50px;
  position: relative;
`
const SliderTitle = styled(Text)`
  color: #fff;
  position: absolute;
  top: 10px;
  font-size: 20px;
  font-weight: 500;
`
const SliderDesc = styled(Text)`
  color: #fff;
  position: absolute;
  width: 70%;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`
const Gradient = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
`
const NextIcon = styled(Ionicons)`
  position: relative;
`
const NextTouchable = styled(TouchableOpacity)`
  position: absolute;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  right: 0px;
  z-index: 99;
`
const PrevTouchable = styled(TouchableOpacity)`
  position: absolute;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  left: 0px;
  z-index: 99;
`
const PrevIcon = styled(Ionicons)`
  position: relative;
`

export default function PromoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const capitalize = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(slides.length - 1, prevIndex + 1))
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  return (
    <Container>
      {slides.map((slide, index) => (
        <SliderImage
          key={slide.id}
          source={{
            uri: slide.image,
          }}
        />
      ))}
      <NextTouchable onPress={goToNextSlide}>
        <NextIcon name="chevron-forward-sharp" size={30} color="white" />
      </NextTouchable>
      <PrevTouchable onPress={goToNextSlide}>
        <PrevIcon
          name="chevron-back-sharp"
          size={30}
          color="white"
          onPress={goToPrevSlide}
        />
      </PrevTouchable>
      <SliderTitle>{capitalize(slides[currentIndex].title)}</SliderTitle>
      <SliderDesc>{capitalize(slides[currentIndex].description)}</SliderDesc>
      <Gradient colors={["transparent", "rgba(0,0,0,0.7)"]} />
    </Container>
  )
}
