import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobTypes] = useState("Full-time");
  return (
    <View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchWrapper}>
          <View style={{ width: 40 }}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchIcon}
            />
          </View>

          <View>
            <Text style={styles.searchTitle}>Start your search</Text>
            <Text style={styles.searchSubtitle}>Where | What | When | Who</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.bell}
            // note: resizeMode = objectFit in CSS
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeMessage}>Hi, Jeanette!</Text>
      </View>

      {/* <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobTypes(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
          keyExtractor={(item) => item}
        />
      </View> */}
    </View>
  );
};

export default Welcome;
