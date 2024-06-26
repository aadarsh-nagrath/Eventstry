import * as React from "react";
import { Image } from "expo-image";
import {Modal,StyleSheet ,View, Text, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/Footer";
import TermsAndConditions from "../components/TermsAndConditions";
import styles from "./ExplorePageStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontFamily, Color, Padding, FontSize, Border } from "../../GlobalStyles";
import Menu from "./Menu";
import { useState } from "react";
import FlotingBookNow from "../components/FlotingBookNow";


const ExplorePage = () => {
  const { width, height } = Dimensions.get("window");
    const navigation = useNavigation(); 
    const [modalVisible, setModalVisible] = useState(false);
    const route = useRoute<{ params: { imageSource: string, price: number, heading: string, description: string, address: string } } & { key: string, name: string }>();
    const { imageSource, price, heading, description, address } = route.params;

    const handleSeeMenuClick = () => {
        navigation.navigate('SeeMenu', {
            imageSource,
            price,
            heading,
            description,
            address
        });
    };

    const openModal = () => {
        setModalVisible(true);
      };
    
      // Function to close the modal
      const closeModal = () => {
        setModalVisible(false);
      };

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <View style={styles2.alignfix}>
                <View style={styles.mainContent}>
                <HeaderComponent />
                <View style={styles.backParent}>
                <Text onPress={() => navigation.navigate("Home")} style={[styles.back, styles.backTypo]}>{width >= 360 && width < 415 ? <Image style={{height:25, width:25}} source={require("../../assets/back-arrow.png")} /> : "Back" }</Text>
                <Image
                    style={[styles.groupItem, styles.groupItemPosition]}
                    contentFit="cover"
                    source={imageSource}
                />
                <View style={[styles.groupInner, styles.frameGroupPosition]} />
                
                <View style={[styles.wrapperPosition]}>
                    <Text style={[styles.about, styles.backTypo1]}>About</Text>
                </View>
                <Text style={[styles.welcomeToEventstry, styles.jioWorldGardenTypo]}>
                    Welcome to Eventstry, where your dream wedding becomes a stunning
                    reality! Our expert wedding planners craft unforgettable experiences
                    tailored to your unique style and vision. Our comprehensive packages
                    are designed to cater to all your wedding requirements, ensuring every
                    detail is perfect. From venue selection to decor, catering to
                    entertainment, we handle it all, so you can relax and enjoy your
                    special day to the fullest. Let us bring your wedding dreams to life!
                </Text>
                <TouchableOpacity onPress={openModal}>
                <View style={styles2.seemenu}>
                        <Text style={styles.seeMenu}>See Menu</Text>
                        <Image
                        style={[styles.divsCardIcon, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../../assets/divscardicon.png")}
                        />
                </View>
                </TouchableOpacity>

                <View style={[styles.frameParent, styles.parentLayout]}>
                    <View
                    style={[styles.component3Parent, styles.component3ParentBorder]}
                    >
                    {/* <View style={[styles.component31, styles.mbfix]}>
                    <TouchableOpacity onPress={openModal}>
                        <Text style={styles.seeMenu}>See Menu</Text>
                        </TouchableOpacity>
                        <Image
                        style={[styles.divsCardIcon, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../../assets/divscardicon.png")}
                        />
                    </View> */}
                    <TouchableOpacity style={styles.mbfix} onPress={handleSeeMenuClick}>
                    <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
                        <View style={[styles.rectangleView, styles.rectanglePosition]} />
                        <Text style={styles.bookNow}>Book now</Text>
                    </View>
                    </TouchableOpacity>
                    </View>
                    <View style={[styles.venue1Wrapper, styles.parentPosition]}>
                    <Text style={[styles.venue1, styles.textTypo]}>{heading}</Text>
                    </View>
                    <View style={[styles.parent, styles.parentPosition]}>
                    <Text style={[styles.text, styles.textTypo]}>{price}</Text>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require("../../assets/group-240.png")}
                    />
                    </View>
                    <View
                    style={[styles.thingsToKeepInMindParent, styles.parentP]}
                    >
                    <Text style={[styles.thingsToKeep, styles.about, styles.things]}>
                        Things to Keep in mind
                    </Text>
                    <Text
                        style={[styles.cancellationPolicyAnd, styles.backTypo]}
                    >{`Cancellation policy and payment terms
    - Easy access and parking
    - Event insurance is included
    - Cancellation policy and payment terms
    - Easy access and parking
    - Event insurance is included
    - Cancellation policy and payment terms
    - Easy access and parking`}</Text>
                    </View>
                </View>
                
                

                <View style={styles.groupContainer}>
                    <View style={[styles.frameGroup, styles.frameGroupPosition]}>
                    <View style={[styles.frameView, styles.frameGroupPosition]} />
                    <View style={[styles.venueWrapper, styles2.wrapperPosition]}>
                        <Text style={[styles.about, styles.backTypo1]}>Venue</Text>
                    </View>
                    </View>
                    <Text
                    style={[styles.jioWorldGarden, styles2.jioWorldGardenTypo]}
                    >{address}</Text>
                    <View
                    style={[styles.getDirectionsWrapper, styles.component3ParentBorder]}
                    >
                    <Text style={[styles.getDirections, styles.aboutTypo]}>
                        GET DIRECTIONS
                    </Text>
                    </View>
                    <TermsAndConditions/>
                </View>
                </View>
            </View>

            {!(width >= 360 && width < 415) && (
              <Footer
                frameViewTop={1600}
              />
            )}    
            {(width >= 360 && width < 415) && (
              <View >
                <FlotingBookNow 
                  imageSource={imageSource}
                  price={price}
                  heading={heading}
                  description={description}
                  address={address}
                  frameViewTop={1600}
                />
              </View>
            )}

            </View>

                  {/* Modal Component */}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles2.modalContainer}>
                <ScrollView contentContainerStyle={styles2.scrollViewContent}>
                <View style={styles2.modalContent}>
                    <Menu closeModal={closeModal} />
                </View>
                </ScrollView>
                </View>
            </Modal>
      </View>
      </ScrollView>
    );
  };
  

export default ExplorePage;

const baseStyles2 = StyleSheet.create({
  alignfix: {
    width: "100%",
    display: "flex",
    height: "100%",
  },
  below: {
    width: "100%",
    marginBottom: "-20%"
  },
  modalContainer: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 50,
    paddingRight: 700,
    paddingBottom: 2900,
    borderRadius: 10,
    alignItems: "center",
    flex: 1, // Ensure it takes all available space
  },
  closeButton: {
    marginTop: 20,
    color: "blue",
    fontWeight: "bold",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  seemenu: {
    top: 285,
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  jioWorldGardenTypo: {
    lineHeight: 24,
    width: 750,
    color: Color.grayGray91F2730,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_base,
    left: 0,
    position: "absolute",
  },
  wrapperPosition:{
      paddingBottom: Padding.p_base,
      paddingTop: Padding.p_9xl,
      flexDirection: "row",
      borderBottomWidth: 1,
      alignItems: "center",
      width: 750,
      borderColor: Color.colorGainsboro,
      borderStyle: "solid",
      left: 0,
      position: "absolute",
  },
});


const { width, height } = Dimensions.get("window");
let styles2 = { ...baseStyles2 };

if (width >=360 && width < 415 ) {
  styles2 = StyleSheet.create({
    ...baseStyles2,
    seemenu: {
      top: 510,
    },
    wrapperPosition:{
      top: 30,
      width: 330,
    },
    jioWorldGardenTypo:{
      position: "absolute",
      width: 300,
      top: 85,
    },
  });
}