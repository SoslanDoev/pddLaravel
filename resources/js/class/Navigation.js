class Navigation {
  static id = 0
  constructor(name, image, options) {
    this.id = ++Navigation.id
    this.active = false
    this.name = name
    this.image = image
    this.menu = options
  }
}

class NavigationMenu {
  static id = 0
  constructor(name, title, func) {
    this.id = ++NavigationMenu.id
    this.name = name
    this.title = title
    this.func = func
  }
}

export default {
  Navigation, // Класс навигации
  NavigationMenu, // Класс меню навигации 
}