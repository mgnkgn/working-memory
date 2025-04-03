export class Symbol {
  constructor(id, name, emoji) {
    this.id = id;
    this.name = name;
    this.emoji = emoji;
  }
}

export const symbols = [
  new Symbol(1, "Star", "⭐"),
  new Symbol(2, "Heart", "❤️"),
  new Symbol(3, "Circle", "⚫"),
  new Symbol(4, "Triangle", "🔺"),
  new Symbol(5, "Square", "🟦"),
  new Symbol(6, "Diamond", "💎"),
  new Symbol(7, "Lightning", "⚡"),
  new Symbol(8, "Music", "🎵"),
];
