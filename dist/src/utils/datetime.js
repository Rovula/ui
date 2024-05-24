"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimestampUTC = exports.getStartEndTimestampOfDay = exports.getEndDateOfDay = exports.getStartDateOfDay = exports.resloveTimestamp = void 0;
const resloveTimestamp = (timestamp) => {
    if (String(timestamp).length > 10)
        return timestamp / 1000;
    return timestamp;
};
exports.resloveTimestamp = resloveTimestamp;
// Set the time to the start of the day (00:00:00)
const getStartDateOfDay = (date) => {
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    return startDate;
};
exports.getStartDateOfDay = getStartDateOfDay;
// Set the time to the end of the day (23:59:59.999)
const getEndDateOfDay = (date) => {
    const startDate = new Date(date);
    startDate.setHours(23, 59, 59, 999);
    return startDate;
};
exports.getEndDateOfDay = getEndDateOfDay;
const getStartEndTimestampOfDay = () => {
    const startTime = getStartDateOfDay(new Date());
    const endTime = getEndDateOfDay(startTime);
    return {
        startTime,
        endTime,
    };
};
exports.getStartEndTimestampOfDay = getStartEndTimestampOfDay;
const getTimestampUTC = (date) => {
    const dateUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    return resloveTimestamp(dateUtc);
};
exports.getTimestampUTC = getTimestampUTC;
