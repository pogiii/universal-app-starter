import { View, Text, Button } from "ui";
export function Home() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-base">
        Edit{" "}
        <Text className="text-base bg-blue-300 font-bold">
          {" "}
          packages/app/screens/home.tsx
        </Text>{" "}
        to edit this screen.
      </Text>
      <Button className="bg-red-500">
        <Text className="text-white">This is my button!</Text>
      </Button>
    </View>
  );
}
