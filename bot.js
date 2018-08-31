const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Night`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
client.on('message', message => {
if (message.content.startsWith("*ban")) {
    var mention = message.mentions.members.first();
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban();
    
    message.channel.send("تم أعطاء باند الى : " + mention.user.username);
};
});
client.on('message', message => {
if (message.content.startsWith("*kick")) {
    var mention = message.mentions.members.first();
    if (!message.member.hasPermission("KICK_MEMBERS")) return;
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.user.username);
};
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', message => {

    if (message.content === "*mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//™¦༺♚ƙἶղց|MaS♚༺¦™#7105
if (message.content === "*unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }
  client.on('message', msg => { 
    if (msg.content.startsWith(`*warn`)) {
      if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
      if (!args[0]) return msg.reply('اكتب السبب')
      //غير اسم الروم او سوي روم بذا الاسم 
      if (msg.guild.channels.find('name', 'warns')) {
        //اذا غيرت فوق غير هنا كمان 
        msg.guild.channels.find('name', 'warns').send(`
      تم اعطائك انذار : ${msg.mentions.members.first()}
      لأنك قمت بما يلي
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
})
client.login(process.env.BOT_TOKEN);
