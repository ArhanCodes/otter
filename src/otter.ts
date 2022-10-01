import "./lib/setup.js";
import { Client } from '@skyra/http-framework';
const client = new Client({
	discordPublicKey: process.env.DISCORD_PUBLIC_KEY
});

// Load all the commands and message component handlers:
await client.load();

// Start up the HTTP server;
await client.listen({ port: 3000 });