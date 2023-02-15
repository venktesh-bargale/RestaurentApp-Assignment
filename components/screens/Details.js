import {
  StyleSheet,
  Text,
  View,
  Linking,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Share
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Details = ({ navigation, item }) => {
  const addCount = () => {
    setCount(Count + 1);
    console.log(Count);
    setPrice(Price + data.Price);
  };
  const minusCount = () => {
    if (Count == 1) {
      return;
    }
    setCount(Count - 1);
    setPrice(Price - data.Price);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'npx uri-scheme open "Restaurant-App://Details" --android',
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const data = useRoute().params.item;
  // console.log(data.params.name);
  const [Count, setCount] = useState(1);
  const [Price, setPrice] = useState(data.Price);
  return (
    <View>
      <View style={styles.MainView}>
        <View style={styles.HeadingView}>
          <Text style={[styles.HeadingText]}>Details</Text>
          <TouchableOpacity onPress={()=> onShare()}>
            <Icon
              name="share-alt"
              style={[styles.StarIcon, { color: "#f57167", marginRight: 25 }]}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {/* <Image source={data.Image} style={styles.DishImage} /> */}
          <Image source={data.Image} style={styles.DishImage} />
          <Text
            style={[
              styles.HeadingText,
              {
                letterSpacing: 2,
                textTransform: "uppercase",
                textDecorationLine: "underline",
              },
            ]}
          >
            {data.Name}
          </Text>
          <View style={styles.RatingCountView}>
            <View style={styles.RatingView}>
              <Text style={styles.RatingText}>{data.Rating}</Text>
              <Icon name="star" style={styles.StarIcon} />
            </View>
            <View style={styles.CountView}>
              <TouchableOpacity
                style={styles.OperationView}
                onPress={() => minusCount()}
              >
                <Icon
                  name="minus-square-o"
                  style={[styles.StarIcon, { color: "#f57167" }]}
                />
              </TouchableOpacity>
              <View
                style={[styles.OperationView, { backgroundColor: "#f57167" }]}
              >
                <Text style={{ fontSize: 20, color: "#ffffff" }}>{Count}</Text>
              </View>
              <TouchableOpacity
                style={styles.OperationView}
                onPress={() => addCount()}
              >
                <Icon
                  name="plus-square-o"
                  style={[styles.StarIcon, { color: "#83d687" }]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.Desc}>{data.Desc}</Text>
          {/* <Text style={styles.Desc}>{data.Desc}</Text> */}
        </ScrollView>
      </View>
      <View style={styles.BottomView}>
        <Text style={styles.PriceText}>
          <Text>Rs </Text>
          {Price}
        </Text>
        <TouchableOpacity style={styles.AddCartView}>
          <Text style={styles.addCartText}>Add to Cart</Text>
          <Icon
            name="opencart"
            style={[styles.StarIcon, { color: "#ffffff" }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  MainView: {
    width: "97%",
    height: Dimensions.get("window").height * 0.85,
    backgroundColor: "#f5fbfc",
    alignSelf: "center",
  },
  HeadingView: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:'red',
    justifyContent: "space-between",
  },
  HeadingText: {
    color: "#1B1B1B",
    fontSize: 25,
    fontWeight: "800",
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },

  DishImage: {
    height: Dimensions.get("window").height * 0.4,
    width: "100%",
    // resizeMode:'contain'
  },
  RatingCountView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  RatingView: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:'center',
    marginTop: 15,
    marginLeft: 10,
  },
  CountView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 10,
  },
  OperationView: {
    height: 40,
    width: 40,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    margin: 1,
    borderRadius: 5,
  },
  StarIcon: {
    fontSize: 25,
    color: "#FFE202",
    marginLeft: 7,
  },
  RatingText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#5c565a",
  },
  Desc: {
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 20,
    letterSpacing: 2,
    textAlign: "left",
    marginTop: 10,
    marginLeft: 10,
    color: "#66696e",
  },
  BottomView: {
    height: Dimensions.get("window").height * 0.15,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PriceText: {
    marginLeft: 25,
    fontSize: 30,
    fontWeight: "800",
    color: "#5c565a",
  },
  AddCartView: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginRight: 20,
    height: "50%",
    backgroundColor: "#f57167",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  addCartText: {
    fontWeight: "700",
    fontSize: 20,
    marginRight: 10,
    color: "#ffffff",
  },
});
