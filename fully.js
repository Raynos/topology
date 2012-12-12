var uuid = require("node-uuid")

module.exports = FullyConnected

function FullyConnected(channel, options, callback) {
    if (typeof options === "function") {
        callback = options
        options = {}
    }

    options = options || {}
    callback = callback || noop

    var peers = channel.createPeers()
        , node = channel.createNode(function (pc) {
            callback(pc, false)
        })
        , id = options.id || uuid()

    peers.on("join", onPeer)

    node.listen(id)
    peers.join({ id: id })

    function onPeer(peer) {
        if (peer.id <= id) {
            return
        }

        var pc = node.connect(peer.id)

        pc.on("open", function () {
            callback(pc, true)
        })
    }

}

function noop() {}
