import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState, useCallback } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  PopularCategories,
  TodaysSpecialData,
  DessertData,
} from "../Data/Data";

const Home = ({ navigation }) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 2); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.MainView}>
      <View style={styles.PopulerCategoriesView}>
        <View style={styles.PopulerCategoriesTextView}>
          <Image
            source={require("../Assets/Star.png")}
            style={styles.starImage}
          />
          <Text style={styles.HeadingText}>Popular categories</Text>
        </View>
        <View style={styles.PopulerCategoriesDishesView}>
          <FlatList
            data={PopularCategories}
            horizontal={true}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.PopulerCategoriesDishes} onPress={()=> navigation.navigate('Sample')}>
                <Image source={item.Image} />
                <Text style={styles.PopularCategoriesDishesText}>
                  {item.Name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View>
        <View>
          <View style={styles.PopulerCategoriesTextView}>
            <Image
              source={require("../Assets/Star.png")}
              style={styles.starImage}
            />
            <Text style={styles.HeadingText}>Today’s Special</Text>
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <FlatList
            data={TodaysSpecialData}
            horizontal={true}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.TodaysSpecialView}
                onPress={() => navigation.navigate("Details", { item })}
              >
                <View>
                  <Image source={item.Image} style={styles.DishImages} />
                </View>
                <View style={styles.TodaysSpecialDishDetailsView}>
                  <Text style={styles.DishText}>{item.Name}</Text>
                  <View style={styles.PriceDiscountView}>
                    <Text style={styles.PriceText}><Text>Rs </Text>{item.Price}</Text>
                    <View style={styles.OffView}>
                      <Text style={styles.OffText}>{item.Off}</Text>
                    </View>
                  </View>
                  <View style={styles.mainContainer}>
                    <Text
                      onTextLayout={onTextLayout}
                      numberOfLines={textShown ? undefined : 2}
                      style={styles.DescText}
                    >
                      {item.Desc}
                    </Text>
                  </View>
                  <View style={styles.DetailsLastView}>
                    <View style={styles.RatingMainCourseView}>
                      <Icon name="star" style={styles.StarIcon} />
                      <Text style={styles.PriceText}>{item.Rating}</Text>
                      <Text style={{ marginLeft: 10 }}>{item.Type}</Text>
                    </View>
                    <View style={styles.ChefPickView}>
                      <Text style={styles.ChefPickText}>{item.Other}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <View>
            <View style={styles.PopulerCategoriesTextView}>
              <Image
                source={require("../Assets/Star.png")}
                style={styles.starImage}
              />
              <Text style={styles.HeadingText}>Delicious Dessert</Text>
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <FlatList
              data={DessertData}
              horizontal={true}
              renderItem={({ item, index }) => (
                <TouchableOpacity style={styles.TodaysSpecialView} onPress={() => navigation.navigate("Details", { item })}>
                  <View style={styles.ImageView}>
                    <Image source={item.Image} style={styles.DishImages} />
                  </View>
                  <View style={styles.TodaysSpecialDishDetailsView}>
                    <Text style={styles.DishText}>{item.Name}</Text>
                    <View style={styles.PriceDiscountView}>
                      <Text style={styles.PriceText}><Text>Rs </Text>{item.Price}</Text>
                      <View style={styles.OffView}>
                        <Text style={styles.OffText}>{item.Off}</Text>
                      </View>
                    </View>

                    <View style={styles.mainContainer}>
                      <Text
                        onTextLayout={onTextLayout}
                        numberOfLines={textShown ? undefined : 2}
                        style={styles.DescText}
                      >
                        {item.Desc}
                      </Text>
                    </View>
                    <View style={styles.DetailsLastView}>
                      <View style={styles.RatingMainCourseView}>
                        <Icon name="star" style={styles.StarIcon} />
                        <Text style={styles.PriceText}>{item.Rating}</Text>
                        <Text style={{ marginLeft: 10 }}>{item.Type}</Text>
                      </View>
                      <View style={styles.ChefPickView}>
                        <Text style={styles.ChefPickText}>{item.Other}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  PopulerCategoriesTextView: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  starImage: {
    height: 22,
    width: 22,
    marginRight: 10,
  },
  HeadingText: {
    color: "#1B1B1B",
    fontSize: 22,
    fontWeight: "500",
  },
  PopulerCategoriesDishesView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  PopulerCategoriesDishes: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  PopularCategoriesDishesText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 5,
    marginBottom: 10,
  },
  TodaysSpecialView: {
    backgroundColor: "#d4ace8",
    margin: 5,
    width: Dimensions.get("window").width * 0.8,
    borderRadius: 10,
    flex: 1,
  },
  TodaysSpecialDishDetailsView: {
    backgroundColor: "#ffffff",
    padding: 10,
  },
  DishImages: {
    width: "100%",
    height: 200,
  },
  DishText: {
    fontSize: 20,
    fontWeight: "400",
  },
  PriceText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3A3A3A",
  },
  PriceDiscountView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  OffView: {
    backgroundColor: "#c7f2c8",
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  OffText: {
    color: "#51B960",
    fontSize: 14,
    margin: 6,
    fontWeight: "800",
  },
  DescText: {
    color: "#A6A6AA",
    fontWeight: "400",
    lineHeight: 20,
  },
  DetailsLastView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "space-between",
  },
  RatingMainCourseView: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
  },
  StarIcon: {
    fontSize: 15,
    color: "#FFE202",
    marginRight: 7,
  },
  ChefPickView: {
    width: 100,
    backgroundColor: "#deeefa",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  ChefPickText: {
    color: "#5FA1D5",
    fontSize: 16,
    margin: 6,
    fontWeight: "800",
  },
});
