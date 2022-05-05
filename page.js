import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require("fs");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync("./src/index.html");
const page = new JSDOM(html);

export default page;