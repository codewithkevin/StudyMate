import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { useAuthentication } from "./../../Hooks/useAuthentication";
import { getAuth } from "firebase/auth";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./../../firebase";

const auth = getAuth();

const UserInterest = () => {
  const [interest, setInterest] = useState([]);
  const { user } = useAuthentication();

  const user_name = user?.email;

  useEffect(() => {
    getName();
  }, [user_name]);

  const getName = async () => {
    const docRef = doc(db, "Acoount", user_name);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const doc = docSnap.data();
      setInterest(doc);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  console.log(interest);

  return (
    <View className="mt-5 mb-10">
      <Text className="text-xl">Interests</Text>
      <View className="flex flex-row mt-3 space-x-5">
        <View className="rounded-lg border p-3">
          <TouchableOpacity className="items-center">
            <Text className="font-normal ">{interest.interest[0]}</Text>
          </TouchableOpacity>
        </View>
        <View className="rounded-lg border p-3">
          <TouchableOpacity className="items-center">
            <Text className="font-normal ">{interest.interest[1]}</Text>
          </TouchableOpacity>
        </View>
        <View className="rounded-lg border p-3">
          <TouchableOpacity className="items-center">
            <Text className="font-normal ">{interest.interest[2]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserInterest;
