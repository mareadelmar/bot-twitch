//oauth:kbswiuymju4srblrwbb2208j2qztcx

const tmi = require("tmi.js");
require("dotenv").config();

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: "frankeinbot",
		password: process.env.token,
	},
	channels: ["frankeinbot"],
});

client.connect();

client.on("message", (channel, tags, message, self) => {
	// si es del self, ignorar

	const msn = message.toLowerCase();
	console.log(msn);

	if (msn.includes("!holi")) {
		console.log(tags, self);
		// se le pasa a dónde decirlo (tmb se puede mandar mensajes directos) y qué decir
		client.say(channel, "holis a vos");
	}

	if (msn === "!comandos") {
		client.say(channel, "Los comandos son: bla");
	}

	if (msn.includes("chimichanga")) {
		let chimis = [
			"llamen a moe, que larry está en cualquiera",
			"filmame esto, nestor",
			"hello, sidney",
			"veo gente muerta",
		];
		let random = Math.round(Math.random() * 5);
		client.say(channel, `${chimis[random]}, ${tags.username}`);
	}
});
