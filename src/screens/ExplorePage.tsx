import * as React from "react";
import { Image } from "expo-image";
import {Modal,StyleSheet ,View, Text, TouchableOpacity, ScrollView } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/Footer";
import TermsAndConditions from "../components/TermsAndConditions";
import styles from "./ExplorePageStyles";
import { useNavigation } from "@react-navigation/native";
import Menu from "./Menu";
import { useState } from "react";

const ExplorePage = ({ route }) => {
    const navigation = useNavigation(); 
    const [modalVisible, setModalVisible] = useState(false);
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
      <View style={styles.view}>
        <View style={styles2.alignfix}>
                <View style={styles.mainContent}>
                <HeaderComponent />
                <View style={styles.backParent}>
                <Text onPress={() => navigation.navigate("Home")} style={[styles.back, styles.backTypo]}>Back</Text>
                <Image
                    style={[styles.groupItem, styles.groupItemPosition]}
                    contentFit="cover"
                    source={imageSource}
                />
                <View style={[styles.groupInner, styles.frameGroupPosition]} />
                <View style={[styles.aboutWrapper, styles.wrapperPosition]}>
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
                    <View style={styles.component31}>
                    <TouchableOpacity onPress={openModal}>
                        <Text style={styles.seeMenu}>See Menu</Text>
                        </TouchableOpacity>
                        <Image
                        style={[styles.divsCardIcon, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../../assets/divscardicon.png")}
                        />
                    </View>
                    <TouchableOpacity onPress={handleSeeMenuClick}>
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
                    style={[styles.thingsToKeepInMindParent, styles.parentPosition]}
                    >
                    <Text style={[styles.thingsToKeep, styles.aboutTypo]}>
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
                    <View style={[styles.venueWrapper, styles.wrapperPosition]}>
                        <Text style={[styles.about, styles.backTypo1]}>Venue</Text>
                    </View>
                    </View>
                    <Text
                    style={[styles.jioWorldGarden, styles.jioWorldGardenTypo]}
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
                <Footer
                frameViewTop={1600}
                />
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
    );
  };
  

export default ExplorePage;

const styles2 = StyleSheet.create({
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
});
