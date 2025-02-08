export default class REPL {
  decoder: TextDecoder

  constructor() {
    this.decoder = new TextDecoder();
  }

  async run(): void {
    for await (const chunk of Deno.stdin.readable) {
      const text = this.decoder.decode(chunk).replace('\n', ''); // Delete linebreak

      switch (text) {
        case "q":
          process.exit(0);
          break;

        default:
          console.log("Unknown text is inputed: ", text);
          break;
      }
    }
  }
}
