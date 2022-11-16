import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  totalPrice() {
    if (this._items.length > 0) {
      let sum: number = 0;
      this._items.forEach(a => sum += a.price);
      return sum;
    }
    return 0;
  }

  discount(d: number) {
    if (d > 0 && d <= 100) {
      return this.totalPrice() * (1 - d / 100);
    }
    return this.totalPrice()
  }

  deleteItem(id: number): void {
    let index = this._items.findIndex(a => a.id === id);
    if (index !== -1) {
      this._items.splice(index, 1);
    }
  }
}

/* Реализуйте в нём несколько дополнительных функций:
    - Функцию, считающую суммарную стоимость (без учёта скидки)
    - Функцию, считающую суммарную стоимость (с учётом скидки) - скидка должна быть параметром, передаваемым в эту функцию
    - Функцию, позволяющую удалять уже добавленный в корзину объект по полю id
*/