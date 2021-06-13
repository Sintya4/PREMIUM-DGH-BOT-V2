const db = require("quick.db");

const Discord = require("discord.js");
module.exports = {
  name: "embed",
  category: "utility",
  description: "Get bot embed :/",
  usage: "embed [...Text]\nembed -json [Raw JSON]",
  args: true,
  run: async (client, message, args) => {
    message.delete();
    const [key, ...value] = args;
    switch (key) {
      case "-json": {
        try {
          let msg2 = await client.EEmoji(args.slice(1).join(" "), client);

          const json = JSON.parse(msg2);
          return message.channel.send({
            embed: json
          });
        } catch (error) {
          return message.channel.send(
            "go to the web: https://embedbuilder.nadekobot.me/" //  `\`\`\`\n$ embed -json {"title": "My title","color":"Name color","description": "My description"}\n\`\`\`\`\`\`\n$ embed -json {"author": {"name": "My author name", "icon_url": "url here"}, "description": "My description"}\n\`\`\`\`\`\`\n$ embed -json {"fields": [{"name": "My field name", "value": "My field value"}, {"name": "My field name", "value": "My field value", "inline": false}]}\n\`\`\``
          );
        }
      }
    }
    let msg = await client.EEmoji(args.join(" "), client);
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(msg).setColor("RANDOM")
    );
  }
};
