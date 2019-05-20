const Chat = require('../models').Chat
const crypto = require('crypto');

module.exports = {
    list (req, res) {

        return Chat.findAll().then(chats => {
            res.status(200).json({chats: chats})
        }).catch((e) => {
            res.status(400).json({rejected: e})
        })
    },

    create (req, res) {
        const body = req.body
        const chatName = body.name
        const keyRaw = chatName + '_' + Date.now()
        const key = crypto.createHash('md5').update(keyRaw).digest("hex");

        return Chat.create({key: key, name: chatName})
            .then(() => Chat.findOrCreate({where: {key: key}}))
            .then(([chat, created]) => {
                res.status(200).json({created: chat.get()})
            }).catch((e) => {
            res.status(400).json({rejected: e})
        });
    },
}
