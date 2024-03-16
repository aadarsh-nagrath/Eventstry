import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet ,View, Text } from "react-native";
import LoginContainer from "../components/LoginContainer";
import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/Footer";
import TermsAndConditions from "../components/TermsAndConditions";
import styles from "./ExplorePageStyles";

const ExplorePage = () => {
    return (
      <View style={styles.view}>
        <View style={styles2.alignfix}>
                <HeaderComponent />
                <View style={styles.mainContent}>
                <View style={styles.groupParent}>
                <View
                    style={[
                    styles.logo39ab30e9cd984a48cdd3b9dbbWrapper,
                    styles.logo39ab30e9cd984a48cdd3b9dbbLayout,
                    ]}
                >
                    <Image
                    style={[
                        styles.logo39ab30e9cd984a48cdd3b9dbbIcon,
                        styles.logo39ab30e9cd984a48cdd3b9dbbLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/logo39ab30e9cd984a48cdd3b9dbbbc80549-2.png")}
                    />
                </View>
                <View style={styles.rectangleParent}>
                    <View style={styles.groupChild} />
                    <Text style={[styles.search, styles.aboutTypo]}>Search</Text>
                    <Image
                    style={[styles.iconOutlinedSearch, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/icon--outlined--search.png")}
                    />
                </View>
                </View>
                <LoginContainer />
                <View style={styles.backParent}>
                <Text style={[styles.back, styles.backTypo]}>Back</Text>
                <Image
                    style={[styles.groupItem, styles.groupItemPosition]}
                    contentFit="cover"
                    source={require("../assets/frame-12.png")}
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
                <View style={styles.component3}>
                    <Text style={styles.seeMenu}>See Menu</Text>
                    <Image
                    style={[styles.divsCardIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/divscardicon.png")}
                    />
                </View>
                <View style={[styles.frameParent, styles.parentLayout]}>
                    <View
                    style={[styles.component3Parent, styles.component3ParentBorder]}
                    >
                    <View style={styles.component31}>
                        <Text style={styles.seeMenu}>See Menu</Text>
                        <Image
                        style={[styles.divsCardIcon, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/divscardicon.png")}
                        />
                    </View>
                    <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
                        <View style={[styles.rectangleView, styles.rectanglePosition]} />
                        <Text style={styles.bookNow}>Book now</Text>
                    </View>
                    </View>
                    <View style={[styles.venue1Wrapper, styles.parentPosition]}>
                    <Text style={[styles.venue1, styles.textTypo]}>Venue 1</Text>
                    </View>
                    <View style={[styles.parent, styles.parentPosition]}>
                    <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require("../assets/group-240.png")}
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
        Easy access and parking
        Event insurance is included
        Cancellation policy and payment terms
        Easy access and parking
        Event insurance is included
        Cancellation policy and payment terms
        Easy access and parking`}</Text>
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
                    >{`Jio World Garden, BKC 
Pt No: RG1A, G Block, Bandra Kurla Complex, Bandra East, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051`}</Text>
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
            <View style={styles2.below}>
                <Footer/>
            </View>
        </View>
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
  }
});
