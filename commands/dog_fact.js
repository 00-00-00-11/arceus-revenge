const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'dog_fact',
        run: (client, message, args) => {
            function doRandHT() {
                var rand = [`Dogs have a sense of time. It's been proven that they know the difference between a hour and five. If conditioned to, they can predict future events, such as regular walk times.`,`Your dog is as smart as a two-year old! Ever wonder why children around this age seem to have a special bond with the family dog? It could be because they speak the same language, roughly 250 words and gestures in fact.`,`A study at UCSD claims that your dog can genuinely get jealous when they see you display affection for another creature.`,`The United States has the highest pet dog population in the world. Approximately 75.8 million in fact.`,`Seeing eye dogs are trained to do their “business” on command. This way their owner can clean it up a bit easier. Some of the popular commands are “get busy” and “go time”.`,`Man’s best friend? Petting a dog and gazing into their eyes releases oxytocin (i.e the “love hormone”) not only for you, but for them as well.`,`The Saluki is the world’s oldest dog breed. They appear in ancient Egyptian tombs dating back to 2100 B.C.`,`Dachshunds were originally bred to fight badgers.`,`Dogs that have been spayed or neutered live longer than dogs who are intact.`,`More than half of all U.S presidents have owned dogs.`,`Stray dogs in Russia have learned how to ride the complex subway system, and get off at specific stops in search of food.`,`Your dog can smell your feelings. In fact, your dog’s sense of smell is approximately 100,000 times better than yours. So it shouldn’t be shocking that they can in fact, smell things such as fear. When a human is fearful, they perspire, and a dog is easily able to pick up on this change.`,`Dogs have wet noses because it helps to absorb scent chemicals.`,`Dogs can be trained to to detect cancer and other diseases in humans. Cancerous cells release different metabolic waste products than healthy cells in the human body. Dogs may even be able to sniff out cancer cells simply through smelling someone’s breath.`,`Do you have a dog that experiences separation anxiety? Try leaving some clothing with him that you’ve worn. It’s been proven that the scent you leave behind on your clothes can help ease your dog’s separation anxiety.`,`When your dog is carefully choosing the perfect place to do his business, it is because they prefer to go poop in alignment with the Earth’s magnetic field.`,`Have you ever wondered why your dog curls up in a ball when they sleep? It’s actually an age-old instinct to keep themselves warm and to protect vital organs while they sleep.`,`Your dog can help get you a date! One study showed that a man’s chances of getting a girl’s phone number went from 10% to 33%, just by having a dog with them. In the study, a staggering 66% of men and women would not date someone who didn’t like pets.`,`Labradors have been the most popular breed in the United States for the last 26 years.`,`There are approximately 600 million dogs in the world. It is estimated that nearly 400M of those dogs are strays.`,`Spiked collars were originally fashioned in ancient Greece to protect dogs’ throats from wolf attacks.`,`Former Michael Vick dogs, Sox and Hector, are certified therapy dogs. They now spend their days cheering up people at hospitals, nursing homes, and schools.`,`Scientists believe that the world’s first known dog lived 31,700 years ago. This prehistoric dog resembled a large Siberian Husky.`];
                
                return rand[Math.floor(Math.random()*rand.length)];
                }
              
            let rollembed = new RichEmbed()
        .setColor("#15f153")
        .setDescription(doRandHT())
        message.channel.send(rollembed);   
    }
        
    }
