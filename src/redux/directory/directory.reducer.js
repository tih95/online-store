const INITIAL_STATE = {
  sections: [
    {
      title: 'coffee',
      imgUrl: require('../../assets/directory-banners/coffee-banner.jpg'),
      id: 1,
      url: '/shop/coffee'
    },
    {
      title: 'tea',
      imgUrl: require('../../assets/directory-banners/tea-banner.jpg'),
      id: 2,
      url: '/shop/tea'
    },
    {
      title: 'toast',
      imgUrl: require('../../assets/directory-banners/toast-banner.jpg'),
      id: 3,
      url: '/shop/toast'
    },
    {
      title: 'pastries',
      imgUrl: require('../../assets/directory-banners/pastries-banner.jpg'),
      id: 4,
      url: '/shop/pastries'
    }
  ]
}

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default categoriesReducer;
