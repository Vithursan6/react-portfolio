const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();


const data = {
    users: [
        {
         _id: user1Id,
         avatar: "https://www.w3schools.com/howto/img_avatar.png",
         email: "vithursanm@gmail.com",
         username: "vithursan6",
         info: "Hello, I am a full stack developer!",
         password: "ftn669tse",
         role: "admin"
        },
        {
        _id: user2Id,
        avatar: "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
        email: "jjackson123@gmail.com",
        username: "jjackson9798",
        info: "Hello, I am a developer!",
        password: "password987"
        }
    ],

    projects: [
      {
        title: 'ecomm app',
        description: 'ecommmerce react spa app',
        technologies: 'react, node, html, css, mongodb',
        url:'https://portside.herokuapp.com/',
        isCurrentlyDeployed: true,
        user: user1Id
      },
      {
        title: 'tech blog app',
        description: 'tech blog app',
        technologies: 'express, node, html, css, mongodb',
        url: 'https://glacial-brushlands-88300.herokuapp.com/login',
        isCurrentlyDeployed: true,
        user: user1Id
      },
      {
        title: 'crypto dash app',
        description: 'crypto dashboard app',
        technologies: 'html, css, javascript, virtual DOM',
        url: 'https://vithursan6.github.io/crypto-dash/',
        isCurrentlyDeployed: true,
        user: user1Id
      },
      {
        title: 'new tested app',
        description: 'new tested app',
        technologies: 'html, css, javascript, virtual DOM',
        url: 'https://vithursan6.github.io/testing/',
        isCurrentlyDeployed: false,
        user: user1Id
      }
    ]
  }


  module.exports = data;