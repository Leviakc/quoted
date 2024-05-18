import { Hono } from "hono";
// import {Hono } from 'https://deno.land/x/hono@v4.3.7/mod.ts'

const app = new Hono();

app.get("/", (c) => c.text("Hello Deno!"));

Deno.serve(app.fetch);
