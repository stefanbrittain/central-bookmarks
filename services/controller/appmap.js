'use strict';

module.exports = class AppMap {
    constructor(keyword, url) {
        this.keyword = keyword;
        this.url = url;
    }

    payload() {
        return {url: this.url, ignore:"off"};
    }
}
