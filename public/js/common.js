export const ctx = document.getElementById("canvas").getContext("2d");
export const gridSize = 12;
export const gn = '#32a852';
export const be = '#4287f5';
export const gy = '#b4b8bf';
export const RE = [gy, 'rise'];
export const RK = [gn, 'rock'];
export const map = [
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gy, gy, gy, gy, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gy, gy, gy, gy, gn, gn, gn, gy, gy, gy, gy, gy, gy, gy, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gy, gy, gy, gy, gn, gn, gn, gy, gy, gy, gy, gy, gy, gy, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gy, gy, gy, gy, gy, gy, gy, gy, gy, RE, RE, RE, gy, gy, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gy, gy, gy, gy, gy, gy, gy, gy, gy, RE, RE, RE, gy, gy, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gy, gy, gy, gy, gy, gy, gy, gy, gy, RE, RE, RE, gy, gy, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gy, gy, gy, gy, gn, gn, gn, gy, gy, gy, gy, gy, gy, gy, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gy, gy, gy, gy, gy, gy, gy, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, RK, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, be, be, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, be, be, be, be, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, be, be, be, be, be, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, be, be, be, be, be, be, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, be, be, be, be, be, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, be, be, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn],
    [gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn, gn]
];