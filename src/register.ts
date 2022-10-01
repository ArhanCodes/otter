import { Registry } from '@skyra/http-framework';
import "./lib/setup.js";
const registry = new Registry({
	token: process.env.DISCORD_TOKEN
});

// Load all the commands and message component handlers:
await registry.load();

// Register all global commands:
await registry.registerGlobalCommands();

// Register all the guild-restricted commands:
await registry.registerGuildRestrictedCommands();