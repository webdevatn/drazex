import React, { useEffect } from "react";
import { View, StatusBar, Platform } from "react-native";
import propTypes from "prop-types";
import Colors from '../assets/Colors';
import { normalize } from '../utils/helpers/mixins'
const MyStatusBar = ({ backgroundColor, barStyle, height, ...props }) =>

  (
    <View
      style={[
        { height: StatusBar.currentHeight },
        { backgroundColor }
      ]}
    >
      <StatusBar

        translucent
        backgroundColor={backgroundColor}
        {...props}
        barStyle={barStyle}
        hidden={false}
      />
    </View>
  );

export default MyStatusBar;
MyStatusBar.propTypes = {
  backgroundColor: propTypes.string,
  barStyle: propTypes.string,
  height: propTypes.number,
};

MyStatusBar.defaultProps = {
  backgroundColor: Colors.StatusBar,
  barStyle: "light-content",
  height: normalize(20),
};