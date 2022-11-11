import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { useAuthentication } from "./../../Hooks/useAuthentication";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../../firebase";

const auth = getAuth();

const UserInterest = () => {
  const [interest, setInterest] = useState([]);
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
        setInterest(info);
      })
      .catch((error) => console.log(error.message));
  };

  console.log(interest);

  return (
    <View className="mt-5 mb-10">
      <Text className="text-xl">Interests</Text>
      <FlatList
        data={interest}
        renderItem={({ item }) => (
          <View className="flex flex-row mt-3 space-x-5">
            <View className="rounded-lg border p-3">
              <TouchableOpacity className="items-center">
                <Text className="font-normal ">{item.data.interest[0]}</Text>
              </TouchableOpacity>
            </View>
            <View className="rounded-lg border p-3">
              <TouchableOpacity className="items-center">
                <Text className="font-normal ">{item.data.interest[1]}</Text>
              </TouchableOpacity>
            </View>
            <View className="rounded-lg border p-3">
              <TouchableOpacity className="items-center">
                <Text className="font-normal ">{item.data.interest[2]}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        numColumns={1}
      />
    </View>
  );
};

export default UserInterest;
