const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'dog',
        run: (client, message, args) => {
            function doRandHT() {
                var rand = [user];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
              
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setImage(message.mentions.users.first() || message.author)
        message.channel.send(rollembed);   
    }
        
    }