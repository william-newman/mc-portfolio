declare var require: any;
export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCgUEIHqxkwQ1il88IpJnCJzN5RoJUd_7Q',
    authDomain: 'mike-cuff-portfolio.firebaseapp.com',
    databaseURL: 'https://mike-cuff-portfolio.firebaseio.com',
    projectId: 'mike-cuff-portfolio',
    storageBucket: 'mike-cuff-portfolio.appspot.com',
    messagingSenderId: '337222460170'
  },
  appVersion: require('../../package.json').version
};
