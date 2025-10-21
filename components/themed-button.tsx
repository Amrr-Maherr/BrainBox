import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type TouchableOpacityProps,
  View,
} from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ReactNode } from "react";

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  text?: string;
  textLight?: string;
  textDark?: string;
  icon?: ReactNode;
};

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  textLight,
  textDark,
  text,
  icon,
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
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}
        {text && (
          <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        )}
      </View>
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
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
