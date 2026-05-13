import { FlatList, View, StyleSheet, Text, Pressable} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { ConsultaContext } from "../context/ConsultasContext";
import { ConsultaItem } from "../components/ConsultaItem";
import { Link } from "expo-router";




const ConsultasScreen = () => {
  const consultasContext = useContext(ConsultaContext);
  const consultas = consultasContext?.consultas ?? [];
  const { top, bottom } = useSafeAreaInsets()
  return (
    <View style={styles.screenContainer}>
      <View style={[styles.buttonContainer, { paddingTop: top + 10 }]}>
        <Link href="/marcarConsulta" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Marcar Consulta</Text>
          </Pressable>
        </Link>
      </View>
      <FlatList contentContainerStyle={{
        paddingTop: top,
        paddingBottom: bottom,
        paddingHorizontal: 16,
      }}  
        data={consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ConsultaItem consulta={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  medicoText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "center",
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default ConsultasScreen;