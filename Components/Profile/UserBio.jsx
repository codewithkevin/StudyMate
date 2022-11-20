import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import { useAuthentication } from "./../../Hooks/useAuthentication";
import { getAuth } from "firebase/auth";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./../../firebase";

import { Ionicons } from "@expo/vector-icons";

const auth = getAuth();

const UserBio = () => {
  const [names, setNames] = useState([]);
  const [username, setUsername] = useState("");
  const { user } = useAuthentication();

  const user_name = user?.email;
  console.log(user_name);

  useEffect(() => {
    getName();
  }, [user_name]);

  const getName = async () => {
    const docRef = doc(db, "Acoount", user_name);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const doc = docSnap.data();
      setNames(doc);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  console.log(names);

  return (
    <View className="w-[91%]">
      <View className="mb-3">
        <Text className="text-xl font-medium font-mono">{names.name}</Text>
      </View>
      <View className="mb-3">
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          non id, voluptatem accusantium ipsa saepe sed nihil explicabo eaque
          mollitia praesentium illum, et beatae perferendis voluptatum sint?
          Ipsam, similique beatae!
        </Text>
      </View>
      <View className="mt-2 flex flex-row">
        <Ionicons name="md-location" size={24} color="blue" />
        <Text className="mt-1 text-md">Location</Text>
      </View>
    </View>
  );
};

export default UserBio;
