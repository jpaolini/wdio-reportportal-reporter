"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class StartTestItem {
    constructor(name, type) {
        this.name = "";
        this.retry = false;
        this.name = name;
        this.type = type;
        if (this.name.length > 256) {
            this.name = this.name.slice(0, 256);
        }
    }
    addTags() {
        const tags = utils_1.parseTags(this.name);
        if (tags.length > 0) {
            this.tags = tags;
            this.attributes = tags.map(value => ({ value }));
        }
    }
}
exports.StartTestItem = StartTestItem;
class EndTestItem {
    constructor(status, issue) {
        this.status = status;
        if (issue) {
            this.issue = issue;
        }
    }
}
exports.EndTestItem = EndTestItem;
class Issue {
    // tslint:disable-next-line
    constructor(issue_type) {
        this.issue_type = issue_type;
        this.issueType = issue_type;
    }
}
exports.Issue = Issue;
class StorageEntity {
    constructor(type, id, promise, wdioEntity) {
        this.type = type;
        this.id = id;
        this.promise = promise;
        this.wdioEntity = wdioEntity;
    }
}
exports.StorageEntity = StorageEntity;
