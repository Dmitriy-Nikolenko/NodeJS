const fs = require('fs');
const readStream = new fs.ReadStream('./access.log', 'utf8');
const { Transform } = require('stream');
let fileWs_89 = fs.createWriteStream("89.123.1.41_requests.log");
let fileWs_34 = fs.createWriteStream("34.48.240.111_requests.log");
let find_89 = /^89.123.1.41 *(.+)/gm;
let find_34 = /^34.48.240.111 *(.+)/gm;

const transformStreamFind_89 = new Transform({
    transform(chunk, encoding, callback) {
        const transformedChunk = chunk.toString().match(find_89).toString()
            .replaceAll(',', '\n')
        this.push(transformedChunk)
       callback();
    }
});

const transformStreamFind_34 = new Transform({
    transform(chunk, encoding, callback) {
        const transformedChunk = chunk.toString().match(find_34).toString()
            .replaceAll(',', '\n')
        this.push(transformedChunk)
        callback();
    }
});


readStream.pipe(transformStreamFind_89).pipe(fileWs_89)
readStream.pipe(transformStreamFind_34).pipe(fileWs_34)