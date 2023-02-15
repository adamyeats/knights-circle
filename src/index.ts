/**
 * ListNode is a generic class that can be used to create a linked list.
 */
class ListNode<T extends ListNode<T>> {
  public next: T | null = null;

  constructor() {
    this.next = null;
  }
}

/**
 * PlayerNode is a ListNode that contains a hp property for use in the game.
 */
class PlayerNode extends ListNode<PlayerNode> {
  public hp: number;
  public name: string;

  constructor(name: string = 'Player') {
    super();
    this.hp = 10;
    this.name = name;
  }

  public isDisqualified() {
    return this.hp <= 0;
  }

  public takeDamage(damage: number) {
    this.hp -= damage;

    if (this.hp < 0) {
      this.hp = 0;
    }
  }
}

/**
 * LinkedList is a generic class that can be used to create a linked list.
 */
class LinkedList<T extends ListNode<T>> {
  public length: number = 0;
  public head: T | null = null;
  public tail: T | null = null;

  public append(node: T) {
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      node.next = node;
    } else {
      node.next = this.head;
      this.tail!.next = node;
      this.tail = node;
    }

    this.length++;
  }

  public getIndex(node: T): number {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current === node) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1; // node not found in list
  }

  // BONUS ITERATOR!!!
  *[Symbol.iterator]() {
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (current) {
        yield current;
        current = current.next;
      }
    }
  }
}

/**
 * Die is a class that simulates a die.
 */
class Die {
  static roll() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

/**
 * Game is a class that simulates the Knights Circle game.
 */
class Game {
  public list = new LinkedList<PlayerNode>();

  constructor(players: string[]) {
    players.forEach(player => {
      this.list.append(new PlayerNode(player));
    });
  }

  public simulate() {
    if (this.list.length === 0) {
      return;
    }

    let current = this.list.head!;
    let previous = this.list.tail!;

    if (this.list.head?.isDisqualified()) {
      this.list.head = this.list.head.next!;
      this.list.length--;
    }

    while (current.next !== current) {
      const next = current.next;

      if (current.isDisqualified()) {
        console.log(
          `${current.name} has been eliminated!`
        );

        previous.next = next;
        this.list.length--;
      } else {
        next!.takeDamage(Die.roll());
        previous = current;
      }

      current = next!;
    }

    this.list.tail = previous;
  }

  public getWinner() {
    if (this.list.length !== 1) {
      return null;
    }
  
    let current = this.list.head;

    while (current && current.isDisqualified()) {
      current = current.next;
    }
  
    return current;
  }
}

function main() {
  const game = new Game([
    'Arthur',
    'Lancelot',
    'Galahad',
    'Bedivere',
    'Percival',
    'Mordred'
  ]);

  while (game.list.length > 1) {
    game.simulate();
  }

  const winner = game.getWinner();

  console.log(`Winner: ${winner ? winner.name : 'none'}`);
}

main();
