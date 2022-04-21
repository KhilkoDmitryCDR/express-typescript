"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseData = (dataFromRequest) => {
    if (!isString(dataFromRequest) || !isData(dataFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dataFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) && !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromRequest;
};
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param);
};
const isString = (string) => {
    return typeof string === 'string';
};
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param);
};
const isData = (data) => {
    return Boolean(Date.parse(data));
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseData(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
