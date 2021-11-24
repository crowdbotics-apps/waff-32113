import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_0_1076}>
        <View style={styles.View_0_1077} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bb5/bdec/3db95b02f001549bbdf6e2efcf20627f"
          }}
          style={styles.ImageBackground_0_1078}
        />
        <View style={styles.View_0_1083}>
          <View style={styles.View_0_1084}>
            <Text style={styles.Text_0_1084}>
              Take 30 minutes of bodybuilding every day
            </Text>
          </View>
          <View style={styles.View_0_1085}>
            <Text style={styles.Text_0_1085}>
              to get physically fit and healthy.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cad/7342/a4823e38fc865a4f2726c6619a565239"
          }}
          style={styles.ImageBackground_0_1086}
        />
        <View style={styles.View_0_1090}>
          <View style={styles.View_0_1091}>
            <View style={styles.View_0_1092}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a19/e967/bdc9d2f983c25dd3397aad862e1b74c6"
                }}
                style={styles.ImageBackground_0_1093}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e4a/825a/ee3c848bbab1788abe0380cb28bfb9cf"
                }}
                style={styles.ImageBackground_0_1094}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/957b/fe7c/c79d55b46558c070b225ffee1308c5f0"
                }}
                style={styles.ImageBackground_0_1095}
              />
              <View style={styles.View_0_1096} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef7/5bae/4fd606401fa7032f45eca9059e4fb423"
                }}
                style={styles.ImageBackground_0_1097}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a073/d878/d92a98a32177e728c7f7787b02ff8060"
                }}
                style={styles.ImageBackground_0_1109}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/166f/3e56/3131dfe5a106366e815d107f7fca2f4a"
                }}
                style={styles.ImageBackground_0_1121}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05e6/c376/d8eb9c12b33d7a49a3c2a3135d0f9b12"
                }}
                style={styles.ImageBackground_0_1122}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f877/e39a/d6a704a37f5d5876672680be206f0315"
                }}
                style={styles.ImageBackground_0_1123}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e37/81be/dbb514876e72091018a5952567ed617a"
                }}
                style={styles.ImageBackground_0_1124}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e92a/b06e/da81e4c9157bdb26909e06e90c7068a0"
                }}
                style={styles.ImageBackground_0_1125}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaf0/6714/e053f89ebb0f216e62710249d878f812"
                }}
                style={styles.ImageBackground_0_1126}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be00/6d4d/52037694871f7fb702fe588c7fa0ddb0"
                }}
                style={styles.ImageBackground_0_1134}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e82/f851/361dff8a91d4ffdc7874c959105eef43"
                }}
                style={styles.ImageBackground_0_1142}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa1f/1b6b/5e4d34ff54e8aa7ea88b830e9ef98217"
                }}
                style={styles.ImageBackground_0_1143}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e838/889f/a5887df19204dfe94a51ef79303dfd54"
                }}
                style={styles.ImageBackground_0_1144}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5601/e5c1/bf6a37f1f03d6150a53d756d45660596"
                }}
                style={styles.ImageBackground_0_1145}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3355/b885/468ae702332bd78867a166206503cf03"
                }}
                style={styles.ImageBackground_0_1146}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b187/9b6f/1614b8eaa6bf39fab2aae7136a3dfe32"
                }}
                style={styles.ImageBackground_0_1147}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c5c/804f/9d15b9c9b2cdde946ac6c9bd29b556d7"
                }}
                style={styles.ImageBackground_0_1148}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0778/a55e/c25d9a0d9f7c76450325e056eff139df"
                }}
                style={styles.ImageBackground_0_1149}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b01/239c/a3dde9d0d0110b5ea7c9c0c613ca6e77"
                }}
                style={styles.ImageBackground_0_1150}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5996/81ed/fba520c538335c63ae88ebeb59c3b7d1"
                }}
                style={styles.ImageBackground_0_1151}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f6c/70b8/0ee801dc6e87b8f9a3e5c2946286ba7f"
            }}
            style={styles.ImageBackground_0_1152}
          />
        </View>
        <View style={styles.View_0_1154}>
          <View style={styles.View_0_1155}>
            <Text style={styles.Text_0_1155}>Be stronger</Text>
          </View>
        </View>
        <View style={styles.View_0_1156}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/791d/c6a3/f0f28af1d7f7b8dc08f6e23111da4c47"
            }}
            style={styles.ImageBackground_0_1157}
          />
          <View style={styles.View_0_1159}>
            <View style={styles.View_0_1160}>
              <Text style={styles.Text_0_1160}>Start</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/886a/31d6/a077b3b5fda49f981cfd5c79d37b3769"
          }}
          style={styles.ImageBackground_0_1161}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_0_1076: {
    width: wp("175%"),
    minWidth: wp("175%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-42%"),
    top: hp("-16%")
  },
  View_0_1077: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("16%"),
    backgroundColor: "rgba(255, 155, 112, 1)"
  },
  ImageBackground_0_1078: {
    width: wp("175%"),
    minWidth: wp("175%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1083: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("95%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1084: {
    width: wp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1084: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1085: {
    width: wp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1085: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1086: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("110%")
  },
  View_0_1090: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("37%")
  },
  View_0_1091: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1092: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1093: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("8%")
  },
  ImageBackground_0_1094: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("3%")
  },
  ImageBackground_0_1095: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("7%")
  },
  View_0_1096: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("8%"),
    backgroundColor: "rgba(236, 158, 93, 1)"
  },
  ImageBackground_0_1097: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1109: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%")
  },
  ImageBackground_0_1121: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("27%")
  },
  ImageBackground_0_1122: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("27%")
  },
  ImageBackground_0_1123: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("8%")
  },
  ImageBackground_0_1124: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  ImageBackground_0_1125: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("3%")
  },
  ImageBackground_0_1126: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("37%")
  },
  ImageBackground_0_1134: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("37%")
  },
  ImageBackground_0_1142: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%")
  },
  ImageBackground_0_1143: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  ImageBackground_0_1144: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%")
  },
  ImageBackground_0_1145: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("12%")
  },
  ImageBackground_0_1146: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%")
  },
  ImageBackground_0_1147: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%")
  },
  ImageBackground_0_1148: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("18%")
  },
  ImageBackground_0_1149: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("11%")
  },
  ImageBackground_0_1150: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("11%")
  },
  ImageBackground_0_1151: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("8%")
  },
  ImageBackground_0_1152: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("18%")
  },
  View_0_1154: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1155: {
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1155: {
    color: "rgba(255, 155, 112, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1156: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("114%")
  },
  ImageBackground_0_1157: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1159: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_1160: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1160: {
    color: "rgba(255, 155, 112, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1161: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("73%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
