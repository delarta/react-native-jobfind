import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (item) => ({
    backgroundColor: item.bgColor,
    padding: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    borderRadius: SIZES.small,
    flex: 1,
  }),

  iconWrapper: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "80%",
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.light.secondary,
  },
});

export default styles;
