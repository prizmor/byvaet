const { Client, GatewayIntentBits, Messageat } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
})

const TOKEN = process.env.BOT_TOKEN;

const byvaet = "бывает бивает ьывает ьивает быBAEт биBAEт ьыBAEт ьиBAEт быBAет биBAет ьыBAет ьиBAет бывAEт бивAEт ьывAEт ьивAEт быBаEт биBаEт ьыBаEт ьиBаEт бываET биваET ьываET ьиваET бывAеT бивAеT ьывAеT ьивAеT быBаеT биBаеT ьыBаеT ьиBаеT бывAET бивAET ьывAET ьивAET быBAеT биBAеT ьыBAеT ьиBAеT быBаET биBаET ьыBаET ьиBаET быBAET биBAET ьыBAET ьиBAET бываEт биваEт ьываEт ьиваEт быBает биBает ьыBает ьиBает бывAет бивAет ьывAет ьивAет бываеT биваеT ьываеT ьиваеT".split(" ");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
    if (message.author.discriminator === client.user.discriminator) return;

    for (let i = 0; i < byvaet.length; i++) {
        if (message.content.toUpperCase().indexOf(byvaet[i].toUpperCase()) !== -1) {
            return message.reply("https://cdn.discordapp.com/attachments/1014783512731193356/1046163144390746133/image.png");
        }
    }
})

client.login(TOKEN);