class Guid {
    static create() {
        let s4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        let guid = (s4() + s4() + '-' + s4() + '-4' + s4().substr(0, 3) + '-' + s4() + '-' + s4() + s4() + s4()).toLowerCase();
        return guid;
    }
}

module.exports = Guid;