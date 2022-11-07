import { Command, RegisterCommand } from '@skyra/http-framework';

@RegisterCommand((builder) =>
	builder //
		.setName('otter')
		.setDescription('Sends an image of an otter')
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
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025712736098865154/otter12.png",
			"https://cdn.discordapp.com/attachments/1009420908747837451/1025708052663521290/otter13.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039074074946703360/otter14.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039074075357761608/otter15.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039074075559071804/otter16.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039074075802345532/otter17.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039074076293091348/otter18.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039074076498595850/otter19.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039074076796395580/otter20.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039074077358428160/otter21.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039075234168459354/otter22.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039075234403336242/otter23.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039075234764038174/otter24.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039075234977959936/otter25.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039075235170893854/otter26.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039075235372212264/otter27.jpg",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039075235577745458/otter28.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039075235883925564/otter29.png",
			"https://cdn.discordapp.com/attachments/977652975008890880/1039075236097826906/otter30.png",
		];
		const num = Math.floor(Math.random() * images.length);
		return interaction.reply({ content: `${images[num]}` });
	}
}
