import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeContainer: {
    marginTop: SIZES.large,
    padding: SIZES.medium,
    height: 148,
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.xLarge,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.black,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.medium,
    height: 54,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.xxLarge,
    height: "100%",
    paddingLeft: SIZES.medium,
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 40,
    height: "100%",
    // backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: SIZES.large,
    height: SIZES.large,
    // tintColor: COLORS.white,
  },
  searchBtnImage: {
    width: "70%",
    height: "70%",
    // tintColor: COLORS.white,
  },
  searchTitle: {
    fontFamily: FONT.bold,
    color: COLORS.black,
  },
  searchSubtitle: {
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
