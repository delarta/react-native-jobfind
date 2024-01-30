import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./adoptcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      // style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <View style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.petPhoto }}
          resizeMode="cover"
          style={styles.logoImage}
        />
      </View>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.petName}
      </Text>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
