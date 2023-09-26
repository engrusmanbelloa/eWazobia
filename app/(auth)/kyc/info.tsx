import React, { useState, useEffect, useContext } from "react"
import { Ionicons } from "@expo/vector-icons"
import DatePicker from "react-native-datepicker"
import DateTimePicker from "@react-native-community/datetimepicker"
import SelectDropdown from "react-native-select-dropdown"
import RNPickerSelect from "react-native-picker-select"
import {
  KeyboardAvoidingView,
  Button,
  Text,
  Input,
  Stack,
  FormControl,
  HStack,
  Box,
  VStack,
  Select,
} from "native-base"
import styled from "styled-components/native"
import { ThemeContext } from "../../../constants/ThemeContext"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeProps } from ".../../../types/styleTypes"
import Submit from "../../../components/Submit"

// Define the styled components
const InfoScreenContainer = styled(VStack)`
  margin-bottom: 20%;
`
const InfoText = styled(Text)`
  font-size: 25px;
  font-weight: 600;
  line-height: 25px;
  top: 5%;
  margin-bottom: 10%;
`
const NamesInput = styled(Input)``
const Dob = styled(Button)`
  background: #fff;
  border: 0.5px solid #808080;
`
const Gender = styled(Select)`
  height: 40px;
`
interface InfoProps {
  handleInfoSubmit?: () => void
}

export default function InfoScreen(props: InfoProps) {
  const { mode, theme } = useContext(ThemeContext)
  const [step, setStep] = useState(1)
  const [dob, setDOB] = useState<Date | undefined>(undefined)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [nationality, setNationality] = useState("")
  const [nationalities, setNationalities] = useState([])
  const [state, setState] = useState("")
  const [states, setStates] = useState([])
  const [city, setCity] = useState("")
  const [cities, setCities] = useState([])

  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    home: "",
    nationality: "",
    zipCode: "",
  })

  const handleDOBChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dob
    setShowDatePicker(false)
    setDOB(currentDate)
  }

  // Fetch the list of nationalities from the REST Countries API
  useEffect(() => {
    fetch(
      "http://api.geonames.org/countryInfoJSON?formatted=true&username=engrusmanbelloa"
    )
      .then((response) => response.json())
      .then((data) => {
        const fetchedNationalities = data.geonames.map((country: any) => ({
          label: country.countryName,
          value: country.geonameId,
        }))
        setNationalities(fetchedNationalities)
      })
      .catch((error) => {
        console.log("Error fetching nationalities:", error)
      })
  }, [])

  // Fetch the list of states based on the selected nationality
  useEffect(() => {
    if (nationality) {
      fetch(
        `http://api.geonames.org/childrenJSON?geonameId=${nationality}&username=engrusmanbelloa`
      )
        .then((response) => response.json())
        .then((data) => {
          const fetchedStates = data.geonames.map((state: any) => ({
            label: state.name,
            value: state.geonameId.toString(),
          }))
          setStates(fetchedStates)
        })
        .catch((error) => {
          console.log("Error fetching states:", error)
        })
    }
  }, [nationality])

  // Fetch the list of cities based on the selected state
  useEffect(() => {
    if (state) {
      fetch(
        `http://api.geonames.org/childrenJSON?geonameId=${state}&username=engrusmanbelloa`
      )
        .then((response) => response.json())
        .then((data) => {
          const fetchedCities = data.geonames.map((city: any) => ({
            label: city.name,
            value: city.geonameId.toString(),
          }))
          setCities(fetchedCities)
        })
        .catch((error) => {
          console.log("Error fetching cities:", error)
        })
    }
  }, [state])

  return (
    <InfoScreenContainer>
      <InfoText>Step 1: Basic Info</InfoText>
      <FormControl>
        {/* // Names Input Fields */}
        <HStack justifyContent={"center"}>
          <Stack m={1} mt={"10%"} w={"45%"}>
            <NamesInput
              placeholder="First name"
              value={basicInfo.firstName}
              onChangeText={(text: string) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, firstName: text }))
              }
            />
          </Stack>
          <Stack m={1} mt={"10%"} w={"45%"}>
            <NamesInput
              placeholder="Last name"
              value={basicInfo.lastName}
              onChangeText={(text: string) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, lastName: text }))
              }
            />
          </Stack>
        </HStack>
        {/* // gender selection and dob */}
        <HStack justifyContent={"center"}>
          <Stack m={1} mt={"10%"} w={"45%"}>
            <Gender
              selectedValue={basicInfo.gender}
              accessibilityLabel="Gender"
              placeholder="Gender"
              onValueChange={(text: string) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, gender: text }))
              }
            >
              <Gender.Item label="Male" value="male" />
              <Gender.Item label="Female" value="female" />
              <Gender.Item label="Other" value="other" />
            </Gender>
          </Stack>
          <Stack m={1} mt={"10%"} w={"45%"}>
            <Dob onPress={() => setShowDatePicker(true)}>
              <Text>{dob ? dob.toDateString() : "Date of Birth"}</Text>
            </Dob>
            {showDatePicker && (
              <DateTimePicker
                value={dob || new Date()}
                mode="date"
                display="default"
                maximumDate={new Date()}
                minimumDate={new Date(1950, 0, 1)}
                onChange={handleDOBChange}
              />
            )}
          </Stack>
        </HStack>
        {/* // addresses of customer */}
        <VStack justifyContent={"center"}>
          <Stack m={"auto"} mt={"10%"} w={"92%"}>
            <NamesInput
              variant="underlined"
              placeholder="Residential address"
              value={basicInfo.address}
              onChangeText={(text: string) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, address: text }))
              }
            />
          </Stack>
          <Stack m={"auto"} mt={"10%"} w={"92%"}>
            <NamesInput
              variant="underlined"
              placeholder="Home address"
              value={basicInfo.home}
              onChangeText={(text: string) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, home: text }))
              }
            />
          </Stack>
        </VStack>
        {/* // nationality stack */}
        <HStack top={5} justifyContent={"center"}>
          <Stack mt={"10%"} w={"45%"}>
            <RNPickerSelect
              placeholder={{ label: "Nationality", value: null }}
              items={nationalities}
              onValueChange={(value) => setNationality(value)}
              value={nationality}
            />
          </Stack>
          <Stack mt={"10%"} w={"45%"}>
            <RNPickerSelect
              placeholder={{ label: "State", value: null }}
              items={states}
              onValueChange={(value) => setState(value)}
              value={state}
              disabled={!nationality}
            />
          </Stack>
        </HStack>
        {/* // zip code stack */}
        <HStack mt={"10%"} justifyContent={"center"}>
          <Stack m={1} mt={5} w={"45%"}>
            <RNPickerSelect
              placeholder={{ label: "City", value: null }}
              items={cities}
              onValueChange={(value) => setCity(value)}
              value={city}
              disabled={!state}
            />
          </Stack>
          <Stack m={1} mt={5} w={"45%"}>
            <NamesInput
              placeholder="Zip code"
              value={basicInfo.zipCode}
              onChangeText={(text: any) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, zipCode: text }))
              }
            />
          </Stack>
        </HStack>
        {/* // next step */}
        <HStack mt={"5%"} justifyContent={"center"}>
          <Submit handlePress={props.handleInfoSubmit} submit="Next" />
        </HStack>
      </FormControl>
    </InfoScreenContainer>
  )
}
