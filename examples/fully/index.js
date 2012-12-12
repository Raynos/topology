var fully = require("../../fully")
    , SignalChannel = require("signal-channel")
    , Model = require("scuttlebutt/model")

    , m = Model()
    , channel = SignalChannel("unique namespace")
    , key = Math.random() * 10
    , value = Math.random() * 10

m.on("update", function (update) {
    console.log("updated!", update)
})

m.set(key, value)
console.log("set key", key, "to", value)

fully(channel, function (conn, opener) {
    var peerId = conn.peerId

    if (opener) {
        hookUp(conn.createStream("model"))
    } else {
        conn.on("connection", function (stream) {
            if (stream.meta === "model") {
                hookUp(stream)
            }
        })
    }

    console.log("connected to", peerId)

    function hookUp(stream) {
        stream
            .pipe(m.createStream())
            .pipe(stream)
    }
})
