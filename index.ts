import { DiscordCaptcha } from "./src/captcha";
import * as fs from 'fs';

const captcha = new DiscordCaptcha();


// Writes the captcha to captcha.png and prints out the answer for someone to compare
const out = fs.createWriteStream('./captcha.png');
captcha.PNGStream().pipe(out);
console.log(`Answer: ${captcha.value()}`);
