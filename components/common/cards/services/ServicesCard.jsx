import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../../../constants";

import styles from "./servicescard.style";

const ServicesCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(item)}
      onPress={() => handleCardPress(item)}
    >
      <View style={styles.iconWrapper}>
        <Image
          source={item.icon}
          // note: resizeMode = objectFit in CSS
          resizeMode="contain"
          style={styles.icon}
        />
      </View>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default ServicesCard;
