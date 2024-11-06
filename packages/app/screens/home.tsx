import { View, Text, Button, Card } from "ui";
export function Home() {
  return (
    <View className="flex flex-1 justify-center items-center bg-background gap-[20px]">
      <Text className="text-lg font-bold text-center">
        Cross platform UI for react and react native with Tailwind and RN
        Reusables
      </Text>
      <View className="flex flex-row gap-[10px] justify-center items-center">
        <View className="flex justify-center gap-[10px] items-center flex-col">
          <Card className="w-[7rem] h-[7rem]">
            <Text>NativeWind</Text>
          </Card>
          <Card className="w-[7rem] h-[7rem]">
            <Text>Expo</Text>
          </Card>
        </View>
        <View className="flex justify-center gap-[10px] items-center flex-col">
          <Card className="w-[7rem] h-[7rem]">
            <Text>Tailwind</Text>
          </Card>
          <Card className="w-[7rem] h-[7rem]">
            <Text>Next</Text>
          </Card>
        </View>
      </View>
    </View>
  );
}
