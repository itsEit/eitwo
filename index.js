require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const jokes = require("./jokes.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong on deez nutz!");
  } else if (interaction.commandName === "joke") {
    const jkId = randomIntFromInterval(1, 100);
    const line1 = jokes[jkId].part1;
    const line2 = jokes[jkId].part2;
    await interaction.reply(
      `${line1} \n ${line2} \n \n *If this joke is offensive.... Firlei came up with it*`
    );
  } else if (interaction.commandName === "bluewaffle") {
    await interaction.reply("You Sick Fuck");
  }
});

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

client.login(process.env.CLIENT_TOKEN);
