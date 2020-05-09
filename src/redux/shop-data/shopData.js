const SHOP_DATA = {
  coffee: {
    id: 1,
    title: 'coffee',
    route: '/coffee',
    products: [
      {
        id: 1,
        title: 'Hot Chcolate',
        route: '/hot-chocolate',
        price: 3.50,
        description: '12oz drink',
        imgUrl: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
      },
      {
        id: 2,
        title: 'Campfire Mocha',
        route: '/campfire-mocha',
        price: 5.50,
        description: '12oz drink. 2oz espresso, 10oz of milk and our house marshmallow/chocolate syrup.',
        imgUrl: 'https://images.unsplash.com/photo-1563320974-c69da83a1c5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      },
      {
        id: 3,
        title: 'Nitro Vanilla Latte',
        route: '/nitro-vanilla-latte',
        price: 4,
        description: '12oz nitro cold brew infused with vanilla and milk. Served chilled without ice',
        imgUrl: 'https://images.unsplash.com/photo-1504194472231-5a5294eddc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
      },
      {
        id: 4,
        title: 'Dirty Horchata',
        price: 5.50,
        route: '/dirty-horchata',
        description: '12oz drink. 2oz espresso with 10oz house horchata',
        imgUrl: 'https://static01.nyt.com/images/2019/05/21/dining/kwr-dirty-horchata/kwr-dirty-horchata-articleLarge.jpg'
      },
      {
        id: 5,
        title: 'Rose Latte',
        route: '/rose-latte',
        price: 5,
        description: '12oz drink. 2oz espresso, 10oz of milk and rose syrup',
        imgUrl: 'https://choosingchia.com/jessh-jessh/uploads/2019/10/hibiscus-rose-latte-1.jpg'
      }
    ]
  },
  tea: {
    id: 2,
    title: 'tea',
    route: '/tea',
    products: [
      {
        id: 1,
        title: 'Earl Grey',
        price: 4,
        route: '/earl-grey',
        description: '12oz drink. Fresh steeped to order',
        imgUrl: 'https://images.unsplash.com/photo-1522520605515-22f0c506c369?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      },
      {
        id: 2,
        title: 'Earl Grey Latte',
        route: '/earl-grey-latte',
        price: 5,
        description: '12oz drink. Earl Grea tea, honey and milk',
        imgUrl: 'https://images.unsplash.com/photo-1585594467309-b726b6ba2fb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      }
    ]
  },
  toast: {
    id: 3,
    title: 'toast',
    route: '/toast',
    products: [
      {
        id: 1,
        title: 'Ricotta Jam',
        route: '/ricotta-jam',
        price: 8,
        description: 'Whipped ricotta and organic strawberry preserves',
        imgUrl: 'https://images.unsplash.com/photo-1522612468843-929d6cf4de8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80'
      },
      {
        id: 2,
        title: 'Avocado Toast',
        route: '/avocado-toast',
        price: 9,
        description: 'Organic cage free eggs, Kewpie mayo, dijon mustard, relish, micro greens and Maldon salt',
        imgUrl: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
      }
    ]
  },
  pastries: {
    id: 4, 
    title: 'pastries',
    route: '/pastries',
    products: [
      {
        id: 1,
        title: 'Vegan Carrot Cake',
        route: '/vegan-carrot-cake',
        price: 4.75,
        description: 'Weiser Farm carrots, pineapple, coconute, spices',
        imgUrl: 'https://images.unsplash.com/photo-1487124504955-e42a39e11aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1612&q=80'
      }
    ]
  } 
}

export default SHOP_DATA;