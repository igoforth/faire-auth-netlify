import type { Config } from "@netlify/functions";
import { auth } from "../../src/auth";

export default async (request: Request) => auth.handler(request);

export const config: Config = {
	path: "/*",
};
