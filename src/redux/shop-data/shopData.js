const SHOP_DATA = {
  coffee: {
    id: 1,
    title: 'coffee',
    route: '/shop/coffee',
    products: [
      {
        id: 1,
        title: 'Hot Chocolate',
        slug: 'hot-chocolate',
        route: '/shop/coffee/hot-chocolate',
        price: 3.50,
        description: '12oz drink',
        imgUrl: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
      },
      {
        id: 2,
        title: 'Campfire Mocha',
        slug: 'campfire-mocha',
        route: '/shop/coffee/campfire-mocha',
        price: 5.50,
        description: '12oz drink. 2oz espresso, 10oz of milk and our house marshmallow/chocolate syrup.',
        imgUrl: 'https://images.unsplash.com/photo-1563320974-c69da83a1c5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      },
      {
        id: 3,
        title: 'Nitro Vanilla Latte',
        route: '/shop/coffee/nitro-vanilla-latte',
        slug: 'nitro-vanilla-latte',
        price: 4,
        description: '12oz nitro cold brew infused with vanilla and milk. Served chilled without ice',
        imgUrl: 'https://images.unsplash.com/photo-1504194472231-5a5294eddc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
      },
      {
        id: 4,
        title: 'Dirty Horchata',
        price: 5.50,
        slug: 'dirty-horchata',
        route: '/shop/coffee/dirty-horchata',
        description: '12oz drink. 2oz espresso with 10oz house horchata',
        imgUrl: 'https://static01.nyt.com/images/2019/05/21/dining/kwr-dirty-horchata/kwr-dirty-horchata-articleLarge.jpg'
      },
      {
        id: 5,
        title: 'Rose Latte',
        route: '/shop/coffee/rose-latte',
        slug: 'rose-latte',
        price: 5,
        description: '12oz drink. 2oz espresso, 10oz of milk and rose syrup',
        imgUrl: 'https://blog.piquetea.com/wp-content/uploads/2019/12/Vanilla-Rooibos-Rose-Latte-Main-500x372.png'
      }
    ]
  },
  tea: {
    id: 2,
    title: 'tea',
    route: '/shop/tea',
    products: [
      {
        id: 7,
        title: 'Earl Grey',
        price: 4,
        slug: 'earl-grey',
        route: '/shop/tea/earl-grey',
        description: '12oz drink. Fresh steeped to order',
        imgUrl: 'https://images.unsplash.com/photo-1522520605515-22f0c506c369?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      },
      {
        id: 8,
        title: 'Earl Grey Latte',
        route: '/shop/tea/earl-grey-latte',
        slug: 'earl-grey-latte',
        price: 5,
        description: '12oz drink. Earl Grea tea, honey and milk',
        imgUrl: 'https://images.unsplash.com/photo-1585594467309-b726b6ba2fb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
      },
      {
        id: 242341234,
        title: 'Chai Latte',
        route: '/shop/tea/chai-latte',
        slug: 'chai-latte',
        price: 4.5,
        description: '12oz House Chai.',
        imgUrl: 'https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-chai-latte.jpg'
      },
      {
        id: 34123423,
        title: 'Matcha Latte',
        route: '/shop/tea/matcha-latte',
        slug: 'matcha-latte',
        price: 5.5,
        description: '12oz drink. 2oz matcha and 10oz of milk.',
        imgUrl: 'https://www.chopstickchronicles.com/wp-content/uploads/2020/05/Matcha-Latte-featured-10-500x375.jpg'
      },
      {
        id: 242343,
        title: 'Tumeric Oat Latte',
        slug: 'tumeric-oat-latte',
        route: '/shop/tea/tumeric-oat-latte',
        price: 4.5,
        description: '12oz House Turmeric Drink with Oatly Oat Milk.',
        imgUrl: 'https://www.godairyfree.org/wp-content/uploads/2016/12/ff-oatmeal-latte-feature.jpg'
      }
    ]
  },
  toast: {
    id: 3,
    title: 'toast',
    route: '/shop/toast',
    products: [
      {
        id: 9,
        title: 'Ricotta Jam',
        route: '/shop/toast/ricotta-jam',
        slug: 'ricotta-jam',
        price: 8,
        description: 'Whipped ricotta and organic strawberry preserves',
        imgUrl: 'https://images.unsplash.com/photo-1522612468843-929d6cf4de8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80'
      },
      {
        id: 10,
        title: 'Avocado Toast',
        route: '/shop/toast/avocado-toast',
        slug: 'avocado-toast',
        price: 9,
        description: 'Organic cage free eggs, Kewpie mayo, dijon mustard, relish, micro greens and Maldon salt',
        imgUrl: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
      },
      {
        id: 5343,
        title: 'Egg Salad',
        route: '/shop/toast/egg-salad',
        slug: 'egg-salad',
        price: 8.30,
        description: 'Organic cage free eggs, Kewpie mayo, dijon mustard, relish, micro greens and Maldon salt.',
        imgUrl: 'https://www.simplyrecipes.com/wp-content/uploads/2015/04/Egg-Salad-Sandwich-LEAD-3.jpg'
      },
      {
        id: 45354,
        title: 'Almond Butter and Jelly',
        route: '/shop/toast/almond-butter-jelly',
        slug: 'almond-butter-jelly',
        price: 6,
        description: 'Barneys crunchy almond butter and organic strawberry preserves',
        imgUrl: 'https://skinnyms.com/wp-content/uploads/2015/05/Clean-Eating-Nut-Butter-and-Jam-Sandwich-Recipe-2.jpg'
      },
      {
        id: 21412,
        title: 'Lox Toast',
        route: '/shop/toast/lox-toast',
        slug: 'lox-toast',
        price: 8,
        description: 'Cream cheese, nova lox salmon, cherry tomatoes, red onion, micro greens, salt and pepper.',
        imgUrl: 'https://i.pinimg.com/originals/8d/10/1a/8d101a6d8dcc07db31adf1a9447c69e9.jpg'
      }
    ]
  },
  pastries: {
    id: 4, 
    title: 'pastries',
    route: '/shop/pastries',
    products: [
      {
        id: 11,
        title: 'Vegan Carrot Cake',
        slug: 'vegan-carrot-cake',
        route: '/shop/pastries/vegan-carrot-cake',
        price: 4.75,
        description: 'Weiser Farm carrots, pineapple, coconute, spices',
        imgUrl: 'https://images.unsplash.com/photo-1487124504955-e42a39e11aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1612&q=80'
      },
      {
        id: 123,
        title: 'Blueberry Muffin',
        slug: 'blueberry-muffin',
        route: '/shop/pastries/blueberry-muffin',
        price: 6,
        description: 'Banana Chocolate Chip Walnut muffin is baked with fresh bananas, chocolate chips ,walnuts and is folded into a creme fraiche muffin batter. Our GF Blueberry muffin has organic blueberry and creme friache folded into a vanilla bean batter topped with a gluten free crumble.',
        imgUrl: 'https://i2.wp.com/smittenkitchen.com/wp-content/uploads//2010/08/perfect-blueberry-muffins.jpg?fit=1200%2C800&ssl=1'
      },
      {
        id: 131231,
        title: 'Bacon Cheddar Scone',
        slug: 'bacon-cheddar-scone',
        route: '/shop/pastries/bacon-cheddar-scone',
        price: 5.75,
        description: 'A savory scone made with tender Zoes Applewood smoked bacon from Pentaluma, California with shredded white cheddar and chives.',
        imgUrl: 'https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/6047-3-large.jpg?itok=zP9LxSzv'
      },
      {
        id: 4235,
        title: 'Snickerdoodle Cookie',
        slug: 'snickerdoodle-cookie',
        route: '/shop/pastries/snickerdoodle-cookie',
        price: 3.5,
        description: 'An old school classic, rich buttery sugar cookie topped with cinnamon sugar!',
        imgUrl: 'https://images-gmi-pmc.edge-generalmills.com/d282f492-c920-4054-bc25-4ce934baae6b.jpg'
      },
      {
        id: 13241234,
        title: 'Coffee Cake',
        slug: 'coffee-cake',
        route: '/shop/pastries/coffee-cake',
        price: 4.5,
        description: 'Classic coffee cake swirled with brown sugar, cocoa powder, an crumb topping.',
        imgUrl: 'https://lilluna.com/wp-content/uploads/2011/09/quick-coffee-cake-3-final-500x375.jpg'
      }
    ]
  } 
}

export default SHOP_DATA;