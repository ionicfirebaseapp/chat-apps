import React from 'react';
import {
    Image,
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Color } from "../Common/Color";
import styles from './styles';
import { CrossPlatformIcon } from './Constant';


class SideBar extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../Images/bg.png')} style={styles.container}>
                <View>
                    <View style={styles.imgContainer}>
                        <View>
                            <Image source={require('../Images/face.png')} style={{ color: Color.White, width: 50, height: 50, paddingBottom: 10 }} />
                        </View>
                        <Text style={styles.sidebarText}>User name</Text>
                    </View>
                    <TouchableOpacity onPress={() => Actions.home()}>
                        <View style={styles.sidebarContainer} >
                            <View style={styles.sidebarIcon}>
                                <CrossPlatformIcon name="home" color={Color.White} size={20} />
                            </View>
                            <Text style={styles.sidebarText}>Home</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.timeline()}>
                        <View style={styles.sidebarContainer} >
                            <View style={styles.sidebarIcon}>
                                <CrossPlatformIcon name="chatboxes" color={Color.White} size={20} />
                            </View>
                            <Text style={styles.sidebarText}>Timeline</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.notification()}>
                        <View style={styles.sidebarContainer} >
                            <View style={styles.sidebarIcon}>
                                <CrossPlatformIcon name="notifications-outline" color={Color.White} size={20} />
                            </View>
                            <Text style={styles.sidebarText}>Notification</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.friendgroup()}>
                        <View style={styles.sidebarContainer} >
                            <View style={styles.sidebarIcon}>
                                <CrossPlatformIcon name="people" color={Color.White} size={20} />
                            </View>
                            <Text style={styles.sidebarText}>Friend Group</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.friendlist()}>
                        <View style={styles.sidebarContainer} >
                            <View style={styles.sidebarIcon}>
                                <CrossPlatformIcon name="list" color={Color.White} size={20} />
                            </View>
                            <Text style={styles.sidebarText}>Friend List</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.profile()}>
                        <View style={styles.sidebarContainer} >
                            <View style={styles.sidebarIcon}>
                                <CrossPlatformIcon name="person" color={Color.White} size={20} />
                            </View>
                            <Text style={styles.sidebarText}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.login()}>
                        <View style={styles.sidebarContainer} >
                            <View style={styles.sidebarIcon}>
                                <CrossPlatformIcon name="lock" color={Color.White} size={20} />
                            </View>
                            <Text style={styles.sidebarText}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default SideBar;