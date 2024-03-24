import * as React from "react";
import { Text, StyleSheet, View, Pressable, Dimensions, ScrollView } from "react-native";
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
  const { width, height } = Dimensions.get("window");
  //Dummy Data
  const cities = [
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
    <ScrollView showsVerticalScrollIndicator={false}>
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
            <Picker.Item label="Enter City" value="" />
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
        style={[styles.child, {borderRadius: "50%"}]}
        contentFit="cover"
        source={require("../../assets/ellipse-3.png")}
      />
      <View
        style={[styles.findThePerfectCelebrationFParent, styles.findLayout]}
      >
        <Text style={[styles.findThePerfect, styles.findLayout]}>
          Find the perfect celebration for your perfect occasion
        </Text>
        {width >= 360 && width < 415 && <Text style={{color:"orange", fontSize: 16 }}>Hello</Text>}
      </View>
      <HeaderComponent />

      
      <LinearGradient
        style={[styles.frameGroup, styles.groupL, {marginBottom: 50}]}
        locations={[0, 0.81]}
        colors={["#f4e9e3", "rgba(255, 255, 255, 0)"]}
      >
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../../assets/rectangle-66.jpg")}
          price="₹8,900"
          heading="Jio World Garden"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../../assets/rectangle-62.png")}
          price="₹7,000"
          heading="BKC"
          description="Let Eventstry plan your dream wedding for a day filled with joy, food, and love!"
          address="Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../../assets/rectangle-58.png")}
          price="₹10,500"
          heading="Grand Palace"
          description="Celebrate your special day at the luxurious Grand Palace. Let us make your event unforgettable!"
          address="Grand Palace, Juhu Tara Road, Juhu, Mumbai, Maharashtra 400049"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../../assets/rectangle-65.jpg")}
          price="₹7,200"
          heading="Sapphire Gardens"
          description="Experience elegance and charm at the Sapphire Gardens. Perfect for weddings and receptions!"
          address="Sapphire Gardens, Andheri West, Mumbai, Maharashtra 400058"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../../assets/rectangle-66.jpg")}
          price="₹9,800"
          heading="Emerald Meadows"
          description="Host your event amidst the lush greenery and serene ambiance of Emerald Meadows."
          address="Emerald Meadows, Powai, Mumbai, Maharashtra 400076"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../../assets/rectangle-62.png")}
          price="₹11,300"
          heading="Pearl Palace"
          description="Create beautiful memories at the Pearl Palace, where dreams come to life."
          address="Pearl Palace, Worli Sea Face, Mumbai, Maharashtra 400030"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../../assets/rectangle-58.png")}
          price="₹8,600"
          heading="Royal Orchid Hall"
          description="Indulge in luxury and sophistication at the Royal Orchid Hall. Your perfect event awaits!"
          address="Royal Orchid Hall, Lower Parel, Mumbai, Maharashtra 400013"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../../assets/rectangle-62.png")}
          price="₹12,000"
          heading="Majestic Manor"
          description="Experience opulence at its finest at the Majestic Manor. Book now for an unforgettable event!"
          address="Majestic Manor, Malabar Hill, Mumbai, Maharashtra 400006"
        />
      </View>
      <View style={styles.cardContainer}>
        <DisplayCard
          imageSource={require("../../assets/rectangle-65.jpg")}
          price="₹6,900"
          heading="Ivory Tower"
          description="Discover a blend of modern elegance and traditional charm at the Ivory Tower."
          address="Ivory Tower, Colaba, Mumbai, Maharashtra 400005"
        />
      </View>

      </LinearGradient>
      
      <Footer
        uniqueIdentifier={require("../../assets/instagramfsvgrepocom-2-11.png")}
        frameViewTop={width >= 360 && width < 415 ? 4500 : 2058}
      />
      
      </View>
    </View>
    </ScrollView> 
  );
};

export default Home;
