
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const { BrowserWorker } = require("browser-worker");


function useSleep(s: number) {
    return new Promise(resolve => setTimeout(resolve, s * 1000))
}

async function test() {
  const worker = new BrowserWorker();
  worker.runTask(async (page: any) => {
    await page.goto("https://example.com/");
    await  useSleep(60)
  });
  console.log(import.meta.url);
}

export default test;
