import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeNavigationStackProps = {
  Home: undefined;
  History: undefined;
};

export type HomeNavigationProps = NativeStackScreenProps<
  HomeNavigationStackProps,
  "Home"
>;
