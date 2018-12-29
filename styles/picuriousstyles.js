import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "panelbodyintro": {
        "fontSize": 20
    },
    "lead": {
        "background": "rgba(255, 255, 255, 0.1)",
        "position": "inherit",
        "marginTop": 85,
        "marginRight": 85,
        "marginBottom": 85,
        "marginLeft": 85,
        "borderRadius": 50
    },
    "slogan": {
        "color": "rgb(255,235,43)"
    },
    "head-event": {
        "fontSize": 28,
        "textDecoration": "none",
        "color": "rgb(72, 232,101)",
        "fontWeight": "600"
    },
    "head-event i": {
        "fontSize": 20
    },
    "head-event a": {
        "textDecoration": "none",
        "color": "rgb(75,144,252)",
        "fontWeight": "600"
    },
    "head-event a:hover": {
        "color": "rgb(72, 232,101)"
    },
    "contact-foot": {}
});