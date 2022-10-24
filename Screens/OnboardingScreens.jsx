import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreens = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("singup")}
      onDone={() => navigation.navigate("singup")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              source={require("../Assest/casual-life-3d-planet-earth-2.png")}
            />
          ),
          title: "Connect to the World",
          subtitle: "A New Way To Connect With The World",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              source={require("../Assest/business-3d-young-people-standing-and-talking.png")}
            />
          ),
          title: "Share Your Ideas",
          subtitle: "Share Your Thoughts With Similar Kind of People",
        },
        {
          backgroundColor: "#e9bcbe",
          image: (
            <Image
              source={require("../Assest/3d-business-man-and-woman-working-at-the-table.png")}
            />
          ),
          title: "Find A Study Buddy",
          subtitle: "Let The Spot Light Capture You",
        },
      ]}
    />
  );
};

export default OnboardingScreens;
