import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "font": "15px/1.6 Helvetica, Arial, sans-serif"
    },
    "container > section": {
        "display": "flex",
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "alignItems": "center"
    },
    "section": {
        "borderBottom": "1px solid #eee",
        "width": "100%",
        "paddingTop": 75,
        "paddingRight": 75,
        "paddingBottom": 75,
        "paddingLeft": 75
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "actions": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "borderBottom": "1px solid #eee",
        "height": 50,
        "paddingTop": 0,
        "paddingRight": 25,
        "paddingBottom": 0,
        "paddingLeft": 25,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "background": "white"
    },
    "tipshow": {
        "animationName": "show",
        "animationDuration": "300ms",
        "animationFillMode": "forwards",
        "animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)"
    },
    "tip": {
        "position": "absolute",
        "width": 75,
        "textAlign": "center",
        "textTransform": "none",
        "background": "rgb(34, 39, 42)",
        "color": "white",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderRadius": 2,
        "zIndex": 100,
        "pointerEvents": "none",
        "fontSize": 0.8,
        "transition": "all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "opacity": 0
    },
    "tip:after": {
        "top": "100%",
        "left": "50%",
        "border": "solid transparent",
        "content": " ",
        "height": 0,
        "width": 0,
        "position": "absolute",
        "pointerEvents": "none",
        "borderColor": "rgba(0,0,0,0)",
        "borderTopColor": "rgb(34, 39, 42)",
        "borderWidth": 5,
        "marginLeft": -5
    },
    "line-chart column": {
        "fill": "RGB(230, 237, 244)"
    },
    "line-chart line": {
        "stroke": "RGB(243, 42, 100)",
        "strokeWidth": 3,
        "fill": "none"
    },
    "line-chart axis text": {
        "font": "9px sans-serif"
    },
    "line-chart axis path": {
        "fill": "none",
        "stroke": "RGB(230, 237, 244)",
        "strokeWidth": 1.5,
        "shapeRendering": "crispEdges",
        "display": "none"
    },
    "line-chart axis line": {
        "fill": "none",
        "stroke": "RGB(230, 237, 244)",
        "strokeWidth": 1.5,
        "shapeRendering": "crispEdges"
    },
    "series-chart bg": {
        "stroke": "#E6EDF4",
        "strokeWidth": 2
    },
    "series-chart point": {
        "stroke": "red",
        "strokeWidth": 5
    },
    "series-chart seriessuccess point": {
        "stroke": "#0bbbe2"
    },
    "series-chart seriesclient point": {
        "stroke": "#F12E65"
    },
    "series-chart seriesserver point": {
        "stroke": "#F12E65"
    },
    "series-chart seriesnet point": {
        "stroke": "#F12E65"
    },
    "series-chart label": {
        "font": "10px sans-serif"
    },
    "series-chart xaxis": {
        "transition": "all 200ms"
    },
    "series-chart:hover xaxis": {
        "opacity": 0
    },
    "series-chart value": {
        "font": "10px sans-serif",
        "textAnchor": "start",
        "alignmentBaseline": "middle"
    },
    "series-chart details x": {
        "stroke": "rgb(245, 245, 245)",
        "strokeWidth": 3
    },
    "series-chart details time": {
        "font": "10px sans-serif",
        "alignmentBaseline": "hanging",
        "textAnchor": "middle"
    },
    "series-chart axis text": {
        "font": "9px sans-serif"
    },
    "series-chart axis path": {
        "fill": "none",
        "stroke": "RGB(230, 237, 244)",
        "strokeWidth": 1,
        "strokeDasharray": "1,2",
        "shapeRendering": "crispEdges",
        "display": "none"
    },
    "series-chart axis line": {
        "fill": "none",
        "stroke": "RGB(230, 237, 244)",
        "strokeWidth": 1,
        "strokeDasharray": "1,2",
        "shapeRendering": "crispEdges"
    },
    "series-chartdark axis path": {
        "stroke": "#282b2e"
    },
    "series-chartdark axis line": {
        "stroke": "#282b2e"
    },
    "heatmap-chart grid": {
        "stroke": "RGB(230, 237, 244)"
    },
    "heatmap-chart bin:hover": {
        "stroke": "black"
    },
    "heatmap-chart axis text": {
        "font": "9px sans-serif"
    },
    "heatmap-chart axis path": {
        "fill": "none",
        "stroke": "RGB(230, 237, 244)",
        "strokeWidth": 1.5,
        "shapeRendering": "crispEdges",
        "display": "none"
    },
    "heatmap-chart axis line": {
        "fill": "none",
        "stroke": "RGB(230, 237, 244)",
        "strokeWidth": 1.5,
        "shapeRendering": "crispEdges"
    },
    "circle-chart background": {
        "fill": "RGB(230, 237, 244)"
    },
    "circle-chart foreground": {
        "fill": "RGB(0, 181, 241)"
    },
    "circle-chart label": {
        "fill": "RGB(0, 181, 241)",
        "font": "18px sans-serif",
        "textAnchor": "middle",
        "alignmentBaseline": "middle"
    },
    "bar-chart column": {
        "fill": "RGB(230, 237, 244)"
    },
    "bar-chart bar": {
        "fill": "RGB(243, 42, 100)"
    },
    "bar-chart axis text": {
        "font": "9px sans-serif"
    },
    "bar-chart axis path": {
        "fill": "none",
        "stroke": "RGB(230, 237, 244)",
        "strokeWidth": 1.5,
        "shapeRendering": "crispEdges",
        "display": "none"
    },
    "bar-chart axis line": {
        "fill": "none",
        "stroke": "RGB(230, 237, 244)",
        "strokeWidth": 1.5,
        "shapeRendering": "crispEdges"
    },
    "dot-chart axis text": {
        "font": "9px sans-serif"
    },
    "dot-chart axis path": {
        "fill": "none",
        "stroke": "RGB(230, 237, 244)",
        "strokeWidth": 1.5,
        "shapeRendering": "crispEdges",
        "display": "none"
    },
    "dot-chart axis line": {
        "fill": "none",
        "stroke": "RGB(230, 237, 244)",
        "strokeWidth": 1.5,
        "shapeRendering": "crispEdges"
    }
});