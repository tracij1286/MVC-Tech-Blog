const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    description:
      'fasd dsfasd garg ags aosdif dasf sdag sda dsa fdsa fds fasd fds fdsa',
    user_id: 10,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
