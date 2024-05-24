"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Table = ({ columns, data }) => {
    return (react_1.default.createElement("table", { className: "table" },
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null, columns.map((column, index) => (react_1.default.createElement("th", { key: index }, column.header))))),
        react_1.default.createElement("tbody", null, data.map((row, rowIndex) => (react_1.default.createElement("tr", { key: rowIndex }, columns.map((column, colIndex) => (react_1.default.createElement("td", { key: colIndex }, row[column.accessor])))))))));
};
exports.default = Table;
