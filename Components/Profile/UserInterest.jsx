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
      
    </View>
  );
};

export default UserInterest;
