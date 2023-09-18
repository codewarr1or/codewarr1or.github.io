const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

// Event handler for when the bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  // Send a message to a specific channel (replace 'CHANNEL_ID' with the actual channel ID)
  const channel = client.channels.cache.get('1132523364884435037');
  if (channel) {
    channel.send('Bot is online!');
  } else {
    console.error("The channel was not found.");
  }
});

// Get the bot token from the environment variable
const TOKEN = process.env.BOT_TOKEN;

// Log in to Discord with your app's token
client.login(TOKEN);
