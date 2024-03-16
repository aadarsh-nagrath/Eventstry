import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import DisplayCard from "../components/DisplayCard";
import Footer from "../components/Footer";
import styles from "./HomeStyles";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

const Home = () => {
  //Dummy Data
  const cities = [
    "Enter city",
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];

  const categories = ['Category 1', 'Category 2', 'Category 3']; // Example categories
  const sortByOptions = ['Price Low to High', 'Price High to Low']; // Example sorting options

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSortBy, setSelectedSortBy] = useState('');

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleCategoryChange = (itemValue) => {
    setSelectedCategory(itemValue);
    // Handle category change logic here
  };

  const handleSortByChange = (itemValue) => {
    setSelectedSortBy(itemValue);
    // Handle sorting change logic here
  };



  return (
    <View style={styles.container}>
      <View style={[styles.view, styles.groupLayout]}>
        <View style={styles.frameParent}>
          <Picker
            selectedValue={selectedCity}
            style={[styles.frameWrapper, styles.frameBorder]}
            itemStyle={styles.valueFont}
            onValueChange={(itemValue, itemIndex) =>
              handleCityChange(itemValue)
            }>
            {cities.map((city, index) => (
              <Picker.Item label={city} value={city} key={index} />
            ))}
          </Picker>

          <Picker
            selectedValue={selectedCategory}
            style={[styles.frameWrapper, styles.frameBorder,  { marginLeft: 20 }]}
            itemStyle={styles.valueFont}
            onValueChange={handleCategoryChange}>
            <Picker.Item label="Select Category" value="" />
            {categories.map((category, index) => (
              <Picker.Item label={category} value={category} key={index} />
            ))}
          </Picker>

          <Picker
            selectedValue={selectedSortBy}
            style={[styles.frameWrapper, styles.frameBorder, { marginLeft: 20 }]}
            itemStyle={styles.valueFont}
            onValueChange={handleSortByChange}>
            <Picker.Item label="Sort By Price" value="" />
            {sortByOptions.map((option, index) => (
              <Picker.Item label={option} value={option} key={index} />
            ))}
          </Picker>
      </View>

      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View
        style={[styles.findThePerfectCelebrationFParent, styles.findLayout]}
      >
        <Text style={[styles.findThePerfect, styles.findLayout]}>
          Find the perfect celebration for your perfect occasion
        </Text>
        {/* <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/arrow-11.png")}
        /> */}
      </View>
      <HeaderComponent />

      
      <LinearGradient
        style={[styles.frameGroup, styles.groupLayout]}
        locations={[0, 0.81]}
        colors={["#f4e9e3", "rgba(255, 255, 255, 0)"]}
      >
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../assets/rectangle-58.png")}
          price="₹8,900"
          heading="Venue 1"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../assets/rectangle-62.png")}
          price="₹7,000"
          heading="Venue 2"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../assets/rectangle-58.png")}
          price="₹8,900"
          heading="Venue 3"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../assets/rectangle-58.png")}
          price="₹8,900"
          heading="Venue 4"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../assets/rectangle-58.png")}
          price="₹8,900"
          heading="Venue 4"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../assets/rectangle-58.png")}
          price="₹8,900"
          heading="Venue 4"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../assets/rectangle-58.png")}
          price="₹8,900"
          heading="Venue 4"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../assets/rectangle-58.png")}
          price="₹8,900"
          heading="Venue 4"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../assets/rectangle-58.png")}
          price="₹8,900"
          heading="Venue 4"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      </LinearGradient>
      <Footer
        uniqueIdentifier={require("../assets/instagramfsvgrepocom-2-11.png")}
        frameViewTop={2018}
      />
    </View>
    </View>
  );
};

export default Home;
