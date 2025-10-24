import { View, StyleSheet } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import Icon from "react-native-vector-icons/MaterialIcons";

interface AiCardProps {
  title: string;
  icon: string;
  iconColor: string;
}

export default function AiCard({ title, icon, iconColor }: AiCardProps) {
  return (
    <ThemedView lightColor="#F7F7F8" darkColor="#232627" style={styles.card}>
      <Icon name={icon} size={20} color={iconColor} style={styles.icon} />
      <ThemedText lightColor="#222" darkColor="#A0A0A5" style={styles.text}>
        {title}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 14,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontWeight: "300",
  },
});
