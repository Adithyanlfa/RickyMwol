const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Language = require('../language');

const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();

    

    

   

    

    

    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Adithyanlfa*

*owner number wa.me/917560831917*

*githublink : https://github.com/Adithyanlfa/RickyMwol

Special thanks to : https://github.com/Appuzlfa/thangamani

`}) 

}))
