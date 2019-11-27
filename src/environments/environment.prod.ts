declare var require: any;
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyCgUEIHqxkwQ1il88IpJnCJzN5RoJUd_7Q',
    authDomain: 'mike-cuff-portfolio.firebaseapp.com',
    databaseURL: 'https://mike-cuff-portfolio.firebaseio.com',
    projectId: 'mike-cuff-portfolio',
    storageBucket: 'mike-cuff-portfolio.appspot.com',
    messagingSenderId: '337222460170',
    appId: '1:337222460170:web:d64c23369c5352fd8350f3',
    measurementId: 'G-YVM4M2Z64M'
  },
  appVersion: require('../../package.json').version
};
