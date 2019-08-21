import React from 'react';
import {
    Scene,
    Router,
    Drawer,
    Stack,
} from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import MenuIcon from '../Images/menu.png';
import { Color } from "../Common/Color";
import RecentChat from "../Containers/Chat/RecentChat";
import Notifications from "../Containers/Notification/Notifications";
import FriendsGroup from "../Containers/Group/FriendsGroup";
import FriendList from "../Containers/Friend/FriendList";
import Setting from "../Containers/Settings/Setting";
import LoginScreen from "../Containers/User/LoginScreen";
import ForgetPassword from "../Containers/User/ForgetPassword";
import Signup from "../Containers/User/Signup";
import Profile from "../Containers/User/Profile";
import Timeline from "../Containers/Timeline/Timeline";
import Home from "../Containers/Home/Home";
import SideBar from '../Common/SideBar';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Drawer
                    hideNavBar
                    key="draw"
                    contentComponent={SideBar}
                    drawerImage={MenuIcon}
                    drawerWidth={300}
                    tapToClose={true}
                >
                    <Stack
                        key="mainScreen"
                        title="Home"
                        tabBarLabel="TAB #1"
                        inactiveBackgroundColor="#FFF"
                        activeBackgroundColor="#DDD"
                        icon={MenuIcon}
                        navigationBarStyle={{ backgroundColor: Color.Primary }}
                        titleStyle={{ color: Color.White }}
                    >
                        <Scene
                            key="home"
                            component={Home}
                            hideMenuImage={true}
                            navigationBarStyle={{ backgroundColor: Color.Primary }}
                        />
                    </Stack>
                </Drawer>
                <Scene
                    key="setting"
                    component={Setting}
                    title='Setting'
                    hideMenuImage={true}
                    navigationBarStyle={{ backgroundColor: Color.Primary }}
                    titleStyle={styles.titleStyle}
                    tintColor={Color.White}
                />

                <Scene
                    key="notification"
                    component={Notifications}
                    title='Notification'
                    hideMenuImage={true}
                    navigationBarStyle={{ backgroundColor: Color.Primary }}
                    titleStyle={styles.titleStyle}
                    tintColor={Color.White}
                />
                <Scene
                    key="friendgroup"
                    component={FriendsGroup}
                    title='Friend Group'
                    hideMenuImage={true}
                    navigationBarStyle={{ backgroundColor: Color.Primary }}
                    titleStyle={styles.titleStyle}
                    tintColor={Color.White}
                />
                <Scene
                    key="friendlist"
                    component={FriendList}
                    title='Friend List'
                    hideMenuImage={true}
                    navigationBarStyle={{ backgroundColor: Color.Primary }}
                    titleStyle={styles.titleStyle}
                    tintColor={Color.White}
                />
                <Scene
                    key="timeline"
                    component={Timeline}
                    title='Timeline'
                    hideMenuImage={true}
                    navigationBarStyle={{ backgroundColor: Color.Primary }}
                    titleStyle={styles.titleStyle}
                    tintColor={Color.White}
                />
                <Scene
                    key="recentchat"
                    component={RecentChat}
                    title='Recent Chat'
                    hideMenuImage={true}
                    navigationBarStyle={{ backgroundColor: Color.Primary }}
                    titleStyle={styles.titleStyle}
                    tintColor={Color.White}
                />

                <Scene
                    key="profile"
                    component={Profile}
                    title='Profile'
                    hideMenuImage={true}
                    navigationBarStyle={{ backgroundColor: Color.Primary }}
                    titleStyle={styles.titleStyle}
                    tintColor={Color.White}
                />


                <Scene hideNavBar key="login" component={LoginScreen} />
                <Scene hideNavBar key="forgetPassword" component={ForgetPassword} />
                <Scene hideNavBar key="signup" component={Signup} />
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        color: Color.White, alignSelf: 'center'
    }
});

export default RouterComponent;