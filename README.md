# topology

Different network topologies

This repository is meant to show implementations of various
    network topologies, preferably distributed implementations.

## Ideas

### [Fully connected][1]

Every node in the network connects to every other node. This is
    "efficient" because every message only has to travel one
    jump.

But does not scale at all, whatsoever.

### [Star][2]

Every node in the network connects to a single central hub. This
    is a centralized model and doesn't scale unless you group
    subparts of your network or limit the size of your network.

As long as all the other nodes in the network know about each
    other and the central node they should be able to elect
    a new central node if the center goes down.

### [Ring][3]

A ring network is actually distributed except every node can
    become a failure point unless you can reconnect over the
    gaps.

### [Tree][5]

Every node is connected to more then one node. And the maximum
    time it takes for a message to propagate is O(log n).

However if any node goes down it isolates all its descendants.

### [Grid][6]

It takes some time for information to propagate and filling holes
    in the grid is complex.

However it's conceptually simple.

### [HyperCube][7]

Like a grid but has 4 dimensions. There are more connections
    between peers so it's more efficient

### [Mesh][4] / [Random network][8] / [Small world network][9]

Like a fully connected network but not fully connected. This
    means you have some number of connections per node but not
    all of them. With an emphasis on no structure.

A good algorithm has shorter jump distances then hypercubes.

## Preventing network splits

When you construct any network which isn't fully connected there
    is a good chance that the network will split into two or
    more parts because connecting nodes go down.

One solution is to throw servers at the network to keep it
    together. This is far from optimum.

Another is to use send address announcements to nodes within a
    certain amount of jumps. This allows small islands to become
    larger by opening newer connections and favouring new
    connections that are further away hoping to expand the
    network size.

## Random walks

### More reading needed

Probably means asking nearby nodes for other their nearby nodes
    and continiously randomly choosing new nodes to go talk to.

This assumes that as you make more hops the odds are you will
    be further away. You can do this walking until you need a
    new connection because one of your peers dropped and can
    then connect to a far away random peer immediately.

## Chaos nets.

Read more.



## References

 - [Gnutella][10]
 - [Peer to peer talk][11]

## Installation

`npm install topology`

## Contributors

 - Raynos

## MIT Licenced

  [1]: http://en.wikipedia.org/wiki/Fully-connected_network
  [2]: http://en.wikipedia.org/wiki/Star_network
  [3]: http://en.wikipedia.org/wiki/Ring_network
  [4]: http://en.wikipedia.org/wiki/Mesh_networking
  [5]: http://en.wikipedia.org/wiki/Network_topology#Tree
  [6]: http://en.wikipedia.org/wiki/Grid_network
  [7]: http://www.pjort.com/randpeer/p2p-slides/sld010.htm
  [8]: http://www.pjort.com/randpeer/p2p-slides/sld011.htm
  [9]: http://en.wikipedia.org/wiki/Small-world_network
  [10]: http://en.wikipedia.org/wiki/Gnutella
  [11]: http://www.youtube.com/watch?v=LXAW4HwFt58&feature=relmfu
