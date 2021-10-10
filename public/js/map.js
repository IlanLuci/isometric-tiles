const gn = '#32a852';
const be = '#4287f5';
const gy = '#b4b8bf';
const RE = [gy, 'rise'];
const RK = [gn, 'rock'];

const map = [
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
]

//#6b6f77