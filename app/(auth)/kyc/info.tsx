import React, { useState, useEffect } from "react"
import { Ionicons } from "@expo/vector-icons"
import DatePicker from "react-native-datepicker"
import DateTimePicker from "@react-native-community/datetimepicker"
import SelectDropdown from "react-native-select-dropdown"
import RNPickerSelect from "react-native-picker-select"
import {
  KeyboardAvoidingView,
  View,
  Button,
  Text,
  Input,
  Container,
  Stack,
  FormControl,
  HStack,
  Box,
  VStack,
  Radio,
  Center,
  Select,
} from "native-base"
import styled from "styled-components/native"
import Submit from "../../components/Submit"

// Define the styled components
const InfoScreenContainer = styled(Box)`
  flex: 1;
  width: 100%;
  top: 5px;
  padding: 10px;
`

const InfoText = styled(Text)`
  font-size: 25px;
  font-weight: 600;
  line-height: 25px;
  top: 30px;
  margin-bottom: 40px;
`
const NamesInput = styled(Input)`
  width: 95px;
  left: 5px;
`
const Dob = styled(Button)`
  background: #fff;
  border: 0.5px solid #228b22;
`
const Gender = styled(Select)``
interface InfoProps {
  handleInfoSubmit?: () => void
}

export default function InfoScreen(props: InfoProps) {
  const [step, setStep] = useState(1)
  const [dob, setDOB] = useState<Date | undefined>(undefined)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedGender, setSelectedGender] = useState("")
  const [nationality, setNationality] = useState("")
  const [nationalities, setNationalities] = useState([])
  const [state, setState] = useState("")
  const [states, setStates] = useState([])
  const [city, setCity] = useState("")
  const [cities, setCities] = useState([])
  const [zipCode, setZipCode] = useState("")

  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    zipCode: "",
  })

  const handleDOBChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dob
    setShowDatePicker(false)
    setDOB(currentDate)
  }

  const handleGenderChange = (value: string) => {
    setSelectedGender(value)
  }

  const handleNationality = (selectedOption: any) => {
    setNationality(selectedOption)
    console.log("Selected nationality:", selectedOption)
    // Perform any necessary actions based on the selected nationality
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
        console.log("Countries from Geonames API:", nationalities)
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
        <HStack justifyContent={"center"}>
          <Stack m={1} mt={5} w={"45%"}>
            <NamesInput
              placeholder="First name"
              value={basicInfo.firstName}
              onChangeText={(text: string) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, firstName: text }))
              }
            />
          </Stack>
          <Stack m={1} mt={5} w={"45%"}>
            <NamesInput
              placeholder="Last name"
              value={basicInfo.lastName}
              onChangeText={(text: string) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, lastName: text }))
              }
            />
          </Stack>
        </HStack>
        <HStack justifyContent={"center"}>
          <Stack m={1} mt={5} w={"45%"}>
            <Gender
              selectedValue={selectedGender}
              accessibilityLabel="Gender"
              placeholder="Gender"
              onValueChange={handleGenderChange}
            >
              <Gender.Item label="Male" value="male" />
              <Gender.Item label="Female" value="female" />
              <Gender.Item label="Other" value="other" />
            </Gender>
          </Stack>
          <Stack m={1} mt={5} w={"45%"}>
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
        <VStack justifyContent={"center"}>
          <Stack m={"auto"} mt={5} w={"92%"}>
            <NamesInput
              variant="underlined"
              placeholder="Residential address"
              value={basicInfo.lastName}
              onChangeText={(text: string) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, lastName: text }))
              }
            />
          </Stack>
          <Stack m={"auto"} mt={5} w={"92%"}>
            <NamesInput
              variant="underlined"
              placeholder="Residential address"
              value={basicInfo.lastName}
              onChangeText={(text: string) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, lastName: text }))
              }
            />
          </Stack>
        </VStack>
        <HStack top={5} justifyContent={"center"}>
          <Stack m={1} mt={5} w={"45%"}>
            <RNPickerSelect
              placeholder={{ label: "Nationality", value: null }}
              items={nationalities}
              onValueChange={(selectedOption) =>
                handleNationality(selectedOption)
              }
              value={nationality}
            />
          </Stack>
          <Stack m={1} mt={5} w={"45%"}>
            <RNPickerSelect
              placeholder={{ label: "State", value: null }}
              items={states}
              onValueChange={(value) => setState(value)}
              value={state}
              disabled={!nationality}
            />
          </Stack>
        </HStack>
        <HStack top={5} justifyContent={"center"}>
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
              value={zipCode}
              onChangeText={(text: string) =>
                setBasicInfo((prevInfo) => ({ ...prevInfo, zipCode: text }))
              }
            />
          </Stack>
        </HStack>
        <HStack top={50} justifyContent={"center"}>
          <Stack w={"95%"}>
            <Submit handlePress={props.handleInfoSubmit} submit="Next" />
          </Stack>
        </HStack>
      </FormControl>
    </InfoScreenContainer>
  )
}
