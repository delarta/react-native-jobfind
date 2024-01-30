import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./adoptsection.style";
import { COLORS, SIZES } from "../../../constants";
import AdoptCard from "../../common/cards/adopt/AdoptCard";
import useFetch from "../../../hook/useFetch";
import { petList } from "../../../dummyData/petData";

const AdoptSection = () => {
  const router = useRouter();

  const [selectedJob, setSelectedJob] = useState();

  const { data, isLoading, isError } = useFetch("search", {
    query: "dummy",
    num_page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ADOPT</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See more</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : isError ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={({ item }) => (
              <AdoptCard
                item={item}
                handleCardPress={() => {}}
                selectedJob={selectedJob}
              />
            )}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

export default AdoptSection;
