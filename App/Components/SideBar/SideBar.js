import React from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { SidebarItem, CardSection, ButtonOutline } from "../../Components";
import { sideMenuBarItems } from "./SideBarData";
import { CrossPlatformIcon } from "../../Common/Constant";
import { Color } from "../../Common/Color";
import styles from "./styles";
import ImagePicker from 'react-native-image-picker';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      ImageSource: null
    };

  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({

          ImageSource: source

        });
      }
    });
  }
  renderCommonMenu(navigate) {
    return sideMenuBarItems.map(item => (
      <CardSection>
        <SidebarItem
          key={item.name}
          onPress={() => navigate(item.route)}
          iconName={item.icon} title={item.name}
        />
      </CardSection>
    ));
  }

  render() {
    return (
      <View>
        <View style={styles.editProfile}>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={styles.imageContainer}>
            <View>
              {this.state.ImageSource === null ? <View style={styles.selectImage}>
                <CrossPlatformIcon name="create" color={Color.White} size={30} style={styles.editIcon} />
                <Text style={styles.uploadText}>Edit Profile</Text>
              </View>
                :
                <Image source={this.state.ImageSource} style={styles.selectImage} defaultSource={{ uri: this.props.imageUrl }} />
              }
            </View>
          </TouchableOpacity>

          <Text style={styles.userName}>React app</Text>
        </View>
        {this.renderCommonMenu(navigate)}
        <CardSection>
          <ButtonOutline style={styles.signOutBtn}>Sign Out</ButtonOutline>
        </CardSection>
      </View>

    );
  }
}


export default SideBar;
