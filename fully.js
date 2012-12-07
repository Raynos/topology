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
        , node = channel.createNode(callback)
        , id = options.id || uuid()
        , namespace = options.namespace || "default@namespace"

    peers.on("join", onPeer)

    node.listen(id)
    peers.join({ id: id })

    function onPeer(peer) {
        if (peer.id <= id) {
            return
        }

        callback(node.connect(peer.id, namespace))
    }

}

function noop() {}
