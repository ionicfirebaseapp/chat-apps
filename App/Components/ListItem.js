import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { AvatarSquare } from "./AvatarSquare";

const ListItem = ({ image, title, subTitle, time, onPress, imageSquare, style }) => {
  const { ListItemAatarSquare, LisItemText, LisItemRight, LisItemTextWrapper, LisItemImg, ListItemTitle, ListItemSubTitle, LisItemRightText, LisItem } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[LisItem]}>
      <View style={[ListItemAatarSquare]}>
        <AvatarSquare img={imageSquare} style={[LisItemImg, style]} />
      </View>
      <View style={[LisItemTextWrapper]}>
        <Text style={[ListItemTitle]}>{title}</Text>
        <Text style={[ListItemSubTitle]}>{subTitle}</Text>
      </View>
      <View style={[LisItemRight]}>
        <Text style={[LisItemRightText]}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { ListItem };