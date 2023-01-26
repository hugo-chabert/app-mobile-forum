import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';
import { ImageBackground } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const ForumScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bandHeader}>
                <ImageBackground
                    source={require('../assets/images/poster.png')}
                    style={styles.bg}
                >
                </ImageBackground>
                <View style={{
                    position: 'absolute',
                    width: '100%',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{ color: '#ffffff', textAlign: 'left', fontSize: 25 }}>Tous Les Sujets</Text>
            </View>
            </View>
                <ScrollView>
                    <View style={styles.tallFiltersContainer}>
                        <Text style={{marginLeft: 10, marginBottom: 10,}}>Trier par :</Text>
                        <View style={styles.filtersContainer}>
                            <TouchableOpacity style={styles.filtersButton} onPress={() => alert('Button like pressed')}>
                                <Text>Récent</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filtersButton} onPress={() => alert('Button like pressed')}>
                                <Text>Plus Like</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filtersButton} onPress={() => alert('Button like pressed')}>
                                <Text>Plus Commenté</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.postsContainer}>
                        <Text style={styles.postsTitle}>One Piece Chapitre 1071</Text>
                        <View style={styles.postsItems}>
                            <View style={styles.itemsContainer}>
                                {/* <LinearGradient */}
                                {/* colors={['150.15deg', '#A51717 25.58%', '#AFBC16 149.93%']}> */}
                                        <FontAwesome
                                            name="heart"
                                            size={15}
                                        />
                                {/* </LinearGradient> */}
                                <Text>28/12/2022</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.itemsContainer}>
                                <TouchableOpacity onPress={() => alert('Button comment pressed')}>
                                    <FontAwesome
                                        name="comment"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>155 Réponses</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.likeItem}>
                                <TouchableOpacity onPress={() => alert('Button like pressed')}>
                                    <FontAwesome
                                        name="heart"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>34</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.postsContainer}>
                        <Text style={styles.postsTitle}>One Piece Chapitre 1071</Text>
                        <View style={styles.postsItems}>
                            <View style={styles.itemsContainer}>
                                {/* <LinearGradient */}
                                {/* colors={['150.15deg', '#A51717 25.58%', '#AFBC16 149.93%']}> */}
                                        <FontAwesome
                                            name="heart"
                                            size={15}
                                        />
                                {/* </LinearGradient> */}
                                <Text>28/12/2022</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.itemsContainer}>
                                <TouchableOpacity onPress={() => alert('Button comment pressed')}>
                                    <FontAwesome
                                        name="comment"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>155 Réponses</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.likeItem}>
                                <TouchableOpacity onPress={() => alert('Button like pressed')}>
                                    <FontAwesome
                                        name="heart"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>34</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.postsContainer}>
                        <Text style={styles.postsTitle}>One Piece Chapitre 1071</Text>
                        <View style={styles.postsItems}>
                            <View style={styles.itemsContainer}>
                                {/* <LinearGradient */}
                                {/* colors={['150.15deg', '#A51717 25.58%', '#AFBC16 149.93%']}> */}
                                        <FontAwesome
                                            name="heart"
                                            size={15}
                                        />
                                {/* </LinearGradient> */}
                                <Text>28/12/2022</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.itemsContainer}>
                                <TouchableOpacity onPress={() => alert('Button comment pressed')}>
                                    <FontAwesome
                                        name="comment"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>155 Réponses</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.likeItem}>
                                <TouchableOpacity onPress={() => alert('Button like pressed')}>
                                    <FontAwesome
                                        name="heart"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>34</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.postsContainer}>
                        <Text style={styles.postsTitle}>One Piece Chapitre 1071</Text>
                        <View style={styles.postsItems}>
                            <View style={styles.itemsContainer}>
                                {/* <LinearGradient */}
                                {/* colors={['150.15deg', '#A51717 25.58%', '#AFBC16 149.93%']}> */}
                                        <FontAwesome
                                            name="heart"
                                            size={15}
                                        />
                                {/* </LinearGradient> */}
                                <Text>28/12/2022</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.itemsContainer}>
                                <TouchableOpacity onPress={() => alert('Button comment pressed')}>
                                    <FontAwesome
                                        name="comment"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>155 Réponses</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.likeItem}>
                                <TouchableOpacity onPress={() => alert('Button like pressed')}>
                                    <FontAwesome
                                        name="heart"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>34</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.postsContainer}>
                        <Text style={styles.postsTitle}>One Piece Chapitre 1071</Text>
                        <View style={styles.postsItems}>
                            <View style={styles.itemsContainer}>
                                {/* <LinearGradient */}
                                {/* colors={['150.15deg', '#A51717 25.58%', '#AFBC16 149.93%']}> */}
                                        <FontAwesome
                                            name="heart"
                                            size={15}
                                        />
                                {/* </LinearGradient> */}
                                <Text>28/12/2022</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.itemsContainer}>
                                <TouchableOpacity onPress={() => alert('Button comment pressed')}>
                                    <FontAwesome
                                        name="comment"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>155 Réponses</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.likeItem}>
                                <TouchableOpacity onPress={() => alert('Button like pressed')}>
                                    <FontAwesome
                                        name="heart"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>34</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.postsContainer}>
                        <Text style={styles.postsTitle}>One Piece Chapitre 1071</Text>
                        <View style={styles.postsItems}>
                            <View style={styles.itemsContainer}>
                                {/* <LinearGradient */}
                                {/* colors={['150.15deg', '#A51717 25.58%', '#AFBC16 149.93%']}> */}
                                        <FontAwesome
                                            name="heart"
                                            size={15}
                                        />
                                {/* </LinearGradient> */}
                                <Text>28/12/2022</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.itemsContainer}>
                                <TouchableOpacity onPress={() => alert('Button comment pressed')}>
                                    <FontAwesome
                                        name="comment"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>155 Réponses</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.likeItem}>
                                <TouchableOpacity onPress={() => alert('Button like pressed')}>
                                    <FontAwesome
                                        name="heart"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>34</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.postsContainer}>
                        <Text style={styles.postsTitle}>One Piece Chapitre 1071</Text>
                        <View style={styles.postsItems}>
                            <View style={styles.itemsContainer}>
                                {/* <LinearGradient */}
                                {/* colors={['150.15deg', '#A51717 25.58%', '#AFBC16 149.93%']}> */}
                                        <FontAwesome
                                            name="heart"
                                            size={15}
                                        />
                                {/* </LinearGradient> */}
                                <Text>28/12/2022</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.itemsContainer}>
                                <TouchableOpacity onPress={() => alert('Button comment pressed')}>
                                    <FontAwesome
                                        name="comment"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>155 Réponses</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.likeItem}>
                                <TouchableOpacity onPress={() => alert('Button like pressed')}>
                                    <FontAwesome
                                        name="heart"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>34</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.postsContainer}>
                        <Text style={styles.postsTitle}>One Piece Chapitre 1071</Text>
                        <View style={styles.postsItems}>
                            <View style={styles.itemsContainer}>
                                {/* <LinearGradient */}
                                {/* colors={['150.15deg', '#A51717 25.58%', '#AFBC16 149.93%']}> */}
                                        <FontAwesome
                                            name="heart"
                                            size={15}
                                        />
                                {/* </LinearGradient> */}
                                <Text>28/12/2022</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.itemsContainer}>
                                <TouchableOpacity onPress={() => alert('Button comment pressed')}>
                                    <FontAwesome
                                        name="comment"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>155 Réponses</Text>
                            </View>
                            {/* --------------------------------------------------- */}
                            <View style={styles.likeItem}>
                                <TouchableOpacity onPress={() => alert('Button like pressed')}>
                                    <FontAwesome
                                        name="heart"
                                        size={15}
                                    />
                                </TouchableOpacity>
                                <Text>34</Text>
                            </View>
                        </View>
                    </View>
            </ScrollView>
        </View>
    );
}

export default ForumScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'black'
    },

    postsContainer: {
        backgroundColor: 'white',
        height: 80,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: '#0000002B'
    },

    postsTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 2,
    },

    postsItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 330,
        paddingLeft: 20,
        marginTop: 20
    },

    itemsContainer: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-evenly'
    },

    likeItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 35,
    },

    filtersContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },

    filtersButton: {
        width: 110,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    tallFiltersContainer: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'black'
    },

    bandHeader: {
        width: "100%",
        height: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bg: {
        width: '100%',
        height: '100%',
        opacity: 0.4
    },
});