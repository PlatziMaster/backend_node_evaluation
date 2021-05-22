module.exports = {
    api: {
      port: process.env.API_PORT || 3000,
    },
    mysql: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'platzi',
    },
    jwt: {
      secret: process.env.JWT_SECRET || '9786asdghjg87asdg',
      expiresIn: 60 * 60 ,
    },
    host: {
      url: 'http://localhost:3000/',
    },
  };
  