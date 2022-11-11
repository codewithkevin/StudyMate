import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import { useAuthentication } from "./../../Hooks/useAuthentication";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../../firebase";

import { Ionicons } from "@expo/vector-icons";

const auth = getAuth();

const UserBio = () => {
  const [names, setNames] = useState([]);
  const [username, setUsername] = useState("");
  const { user } = useAuthentication();

  const user_name = user?.email;

  useEffect(() => {
    getName();
  }, []);

  const getName = () => {
    const accountcollection = collection(db, `${user?.email}`);
    getDocs(accountcollection)
      .then((response) => {
        const info = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setNames(info);
      })
      .catch((error) => console.log(error.message));
  };

  console.log(names);

  return (
    <View className="w-[90%]">
      <View className="mb-3">
        <FlatList
          data={names}
          renderItem={({ item }) => (
            <View className="flex">
              <Text className="text-xl font-medium font-mono">
                {item.data.name}
              </Text>
            </View>
          )}
          numColumns={1}
        />
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
