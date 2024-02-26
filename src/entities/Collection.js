import { Block } from "./Block";

Object.setPrototypeOf(Collection, Block);

export function Collection(props) {
    Block.call(this, props);

    this.type = "collection";
    this.schema = props.schema;
    this.format = props.format;
    this.templatePages = props.template_pages;
}

Collection.prototype.getSchema = function() {
    return this.schema;
}

Collection.prototype.getTemplatePages = function() {
    return this.templatePages;
}

Collection.prototype.getPropertyNamePostfixed = function(id, name, type) {
    let postfix = 1;
    let postfixedName = name;
    let property = this.getPropertyByName(name);

    while(property && property.id !== id && property.type === type) {
        postfixedName = name + " " + postfix;
        if(!this.getPropertyByName(postfixedName)) {
            break;
        }
        postfix++;
    }

    return postfixedName;
}

Collection.prototype.getPropertyByName = function(name) {
    return Object.values(this.getSchema()).find(property => property.name === name);
}

Collection.prototype.addProperty = function(id, property) {
    const schema = this.getSchema();

    const postfixedName = this.getPropertyNamePostfixed(id, property.name, property.type);

    schema[id] = {
        ...property,
        name: postfixedName,
        type: property.type,
    }
}

Collection.prototype.getPropertyById = function(id) {
    const schema = this.getSchema();

    return schema[id];
}