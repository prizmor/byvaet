const { Client, GatewayIntentBits, Messageat } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
})

const TOKEN = "MTA0NjE4NzI2NDU3MDU3Mjg3MQ.G8Msck.1NG3-a-ceqD9hldSRO6PGS7loTZ5lHSapBKenw";

const byvaet = ["бывает", ",sdftn", ",SDFTN", "БЫВАЕТ", "бывет"];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
    if (message.author.discriminator === client.user.discriminator) return;

    for (let i = 0; i < byvaet.length; i++) {
        if (message.content.indexOf(byvaet[i]) !== -1) {
            return message.reply("https://cdn.discordapp.com/attachments/1014783512731193356/1046163144390746133/image.png");
        }
    }
})

client.login(TOKEN);