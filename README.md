# sync-is-private-host
Synchronously determine if a host is private (a.k.a. not publicly available). Works with hostnames and IPv4 addresses.

Please create an issue if you encounter false-positive or false-negative results. Thanks.

## Installation
`npm install sync-is-private-host`

## Usage
````
const syncIsPrivateHost = require('sync-is-private-host')

syncIsPrivateHost.isPrivate('localhost')
// true
syncIsPrivateHost.isPrivate('10.0.0.1')
// true
syncIsPrivateHost.isPrivate('www.google.com')
// false
syncIsPrivateHost.isPrivate('tiny.pictures')
// false

syncIsPrivateHost.isPublic('localhost')
// false
````
