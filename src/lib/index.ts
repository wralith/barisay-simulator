// place files you want to import through the `$lib` alias in this folder.
export class Game {
  hp = 100;
  sanity = 100;
  currentDialog: Dialog = act1.wakeUp;

  get msg() {
    return this.currentDialog.text;
  }

  get routes() {
    return this.currentDialog.routes;
  }
}

type Encounter = {
  text: string;
  next: Dialog;
};

type DialogUnion = "wakeUp" | "acceptAram" | "readMessage" | "askForBreakfast" | "yellMom";

type Dialog = {
  text: string;
  routes: {
    choice: string;
    next: DialogUnion;
  }[];
  encounter?: Encounter;
};

export const act1: Record<DialogUnion, Dialog> = {
  wakeUp: {
    text: "You wake up and see a message on your phone",
    routes: [
      {
        choice: "Accept",
        next: "readMessage"
      },
      {
        choice: "Go back to sleep",
        next: "wakeUp"
      },
      {
        choice: "Ignore it and ask your mom for breakfast",
        next: "askForBreakfast"
      }
    ]
  },

  readMessage: {
    text: "You read the message, its from your cousin, he wants to play ARAM",
    routes: [
      {
        choice: "Accept",
        next: "acceptAram"
      },
      {
        choice: "Ignore it and ask your mom for breakfast",
        next: "askForBreakfast"
      }
    ]
  },

  askForBreakfast: {
    text: "You ask your mom for breakfast, she rushed into your room and aggressively asking what you want for breakfast",
    routes: [
      {
        choice: "Yell at her",
        next: "yellMom"
      },
      {
        choice: "Ignore and go back to sleep",
        next: "wakeUp"
      }
    ]
  },

  acceptAram: {
    text: "You accept your cousins call, opened a computer, login your lol account and see your cousins aren't online",
    routes: [
      {
        choice: "accept",
        next: "acceptAram"
      },
      {
        choice: "ask your mom for breakfast",
        next: "askForBreakfast"
      }
    ]
  },

  yellMom: {
    text: "AaaaaaaaaaAAAAAAAaAaAaAaAaAAaAAaAAa",
    routes: [
      {
        choice: "Go back to sleep",
        next: "wakeUp"
      }
    ]
  }
};
