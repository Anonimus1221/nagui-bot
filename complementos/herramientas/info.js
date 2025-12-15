module.exports = {
  nome: 'info',
  desc: 'Muestra información del bot',
  run: async (client, message, args) => {
    try {
      const uptime = process.uptime();
      const hours = Math.floor(uptime / 3600);
      const text = `🤖 *Bot Nagui*\n\n📱 Versión: 1.4\n👨‍💻 Creador: programmer\n🌐 Lenguaje: Español\n⏱️ Activo: ${hours}+ horas\n\n✨ Funciones: Admin, Descargas, IA, Logos, Juegos, Economía, Herramientas, Busquedas y más.`;
      message.reply(text);
    } catch (error) {
      console.error('Error en info:', error);
      message.reply('❌ Error al mostrar información.');
    }
  }
};