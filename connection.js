
var ros = new ROSLIB.Ros();

ros.on("error", function (error) {
console.log(error);
});

ros.on("connection", function () {
console.log("Connection made!");

});
ros.on("close", function () {
console.log("Connection closed.");
});

ros.connect("ws://10.42.0.1:8080");




var cmdVel = new ROSLIB.Topic({
ros: ros,
name: "/cmd_vel",
messageType: "geometry_msgs/Twist",
});

var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/chatter',
    messageType : 'std_msgs/String'
});

listener.subscribe(function(message) {
    var msg = message.data;
    var tableau = msg.split(",");
    motor1gauge.value = Math.abs(tableau[0]);
    motor2gauge.value = Math.abs(tableau[1]);
    ampgauge.value = tableau[2];
    voltgauge.value = tableau[3];
  });
function publishCmdVel(x, z){
    var twist = new ROSLIB.Message({
        linear: {
            x: x,
            y: 0,
            z: 0,
        },
        angular: {
            x: 0,
            y: 0,
            z: z,
        },
        });
        cmdVel.publish(twist);
}

