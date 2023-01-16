import { Text, View } from "../components/Themed";
import { StyleSheet, Image } from "react-native";

import { RootStackScreenProps } from "../types";


export default function LandingPage({ navigation }: RootStackScreenProps<"LandingPage">) {
    return (
        <View style={styles.container}>
            {/* <Image source={require("../assets/images/akiba-town-logo.png")} /> */}
            <Text style={styles.title}>Le quartier japonais directement sur ton téléphone !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        width: "70%",
    }
})