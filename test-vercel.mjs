import * as handler from './.vercel/output/functions/__server.func/index.mjs';

async function test() {
  const req = new Request('http://localhost/');
  const res = await handler.default.fetch(req, {}, {});
  console.log("Status:", res.status);
  const text = await res.text();
  console.log("Body length:", text.length);
  if (text.includes("This page didn't load")) {
    console.log("ERROR COMPONENT RENDERED!");
    // check for the red text
    if (text.includes("text-red-500")) {
      console.log("Red text found!");
      const match = text.match(/<p className="mt-2 text-sm text-red-500.*?>(.*?)<\/p>/s);
      if (match) console.log("Error details:", match[1]);
    }
  } else {
    console.log("Rendered successfully!");
  }
}
test().catch(console.error);
