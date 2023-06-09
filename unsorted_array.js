"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unsortedArray = [];
for (var i = 0; i < 10000; i++) {
    unsortedArray.push(Math.floor(Math.random() * 10000));
}
exports.default = unsortedArray;
// NOTE: This is the ES6 way of doing it but the compiler errors on .from method
//const unsortedArray: number[] = Array.from({ length: 10000 }, () =>
//  Math.floor(Math.random() * 10000)
//);
