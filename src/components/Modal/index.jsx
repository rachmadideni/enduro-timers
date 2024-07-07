import {
  Modal as BaseModal,
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import ButtonGradient from "@/components/ButtonGradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Modal = ({ type = "success", isVisible, onOk, onClose, message }) => {
  const { styles } = useStyle();
  return (
    <BaseModal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.backdrop}>
        <View style={styles.modalContent}>
          <View
            style={{
              width: "100%",
              padding: 10,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#000" size={22} />
            </Pressable>
          </View>
          <View style={{ gap: 10, paddingBottom:100 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              {type === "success" ? (
                <>
                  <MaterialIcons
                    name="check"
                    color={type === "error" && "green"}
                    size={22}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: type === "success" && "green",
                      textAlign: "center",
                    }}
                  >
                    Success
                  </Text>
                </>
              ) : (
                <>
                  <MaterialIcons
                    name="error"
                    color={type === "error" && "red"}
                    size={22}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: type === "error" && "red",
                      textAlign: "center",
                    }}
                  >
                    {type === "error" ? "Error" : "Success"}
                  </Text>
                </>
              )}
            </View>
            <Text>Processing your race event</Text>
            <ButtonGradient
              variant="green"
              text="ok"
              onPress={onOk}              
            />            
          </View>
        </View>
      </View>
    </BaseModal>
  );
};

const useStyle = () => {
  const styles = StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
    },

    modalContent: {
      //   flex: 1 / 3,
      height: 180,
      marginTop: "50%",
      marginHorizontal: 50,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "center",
      backgroundColor: "white",
    },
  });
  return {
    styles,
  };
};

export default Modal;
