// This file is for matching up the USER's answers from the survey html file;
// using local host: 8080;

var friends = [

{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
      ]
  },

  {
    "name": "Monica",
    "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Ffriends%2Fimages%2F2%2F2f%2FMonica_Geller-Bing_Season_10.png%2Frevision%2Flatest%3Fcb%3D20180426182234&imgrefurl=https%3A%2F%2Ffriends.fandom.com%2Fwiki%2FMonica_Geller&docid=AllGQ6mGT-WjeM&tbnid=bceF0m3kBa-BXM%3A&vet=10ahUKEwjU4Knf7eLjAhVBjlkKHdL1ARYQMwhrKAMwAw..i&w=618&h=836&bih=792&biw=1536&q=friends%20cast&ved=0ahUKEwjU4Knf7eLjAhVBjlkKHdL1ARYQMwhrKAMwAw&iact=mrc&uact=8",
    "scores":[
        "2",
        "5",
        "3",
        "1",
        "3",
        "1",
        "1",
        "3",
        "4",
        "1"
      ]
  },

  {
    "name": "Joey",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwijluua6ufjAhXNY98KHcQBAmwQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fen.wikipedia.org%252Fwiki%252FJoey_Tribbiani%26psig%3DAOvVaw0Kyq-bN94uvw2t7RzeEV9l%26ust%3D1564960349728036&psig=AOvVaw0Kyq-bN94uvw2t7RzeEV9l&ust=1564960349728036",
    "scores":[
        "3",
        "2",
        "2",
        "5",
        "5",
        "2",
        "1",
        "1",
        "1",
        "2"
      ]
  },

  {
    "name": "Rachel",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj0692I6-fjAhXFmOAKHXYDBVgQjRx6BAgBEAU&url=https%3A%2F%2Fjerseymeetscountry.wordpress.com%2F2013%2F10%2F21%2Ffriends-the-cast-that-never-was%2F&psig=AOvVaw02sts0DcEO8rcSp5072wSq&ust=1564960692497684",
    "scores":[
        "3",
        "3",
        "3",
        "1",
        "1",
        "4",
        "2",
        "2",
        "1",
        "1"
      ]
  },

  {
    "name": "Chandler",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjA_NW86-fjAhWFMd8KHcLNBUAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.instyle.com%2Ffashion%2Fthen-and-now-cast-friends-and-how-theyve-changed-20-years&psig=AOvVaw2NV0evm5H2LL-MMUtiVkpz&ust=1564960726107427",
    "scores":[
        "4",
        "1",
        "1",
        "1",
        "2",
        "4",
        "5",
        "5",
        "5",
        "2"
      ]
  },

  {
    "name": "Phoebe",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjbnJHt6-fjAhXKMd8KHfS1BtQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.instyle.com%2Ffashion%2Fthen-and-now-cast-friends-and-how-theyve-changed-20-years&psig=AOvVaw312Z6aR19LSXN4NmHSd2RY&ust=1564960903276166",
    "scores":[
        "5",
        "5",
        "5",
        "4",
        "5",
        "4",
        "4",
        "4",
        "5",
        "5"
      ]
  },

  {
    "name": "Ursula",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjKx6er7-fjAhUuT98KHQ_LAEcQjRx6BAgBEAU&url=https%3A%2F%2Ffriends.fandom.com%2Fwiki%2FUrsula_Buffay&psig=AOvVaw0oFTqtt5BjsqZtRKOQlOnS&ust=1564960937651254",
    "scores":[
        "2",
        "5",
        "1",
        "4",
        "1",
        "5",
        "2",
        "3",
        "3",
        "3"
      ]
  },

  {
    "name": "Ross",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjvl8eI8efjAhUwTt8KHadzC8kQjRx6BAgBEAU&url=https%3A%2F%2Fhome.adelphi.edu%2F~ji21632%2Fmeet%2520the%2520characters.html&psig=AOvVaw1Bs0kKNFhOnOuJQ8smI007&ust=1564962235045797",
    "scores":[
        "1",
        "5",
        "3",
        "5",
        "5",
        "2",
        "4",
        "1",
        "5",
        "1"
      ]
  },

  {
    "name": "Janet",
    "photo": "https://www.thesun.co.uk/wp-content/uploads/2017/06/nintchdbpict000328399773.jpg",
    "scores":[
        "2",
        "2",
        "5",
        "2",
        "5",
        "2",
        "4",
        "4",
        "2",
        "1"
        
      ]
  },

  {
    "name": "Gunther",
    "photo": "https://hips.hearstapps.com/cosmouk.cdnds.net/14/38/1600x800/nrm_1411034674-friends-gunther-secrets-janice-cosmopolitan.jpg?resize=1200:*",
    "scores":[
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1"
      ]
  }

];
  
module.exports = friends;