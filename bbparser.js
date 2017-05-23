'use strict';
const BBCodeParser = require('bbcode-parser');
const BBTag = require('bbcode-parser/bbTag');

let bbTags = BBCodeParser.defaultTags();

bbTags["center"] = BBTag.createTag("center", function (tag, content, attr) {
    return "<center>" + content + "</center>";
});

bbTags["CENTER"] = BBTag.createTag("center", function (tag, content, attr) {
    return "<center>" + content + "</center>";
});

bbTags["LEFT"] = BBTag.createTag("span", function (tag, content, attr) {
    return "<span>" + content + "</span>";
});

bbTags["RIGHT"] = BBTag.createTag("span", function (tag, content, attr) {
    return "<div style='float: right;'>" + content + "</div>";
});

let finishParse = function(bbcode) {
    bbcode = bbcode.replace(/\[FONT=[[a-zA-Z]*]/g, "<span style='font-family: Arial;'>");
    bbcode = bbcode.replace(/\[\/FONT]/g, "</span>");
    bbcode = bbcode.replace(/\[SIZE=[0-9]]/g, "<span>")
    bbcode = bbcode.replace(/\[\/SIZE]/g, "<span>")
    return bbcode;
}

module.exports.parser = new BBCodeParser(bbTags);
module.exports.finishParse = finishParse;
