import { View, Text } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const moviecollection = collection(db, "fav");
    getDocs(moviecollection)
      .then((response) => {
        const movs = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setMovies(movs);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Text className="text-red-600">
          Open up App.js to start working on your app!
        </Text>
        {movies.map((movie) => (
          <View key={movie.id}>
            <Text>{movie.data.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
