import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './routes/index.routes.ts';

const app = new Application();
const port = 8080;

console.log('running on port ', port);


app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port });