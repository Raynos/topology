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

fully(channel, function (stream) {
    var peerId = stream.peerId

    stream
        .pipe(m.createStream())
        .pipe(stream)

    console.log("connected to", peerId)
})
