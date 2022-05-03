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
    await interaction.reply("You Sick #$%!");
  } else if (interaction.commandName === "thejoke") {
    await interaction.reply("A Californian goes hunting with his friend from Idaho. One day they come across a sheep with it's head stuck in a fence. The Idahonian says to his California buddy, \"opportunities like this don't come to often. If you don't mind, I'm going to take advantage of it.\" The Idahonian drops his pants and has his way with the stuck ewe. The Californian says, \"mind if I get in on the action? \"Of course not\", replies the guy from Idaho. So the Californian proceeds to push the ewe through the fence, and then sticks his head in it......\n andy is the californian");
  }
});

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

client.login(process.env.CLIENT_TOKEN);
