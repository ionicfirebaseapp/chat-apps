import React from "react";
import { View, Text } from "react-native";
import { Avatar, Card } from "../Components";
import styles from "./styles";

const MsgItem = ({ senderTitle, senderTiming, senderSubTitle, receiverTitle, receiverTiming, receiverSubTitle, avatarReceiverImg, avatarSenderImg, style }) => {
  const { msgItemContainer, msgItemSubContainer, msgContainer, receicerMsgTiming, senderImg, msgText, receiverImg, headTextContainer, msgTitle, msgTiming, msgSubTitle } = styles;
  return (
    <View style={[msgItemContainer, style]}>
      <Card style={msgItemSubContainer}>
        <View style={msgContainer}>
          <View style={senderImg}>
            <Avatar img={avatarSenderImg} />
          </View>
          <View style={msgText}>
            <View style={headTextContainer}>
              <Text style={msgTitle}>{senderTitle}</Text>
              <Text style={msgTiming}>{senderTiming}</Text>
            </View>
            <Text style={msgSubTitle}>{senderSubTitle}</Text>
          </View>
        </View>
      </Card>
      <Card style={msgItemSubContainer}>
        <View style={msgContainer}>
          <View style={msgText}>
            <View style={headTextContainer}>
              <Text style={msgTitle}>{receiverTitle}</Text>
              <Text style={receicerMsgTiming}>{receiverTiming}</Text>
            </View>
            <Text style={msgSubTitle}>{receiverSubTitle}</Text>
          </View>
          <View style={receiverImg}>
            <Avatar img={avatarReceiverImg} />
          </View>
        </View>
      </Card>
    </View>
  );
}

export { MsgItem };
