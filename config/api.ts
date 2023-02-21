const API = {
  user: {
    register: '/register',
    login: '/login',
    getUser: '/user',
    findUser: '/findUser',
    profile: '/profile',
  },
  clue: {
    getClue: '/getClue',
    submitClue: '/submitClue',
    getTries: '/getTries',
  },
  point: {
    history: '/getHistories',
    grant: '/grantPoint',
  },
  merchandise: {
    getAll: '/getAllMerchandise',
    getOne: '/getMerchandise',
    add: '/addMerchandise',
    checkout: '/checkout',
    deleteMerch: '/deleteMerchandise',
  },
  startup: {
    getAll: '/startups',
  }
};

export default API;
