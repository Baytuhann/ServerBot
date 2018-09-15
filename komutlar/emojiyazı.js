const Discord = require('discord.js');

const mapping = [
    '': '    ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:',
];

'abcdefghijklmnoprst'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = `:regional_indicators_$(c):`
})



exports.run = function(client, message, args) {

    if (args.length < 1) return message.repl('Lütfen Bir Mesaj yaz **DOĞRU KULLANIM** !yazı <mesaj>')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: '',
    description: '',
    usage: ''
};