import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ToastProvider } from "react-native-toast-notifications";

export default function ProductLayout() {
  return (
 <ToastProvider>
     <Stack>
      <Stack.Screen
        name="[slug]"
        options={({navigation})=>({
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.GoBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
 </ToastProvider>
  );
}
