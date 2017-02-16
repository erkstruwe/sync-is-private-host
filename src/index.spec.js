const syncIsPrivateHost = require('./index')

describe('sync-is-private-host', function() {
    describe('isPrivate', function() {
        beforeEach(function() {
            this.fn = syncIsPrivateHost.isPrivate
        })
        it('should return true for matches', function() {
            expect(this.fn('localhost')).toBe(true)
            expect(this.fn('127.0.0.1')).toBe(true)
            expect(this.fn('192.168.0.1')).toBe(true)
            expect(this.fn('192.168.1.231')).toBe(true)
        })
        it('should return false for matches', function() {
            expect(this.fn('www.google.com')).toBe(false)
        })
    })
    describe('isPublic', function() {
        beforeEach(function() {
            this.fn = syncIsPrivateHost.isPublic
        })
        it('should return true for matches', function() {
            expect(this.fn('localhost')).toBe(false)
        })
    })
})
