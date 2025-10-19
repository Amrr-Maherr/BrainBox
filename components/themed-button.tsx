import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  text?: string;
  textLight?:string
  textDark?:string
};

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  textLight,
  textDark,
  text = "Button",
  ...rest
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor ?? "#000", dark: darkColor ?? "#fff" },
    "background"
  );

  const textColor = useThemeColor(
    { light: textLight ?? "#fff", dark: textDark ?? "#000" },
    "text"
  );

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      {...rest}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
