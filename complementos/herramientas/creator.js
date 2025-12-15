module.exports = {
  nome: 'creator',
  desc: 'Muestra información del creador',
  run: async (client, message, args) => {
    try {
      const text = `👨‍💻 *Creador del Bot*\n\n🤖 Bot Nagui\n🧑‍💼 Nombre: programmer\nℹ️ Versión: 1.0\n\n❤️ ¡Gracias por usar Nagui!`;
      message.reply(text);
    } catch (error) {
      console.error('Error en creator:', error);
      message.reply('❌ Error al mostrar información del creador.');
    }
  }
};