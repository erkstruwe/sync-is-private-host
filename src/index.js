var syncIsPrivateHost = {}

syncIsPrivateHost.regexes = [
    /^localhost$/,
    /\.local$/,
    /\.loc$/,
    /\.dev$/,
    /(^127\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$)|(^10\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$)|(^172\.1[6-9]{1}[0-9]{0,1}\.[0-9]{1,3}\.[0-9]{1,3}$)|(^172\.2[0-9]{1}[0-9]{0,1}\.[0-9]{1,3}\.[0-9]{1,3}$)|(^172\.3[0-1]{1}[0-9]{0,1}\.[0-9]{1,3}\.[0-9]{1,3}$)|(^192\.168\.[0-9]{1,3}\.[0-9]{1,3}$)/
]

syncIsPrivateHost.isPrivate = function(host) {
    return syncIsPrivateHost.regexes.some(function(regex) {
        return regex.test(host)
    })
}

module.exports = syncIsPrivateHost
