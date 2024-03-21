import * as React from "react";
import { Image } from "expo-image";
import {Modal, ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IntimateDecorationContainer from "../components/IntimateDecorationC";
import ProductCardContainer from "../components/ProductCardContainer";
import styles from "./SeeMenuStyles";

import HeaderComponent from "../components/HeaderComponent";
import { Input } from "@ui-kitten/components";
import StarterComponent from "../components/StarterCompo";
import { useState } from "react";
import EntertainmentCompo from "../components/EntertainmentCompo";
import { useRoute } from "@react-navigation/native";
import Menu from "./Menu";


const RectangleRadioButton = ({ selected, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={[styles.rectangleView, styles.frameChildLayout, styles2.radioButton]}>
      {selected && <View style={styles2.radioButtonInner} />}
    </TouchableOpacity>
  );
};


const SeeMenu = () => {
  const route = useRoute<{ params: { imageSource: string, price: number, heading: string, description: string, address: string } } & { key: string, name: string }>();
  const { imageSource, price, heading, description, address } = route.params;
  const [isChecked, setIsChecked] = useState(false);
  const [counter, setCounter] = React.useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleInceDecr = (action) => {
    if (action === 'increment' && counter < 25) {
      setCounter(counter + 1);
    } else if (action === 'decrement' && counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handlePress = () => {
    setIsChecked(!isChecked);
  };



  // Function to open the modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    <View style={styles.view}>
      <View style={[styles.res, {zIndex: 2}]}>
        <HeaderComponent/>
      </View>
      {/* <View style={styles.fcompo} />; */}
      <View style={[styles.inner]}>
        <View style={[styles.vectorParent]}>
          <Image
            style={[styles.groupInner, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../../assets/vector-3971.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../../assets/vector-3971.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../../assets/vector-3971.png")}
          />
          <View style={[styles.ellipseParent, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../../assets/ellipse-1696.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>1</Text>
          </View>
          <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../../assets/ellipse-1697.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>2</Text>
          </View>
          <View style={[styles.ellipseContainer, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../../assets/ellipse-1697.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>3</Text>
          </View>
          <View style={[styles.groupView, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../../assets/ellipse-1697.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>4</Text>
          </View>
          <Image
            style={[styles.groupChild5, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../../assets/vector-3971.png")}
          />
          <View style={[styles.ellipseParent1, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../../assets/ellipse-1697.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>5</Text>
          </View>
          <Image
            style={[styles.groupChild7, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../../assets/vector-3971.png")}
          />
          <View style={[styles.ellipseParent2, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../../assets/ellipse-1697.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>6</Text>
          </View>
        </View>
      </View>

      {/* Select Event Component */}

      <View
        style={[
          styles.pleaseSelectTheEventDateParent,
          styles.addParentShadowBox,
          {zIndex: 3}
        ]}
      >
        <Text
          style={[styles.pleaseSelectTheContainer, styles.addContainerTypo]}
        >
          <Text style={styles.pleaseSelectThe}>
            Please select the event date
          </Text>
          <Text style={styles.text6}>*</Text>
        </Text>
        <View style={[styles.groupContainer, styles.frameViewPosition]}>
          <View style={styles.ddmmyyyyWrapper}>
            <Input
              placeholder="DD/MM/YYYY"
              style={[styles.inputbox, {flex:10}]} // adjust the style as needed
            />
          </View>
          <Image
            style={styles.iconOutlinedCalendar}
            contentFit="cover"
            source={require("../../assets/icon--outlined--calendar.png")}
          />
        </View>
        <Text style={[styles.pleaseSelectAContainer, styles.addContainerTypo]}>
          <Text style={styles.pleaseSelectThe}>Please select a event time</Text>
          <Text style={styles.text6}>*</Text>
        </Text>
        <View style={[styles.frameView, styles.frameViewPosition]}>
          <View style={styles.ddmmyyyyWrapper}>
            <Input
              placeholder="DD/MM/YYYY"
              style={[styles.inputbox, {flex:10}]} // adjust the style as needed
            />
          </View>
          <Image
            style={styles.iconOutlinedCalendar}
            contentFit="cover"
            source={require("../../assets/circleclockstreamlinecore.png")}
          />
        </View>
        <Text style={[styles.pleaseEnterTheContainer, styles.addContainerTypo]}>
          <Text style={styles.pleaseSelectThe}>
            Please enter the number of people
          </Text>
          <Text style={styles.text6}>*</Text>
        </Text>
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text9, styles.pleaseContainerTypo]}>{counter}</Text>
          </View>
          
          <TouchableOpacity style={styles.ellipseParent3} onPress={() => handleInceDecr('increment')}>
            <Image
              style={[styles.groupChild9, styles.groupIconLayout, {height: 50, width: 30, marginLeft: -5}]}
              contentFit="cover"
              source={require("../../assets/plus.png")}
            />
          </TouchableOpacity>
        
          <TouchableOpacity style={[styles2.ellipseParent3]} onPress={() => handleInceDecr('decrement')}>
            <Image
              style={[styles2.groupIcon, styles.groupIconLayout, {top: "7"}]}
              contentFit="cover"
              source={require("../../assets/group-1261153004.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.informationCircleStreamlineParent,
            styles.parentPosition,
          ]}
        >
          <Image
            style={styles.informationCircleStreamlineIcon}
            contentFit="cover"
            source={require("../../assets/informationcirclestreamlinemicro.png")}
          />
          <Text style={[styles.maximum25People, styles.ddmmyyyyTypo]}>
            Maximum 25 people are allowed in this event
          </Text>
        </View>
      </View>



          {/* Package Component */}

      <View
        style={[
          styles.pleaseSelectOneOfThePackaParent,
          styles.addParentShadowBox,
        ]}
      >
        <Text style={[styles.pleaseSelectOne, styles.addContainerTypo]}>
          Please select one of the packages
        </Text>
        <View style={styles.frameGroup}>
          <StarterComponent/>
          <StarterComponent/>
          <StarterComponent/>
          <StarterComponent/>
        </View>
        
        <View style={[styles.component3, styles.component3Position]}>
          <TouchableOpacity onPress={openModal}>
          <Text style={[styles.seeMenu, styles.addContainerTypo]}>
            See Menu
          </Text>
          </TouchableOpacity>
          <Image
            style={[styles.divsCardIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../../assets/divscardicon2.png")}
          />
        </View>
      </View>


        {/* //Intimate Decoration Component */}

      <View
        style={[
          styles.whatKindOfDecorationWouldParent,
          styles.addParentShadowBox,
        ]}
      >
        <Text style={[styles.whatKindOf, styles.addContainerTypo]}>
          What kind of decoration would you like?
        </Text>
        <IntimateDecorationContainer
          decorationTypeText={`Intimate
`}
          decorationPriceText="Our intimate decorations start at ₹6,000."
          decorationCostText="₹7,000/-"
        />
        <IntimateDecorationContainer
          decorationTypeText={`Just Perfect
`}
          decorationPriceText="Our medium decorations start at ₹15,000."
          decorationCostText="₹15,000/-"
          propTop={325}
        />
        <IntimateDecorationContainer
          decorationTypeText={`Let’s Go All Out!
`}
          decorationPriceText="Our premium decorations start at ₹25,000."
          decorationCostText="₹25,000/-"
          propTop={577}
        />
      </View>

      <View style={[styles.rectangleParent2, styles.groupChild13Border]}>
        <Image
          style={[styles.frameChild, styles.frameParentLayout]}
          contentFit="cover"
          source={imageSource}
        />
        <View style={[styles.frameContainer, styles.frameParentLayout]}>
          <View style={[styles.venue1Wrapper, styles.frameParentLayout]}>
            <Text style={[styles.venue1, styles.pleaseContainerTypo]}>
              {heading}
            </Text>
          </View>
          <View style={[styles.container, styles.groupParentFlexBox]}>
            <Text style={[styles.text15, styles.textTypo2]}>{price}</Text>
          </View>
          <View style={[styles.aboutParent, styles.frameParentLayout]}>
            <Text style={[styles.about, styles.addContainerTypo]}>About</Text>
            <Text style={styles.jioWorldGardenTypo}>
              {description}
            </Text>
          </View>
          <View style={[styles.venueParent, styles.frameParentLayout]}>
            <Text style={[styles.about, styles.addContainerTypo]}>Venue</Text>
            <Text style={[styles.jioWorldGarden, styles.jioWorldGardenTypo]}>
              {address}
            </Text>
          </View>
        </View>
      </View>

        {/* Add a CAKE Component*/}
      
      <View style={[styles.addACakeParent, styles.addParentShadowBox]}>
        <Text style={[styles.addACake, styles.addContainerTypo]}>
          Add a Cake
        </Text>
        <View style={{flex:1, top: 100, marginTop: -40, paddingTop:0}}>
        <ScrollView>
        <View style={[styles.frameParent1, styles.component3Position]}>
          <ProductCardContainer />
          <ProductCardContainer propMarginTop={16} />
          <ProductCardContainer propMarginTop={16} />
          <ProductCardContainer propMarginTop={16} />
          <ProductCardContainer propMarginTop={16} />
          <ProductCardContainer propMarginTop={16} />
          
        </View>
        </ScrollView>
        </View>
      </View>

        {/* Add Photographer Component */}

      <View style={[styles.addAPhotographerParent, styles.addParentShadowBox]}>
        <Text style={[styles.addAPhotographer, styles.addContainerTypo]}>
          Add a Photographer
        </Text>
        <View style={[styles.frameParent1, styles.component3Position]}>
          <View style={[styles.groupParent6, styles.groupLayout1]}>
            <View style={styles.yesWrapper}>
              <Text style={[styles.yes, styles.containerPosition]}>Yes</Text>
            </View>
            <RectangleRadioButton selected={isChecked} onSelect={handlePress} />
          </View>
          <View style={[styles.groupParent7, styles.groupLayout]}>
            <View style={styles.noWrapper}>
              <Text style={[styles.yes, styles.containerPosition]}>No</Text>
            </View>
            <RectangleRadioButton selected={!isChecked} onSelect={handlePress} />
          </View>
        </View>
      </View>

        {/* Add Entertainment Component */}

      <View
        style={[
          styles.whatKindOfEntertainmentWouParent,
          styles.addParentShadowBox,
        ]}
      >
        <Text style={[styles.whatKindOf1, styles.addContainerTypo]}>
          What kind of Entertainment would you like?
        </Text>
        <View style={{flex:1, top: 100, marginTop: -40, paddingTop:0, overflow: "scroll"}}>
        {/* <ScrollView> */}
        <View style={[styles.frameParent1, styles.component3Position]}>
          <EntertainmentCompo itemName="Live Music" price="₹8,900/-" />
          <br/>
          <EntertainmentCompo itemName="Magician" price="₹8,900/-" />
          <br/>
          <EntertainmentCompo itemName="Caricature Artist" price="₹8,900/-" />
          <br/>
          <EntertainmentCompo itemName="Singer" price="₹5,900/-" />
          <br/>
          <EntertainmentCompo itemName="Traditional Dancers" price="₹10,500/-" />
          <br/>
          <EntertainmentCompo itemName="Singer" price="₹5,900/-" />
          <br/>
          <EntertainmentCompo itemName="Traditional Dancers" price="₹10,500/-" />
        </View>
        {/* </ScrollView> */}
        </View>
      </View>

      <View style={[styles.groupLayout2,{left:370, width: 350, position: "absolute", top: 3200, bottom: 30}]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={[styles.proceedToPayment, styles.textTypo2]}>
          Proceed to Payment
        </Text>
      </View>

      <View style={{height:250}} />

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

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButton: {
    borderWidth: 2,
    borderColor: "#01235b",
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    top: "20%",
  },
  selectedRadioButton: {
    backgroundColor: "#01235b",
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: "#01235b",
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
  ellipseParent3: {
    top: 7,
    height: 25,
    width: 24,
    right: 0,
    position: "absolute",
  },
  groupIcon: {
    top: 8,
    left: 0,
    position: "absolute",
  },
});


export default SeeMenu;