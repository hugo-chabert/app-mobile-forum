import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { usePostContext } from '../context/PostContext';
import { useCommentContext } from '../context/CommentContext';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }) {

  const postContext = usePostContext();
  const commentContext = useCommentContext();

  function create(){
    commentContext.create('test', 1, 1)
  }

  function getAllComments(){
    commentContext.getAllComments()
  }

  function getCommentByID(){
    commentContext.getCommentByID(1)
  }

  function getAllCommentsByUserID(){
    commentContext.getAllCommentsByUserID(1)
  }

  function getAllCommentsByPostID(){
    commentContext.getAllCommentsByPostID(1)
  }

  return (
    <View>
      <TouchableOpacity onPress={create}>
        <Text>Test</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getAllComments}>
        <Text>Get All Comments</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getCommentByID}>
        <Text>Get Comment By ID</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getAllCommentsByUserID}>
        <Text>Get All Comments By User ID</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getAllCommentsByPostID}>
        <Text>Get All Comments By Post ID</Text>
      </TouchableOpacity>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
