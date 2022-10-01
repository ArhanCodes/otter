import { Command, RegisterCommand } from '@skyra/http-framework';

@RegisterCommand((builder) =>
	builder //
		.setName('img')
		.setDescription('Sends an image of an otter.')
)
export class UserCommand extends Command {
	public override chatInputRun(interaction: Command.ChatInputInteraction) {
		const images: string[] = [
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025707971516321842/otter1.jpg",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025707971944132648/otter2.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025707972443263027/otter3.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025707973072404581/otter4.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025708005536313364/otter5.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025708005779587092/otter6.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025708006169661440/otter7.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025708006396145815/otter8.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025708051593961522/otter9.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025708051979841607/otter10.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025708052395073607/otter11.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025708052663521290/otter13.png",
		];
		const num = Math.floor(Math.random() * images.length);
		return interaction.reply({ content: `${images[num]}` });
	}
}
