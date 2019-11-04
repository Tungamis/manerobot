const Discord = require('discord.js')
const {Client, Attachment} = require('discord.js');
const bot  = new Discord.Client();
const client = require('discord.js');
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
const token = process.env.BOT_TOKEN;
http.creatServer().listen(port);
const token = 'NjQwMjA0OTY4NTczNTM0MjE5.Xb9LSg.-cWr9IQmLt2gsszwqSeTomA1UZU';

const PREFIX = 'manero ';

const ytdl = require("ytdl-core");

var servers = {};

bot.on('ready', ()=>{
    console.log('This bot is online!');
    bot.user.setActivity('so manero kkk',  {type: 'LISTENING'}).catch(console.error);
})

bot.on('guildMemberAdd', member=>{
    const channel = member.guild.channels.find(channel => channel.name === "bem-vindx");
    if(!channel) return;
    const bv = new Discord.RichEmbed()
            .setTitle('BEM-VINDO(A) AO DISCORD MANERO')
            .addField('Novo membro:', member)
            .addField('Regras:', 'qq é isso kkkk')
            channel.sendEmbed(bv);
});

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'gurenge':
            msg.channel.sendMessage('tsuyoku nareru riyū o shitta boku o tsurete susume dorodarake no sōmatō ni you kowabaru kokoro furueru te wa tsukamitai mono ga aru sore dake sa yoru no nioi ni (Ill spend all thirty nights) sora nirande mo (Staring into the sky) kawatte ikeru no wa jibun jishin dake sore dake sa tsuyoku nareru riyū o shitta boku o tsurete susume dōshi tatte kesenai yume mo tomarenai ima mo dareka no tame ni tsuyoku narerunara arigato kanashimi yo sekai ni uchinomesa rete makeru imi o shitta guren no hana yo sakihokore unmei o terashite inabikari no zatsuon ga mimi wo sasu tomadou kokoro yasashii dake ja mamorenai mono ga aru wakatteru kedo suimenka de karamaru zenaku sukete mieru gizen ni tenbatsu Tell me why, tell me why, tell me why I dont need you itsuzai no hana yori idomi tsuzuke saita ichirin ga utsukushii ranbou ni shikitsumerareta togedarake no michi mo honki no boku dake ni arawareru kara norikoete miseru yo kantan ni katazukerareta mamorenakatta yume mo guren no shinzou ni ne wo hayashi kono chi ni yadotte hito shizeru hakanai chiriyuku ketsumatsu mujou ni yaburete himei no kaze fuku dareka no warau kage dareka no nakigoe daremo ga shiawase wo negatteru dōshi tatte kesenai yume mo tomarenai ima mo dareka no tame ni tsuyoku narerunara arigato kanashimi yo sekai ni uchinomesa rete makeru imi o shitta guren no hana yo sakihokore unmei o terashite unmei o terashite');
            msg.react('😎');
            break;
            case 'bartels':
            msg.channel.sendMessage('malz tenho senai');
            msg.react('😎');
            break;
        case 'kenny':
            msg.channel.sendMessage('é so amiga só');
            msg.react('😎');
            break;
        case 'gui':
            msg.channel.sendMessage('solteirokkk');
            msg.react('😎');
            break;
        case 'serra':
            msg.channel.sendMessage('choraokkk');
            msg.react('😎');
            break;
        case 'bomdia':
            msg.reply('bomdia kk');
            msg.react('😎');
            break;
        case 'boatarde':
            msg.reply('boatarde kk');
            msg.react('😎');
            break;
        case 'boanoite':
            msg.reply('boa noite kk');
            msg.react('😎');
            break;
        case 'shin':
            msg.channel.sendMessage('hector gay kkk');
            msg.react('😎');
            break;
        case 'bende':
            msg.channel.sendMessage('bobaokkk')
            msg.react('😎');
            break;
        case 'votacao':
            const vt = new Discord.RichEmbed()
            .setTitle('Iniciar Votação')
            .setDescription("Votação de sim ou não");

            if(!args[1]){
                msg.channel.send(vt);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            msg.channel.send("📋 "+"**"+ msgArgs + "**").then(msgReaction => {
                msgReaction.react("👍");
                msgReaction.react("👎");
                msg.delete(2000).catch(console.error);
            })
        case 'sama':
            if(!msg.member.roles.find(r => r.name === "Muzan" || "Oyakata-sama" || "Upper Moons" )) return msg.channel.send('quem é vc ? kkkkk')
            msg.channel.sendMessage('nois é foda kkkk');
            msg.react('😎');
            break;
        case 'selfie':
            const attachment = new Attachment('https://images-na.ssl-images-amazon.com/images/I/71lTI4jsOnL._SX466_.jpg')
            msg.channel.send(msg.author, attachment);
            msg.react('😎');
            break;
        case 'o':
            const attachment2 = new Attachment('https://66.media.tumblr.com/8b022b20c5dda80dbea3e23b3bd7c61c/tumblr_inline_pro1vk6FOw1rd8o7r_400.png')
            msg.channel.send(msg.author, attachment2);
            msg.react('😎');
            break;
        case 'cat':
            const attachment3 = new Attachment('https://i.kym-cdn.com/entries/icons/original/000/030/157/womanyellingcat.jpg')
            msg.channel.send(attachment3);
            msg.react('😎');
            break;
        case 'otaku':
            msg.channel.sendMessage('fedido');
            msg.react('😎');
            break;
        case 'rode':
            msg.channel.sendMessage('o rode é foda');
            msg.react('😎');
            break;
        case 'clear':
            if(!args[1]) return msg.reply('Erro, sem argumentos suficientes')
            msg.channel.bulkDelete(args[1]);
            break;
        case 'vadia':
            msg.channel.sendMessage('puta');
            msg.react('😎');
            break;
        case 'puta':
            msg.channel.sendMessage('vadia');
            msg.react('😎');
            break;
        case 'penis':
            msg.channel.sendMessage('pirocakkk');
            msg.react('😎');
            break;
        case 'piroca':
            msg.channel.sendMessage('peniskk');
            msg.react('😎');
            break;
        case 'burro':
            msg.channel.sendMessage('é vc vadia puta');
            msg.react('😎');
            break;
        case 'fome':
            msg.channel.sendMessage('comia fodase')
            msg.react('😎');
            break;
        case 'info':
            const embed = new Discord.RichEmbed()
            .setTitle('Informações do otaku')
            .addField('IGN:', msg.author.username)
            .addField('Servidor', msg.guild.name)
            msg.channel.sendEmbed(embed);
            msg.react('😎');
            break;
    }
        
});

bot.on('error', err => {
    console.log(err);
});

bot.login(token);
