module.exports = message => {
	const member = message.mentions.members.first();

	if (!member) {
		return message.reply("Who are you trying to kick? You must mention a user.")
	}

	if (!member.kickable) {
		return message.reply("I cannot kick this user. Sorry!")
	}

	return member.kick()
	.then(() => message.reply(member.user.tag + " was kicked"))
	.catch(err => message.reply("Sorry, an error occurred."))
}