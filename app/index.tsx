import { FlatList, View, StyleSheet, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { ConsultaContext } from "../context/ConsultasContext";
import { ConsultaItem } from "../components/ConsultaItem";
import { Link } from "expo-router";
import { colors } from "../constants/theme";

const ConsultasScreen = () => {
  const consultasContext = useContext(ConsultaContext);
  const consultas = consultasContext?.consultas ?? [];
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={styles.screenContainer}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Minhas Consultas
        </Text>
      </View>

      <FlatList
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: bottom }
        ]}
        data={consultas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ConsultaItem consulta={item} />
        )}
      />

      <View
        style={[
          styles.footer,
          { paddingBottom: bottom + 10 }
        ]}
      >
        <Link href="/marcarConsulta" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Marcar Consulta
            </Text>
          </Pressable>
        </Link>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.textPrimary,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  listContent: {
    paddingHorizontal: 16,
    flexGrow: 1,
    paddingTop: 16,
    gap: 12,
  },

  footer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },

  buttonText: {
    color: colors.background,
    fontWeight: "bold",
    fontSize: 16,

  },
});

export default ConsultasScreen;