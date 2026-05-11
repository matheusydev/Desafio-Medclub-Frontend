import { FlatList, View, Button, StyleSheet, Text} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { consultas } from "../data/consultas";


const ConsultasScreen = () => {
  const { top, bottom } = useSafeAreaInsets()
  return (
    <View style={styles.screenContainer}>
      <FlatList contentContainerStyle={{
        paddingTop: top,
        paddingBottom: bottom,
        paddingHorizontal: 16,
      }}
        data={consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.medicoText}>{item.medico}</Text>
            <Text>{item.data.toLocaleDateString('pt-BR')}</Text>
          </View>
        )}
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
  }
});
export default ConsultasScreen;