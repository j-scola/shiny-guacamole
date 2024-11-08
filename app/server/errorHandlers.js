module.exports = {
    fileNotPresent: function (err, res) {
        res.writeHead(500);
        res.end(err.message);
        return;
    },
    requestUrlNotSupported: function (res) {
        res.writeHead(404);
        res.end('Not Found');
        return;
    }
}
