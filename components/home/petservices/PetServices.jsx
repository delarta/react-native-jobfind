import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./petservices.style";
import { COLORS, SIZES, icons, images } from "../../../constants";
import ServicesCard from "../../common/cards/services/ServicesCard";
import useFetch from "../../../hook/useFetch";

const PetServices = () => {
  const router = useRouter();

  const { data, isLoading, isError } = useFetch("search", {
    query: "petServices",
    num_page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PET SERVICES</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : isError ? (
          <Text>Something went wrong</Text>
        ) : (
          // data?.map((job) => (
          //   <NearbyJobCard
          //     key={`nearby-job-${job?.job_id}`}
          //     job={job}
          //     handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
          //   />
          // ))
          <View style={{ rowGap: 16 }}>
            <View style={{ flexDirection: "row", columnGap: 16 }}>
              <ServicesCard
                item={{
                  icon: images.vet,
                  name: "VET",
                  bgColor: COLORS.custom.colorB,
                }}
                handleCardPress={() => {}}
              />
              <ServicesCard
                item={{
                  icon: images.grooming,
                  name: "GROOMING",
                  bgColor: COLORS.custom.colorA,
                }}
                handleCardPress={() => {}}
              />
            </View>
            <View style={{ flexDirection: "row", columnGap: 16 }}>
              <ServicesCard
                item={{
                  icon: images.hotel,
                  name: "HOTEL",
                  bgColor: COLORS.custom.colorC,
                }}
                handleCardPress={() => {}}
              />
              <ServicesCard
                item={{
                  icon: images.others,
                  name: "OTHERS",
                  bgColor: COLORS.custom.colorD,
                }}
                handleCardPress={() => {}}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default PetServices;
