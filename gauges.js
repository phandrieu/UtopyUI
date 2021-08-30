var rg = require("canvas-gauges");
var motor1gauge = new rg.RadialGauge({
    renderTo: 'rpm1',
    units: "RPM 1 (x10000)",
    minValue: 0,
    maxValue: 30000,
    majorTicks: [
        "0",
        "1",
        "2",
        "3",
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 20000,
            "to": 30000,
            "color": "rgba(200, 50, 50, .75)"
        }
    ],
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 0,
    animationRule: "linear"
}).draw();
var motor2gauge = new rg.RadialGauge({
    renderTo: 'rpm2',
    units: "RPM 1 (x10000)",
    minValue: 0,
    maxValue: 30000,
    majorTicks: [
        "0",
        "1",
        "2",
        "3",
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 20000,
            "to": 30000,
            "color": "rgba(200, 50, 50, .75)"
        }
    ],
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 0,
    animationRule: "linear"
}).draw();
var voltgauge = new rg.RadialGauge({
    renderTo: 'volt',
    units: "Tension (V)",
    minValue: 12,
    maxValue: 17,
    majorTicks: [
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 12,
            "to": 13.8,
            "color": "rgba(200, 50, 50, .75)"
        }
    ],
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 0,
    animationRule: "linear"
}).draw();
var ampgauge = new rg.RadialGauge({
    renderTo: 'amp',
    units: "Intensité (A)",
    minValue: -40,
    maxValue: 40,
    majorTicks: [
        "-40",
        "-30",
        "-20",
        "-10",
        "0",
        "10",
        "20",
        "30",
        "40",
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": -40,
            "to": -10,
            "color": "rgba(200, 50, 50, .75)"
        },
        {
            "from": 35,
            "to": 40,
            "color": "rgba(200, 50, 50, .75)"
        }
    ],
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 0,
    animationRule: "linear"
}).draw();
