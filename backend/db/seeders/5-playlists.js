"use strict";

const { Playlist } = require("../models");

const playlists = [
  {
    userId: 1,
    name: "Female Singer Songwriters Playlist",
    imageUrl:
      "https://www.timesinternational.net/wp-content/uploads/2020/04/spencer-imbrock-JAHdPHMoaEA-unsplash-scaled.jpg",
  },
  {
    userId: 1,
    name: "Classic Canadian Rock",
    imageUrl:
      "https://mk0droplrg5q83m5xg0r.kinstacdn.com/wp-content/uploads/2020/10/Screenshot-on-2020-10-20-at-15_16_32.png",
  },
  {
    userId: 1,
    name: "Instrumental Acoustic Guitar Playlist",
    imageUrl:
      "https://www.lifewire.com/thmb/dNadcjOoAPYDZhoZbIgPMTAx8qw=/1440x1080/smart/filters:no_upscale()/how-to-create-soundcloud-playlist-featured-a7f822b0047e4060a887cf24628abbfd.jpg",
  },
  {
    userId: 1,
    name: "The Best of Bluegrass",
    imageUrl:
      "https://i.pinimg.com/564x/34/ed/80/34ed80c6c0f9fb4d9bdf00cae3fc5c52.jpg",
  },
  {
    userId: 1,
    name: "World Music Showcase",
    imageUrl:
      "https://www.online-tech-tips.com/wp-content/uploads/2021/08/listening1.jpg",
  },
  {
    userId: 1,
    name: "Old Songs Throwback",
    imageUrl: "https://apprecs.org/ios/images/app-icons/256/f4/959798516.jpg",
  },
  {
    userId: 1,
    name: "Happy Songs",
    imageUrl:
      "https://electronica.org.uk/wp-content/uploads/2020/10/number-437919_1920.jpg",
  },
  {
    userId: 1,
    name: "Workout Classics",
    imageUrl:
      "https://cdn.dribbble.com/users/5800/screenshots/4163837/media/e7f41d4de88b73439f0c4b877878bd04.jpg?compress=1&resize=400x300",
  },
  {
    userId: 1,
    name: "Cottage Country",
    imageUrl:
      "https://i.pinimg.com/564x/34/ed/80/34ed80c6c0f9fb4d9bdf00cae3fc5c52.jpg",
  },
  {
    userId: 1,
    name: "Acoustic Laid Back Blues",
    imageUrl:
      "https://a0.anyrgb.com/pngimg/132/854/music-radio-tablets-of-the-law-closer-google-play-music-soundcloud-playlist-free-music-mp3-internet-radio-streaming-media.png",
  },
  {
    userId: 2,
    name: "Female Singer Songwriters Playlist",
    imageUrl:
      "https://www.timesinternational.net/wp-content/uploads/2020/04/spencer-imbrock-JAHdPHMoaEA-unsplash-scaled.jpg",
  },
  {
    userId: 2,
    name: "Classic Canadian Rock",
    imageUrl:
      "https://mk0droplrg5q83m5xg0r.kinstacdn.com/wp-content/uploads/2020/10/Screenshot-on-2020-10-20-at-15_16_32.png",
  },
  {
    userId: 2,
    name: "Instrumental Acoustic Guitar Playlist",
    imageUrl:
      "https://www.lifewire.com/thmb/dNadcjOoAPYDZhoZbIgPMTAx8qw=/1440x1080/smart/filters:no_upscale()/how-to-create-soundcloud-playlist-featured-a7f822b0047e4060a887cf24628abbfd.jpg",
  },
  {
    userId: 2,
    name: "The Best of Bluegrass",
    imageUrl:
      "https://i.pinimg.com/564x/34/ed/80/34ed80c6c0f9fb4d9bdf00cae3fc5c52.jpg",
  },
  {
    userId: 2,
    name: "World Music Showcase",
    imageUrl:
      "https://www.online-tech-tips.com/wp-content/uploads/2021/08/listening1.jpg",
  },
  {
    userId: 2,
    name: "Old Songs Throwback",
    imageUrl: "https://apprecs.org/ios/images/app-icons/256/f4/959798516.jpg",
  },
  {
    userId: 2,
    name: "Happy Songs",
    imageUrl:
      "https://electronica.org.uk/wp-content/uploads/2020/10/number-437919_1920.jpg",
  },
  {
    userId: 2,
    name: "Workout Classics",
    imageUrl:
      "https://cdn.dribbble.com/users/5800/screenshots/4163837/media/e7f41d4de88b73439f0c4b877878bd04.jpg?compress=1&resize=400x300",
  },
  {
    userId: 2,
    name: "Cottage Country",
    imageUrl:
      "https://i.pinimg.com/564x/34/ed/80/34ed80c6c0f9fb4d9bdf00cae3fc5c52.jpg",
  },
  {
    userId: 2,
    name: "Acoustic Laid Back Blues",
    imageUrl:
      "https://a0.anyrgb.com/pngimg/132/854/music-radio-tablets-of-the-law-closer-google-play-music-soundcloud-playlist-free-music-mp3-internet-radio-streaming-media.png",
  },
  {
    userId: 3,
    name: "Female Singer Songwriters Playlist",
    imageUrl:
      "https://www.timesinternational.net/wp-content/uploads/2020/04/spencer-imbrock-JAHdPHMoaEA-unsplash-scaled.jpg",
  },
  {
    userId: 3,
    name: "Classic Canadian Rock",
    imageUrl:
      "https://mk0droplrg5q83m5xg0r.kinstacdn.com/wp-content/uploads/2020/10/Screenshot-on-2020-10-20-at-15_16_32.png",
  },
  {
    userId: 3,
    name: "Instrumental Acoustic Guitar Playlist",
    imageUrl:
      "https://www.lifewire.com/thmb/dNadcjOoAPYDZhoZbIgPMTAx8qw=/1440x1080/smart/filters:no_upscale()/how-to-create-soundcloud-playlist-featured-a7f822b0047e4060a887cf24628abbfd.jpg",
  },
  {
    userId: 3,
    name: "The Best of Bluegrass",
    imageUrl:
      "https://i.pinimg.com/564x/34/ed/80/34ed80c6c0f9fb4d9bdf00cae3fc5c52.jpg",
  },
  {
    userId: 3,
    name: "World Music Showcase",
    imageUrl:
      "https://www.online-tech-tips.com/wp-content/uploads/2021/08/listening1.jpg",
  },
  {
    userId: 3,
    name: "Old Songs Throwback",
    imageUrl: "https://apprecs.org/ios/images/app-icons/256/f4/959798516.jpg",
  },
  {
    userId: 3,
    name: "Happy Songs",
    imageUrl:
      "https://electronica.org.uk/wp-content/uploads/2020/10/number-437919_1920.jpg",
  },
  {
    userId: 3,
    name: "Workout Classics",
    imageUrl:
      "https://cdn.dribbble.com/users/5800/screenshots/4163837/media/e7f41d4de88b73439f0c4b877878bd04.jpg?compress=1&resize=400x300",
  },
  {
    userId: 3,
    name: "Cottage Country",
    imageUrl:
      "https://i.pinimg.com/564x/34/ed/80/34ed80c6c0f9fb4d9bdf00cae3fc5c52.jpg",
  },
  {
    userId: 3,
    name: "Acoustic Laid Back Blues",
    imageUrl:
      "https://a0.anyrgb.com/pngimg/132/854/music-radio-tablets-of-the-law-closer-google-play-music-soundcloud-playlist-free-music-mp3-internet-radio-streaming-media.png",
  },
  {
    userId: 4,
    name: "Female Singer Songwriters Playlist",
    imageUrl:
      "https://www.timesinternational.net/wp-content/uploads/2020/04/spencer-imbrock-JAHdPHMoaEA-unsplash-scaled.jpg",
  },
  {
    userId: 4,
    name: "Classic Canadian Rock",
    imageUrl:
      "https://mk0droplrg5q83m5xg0r.kinstacdn.com/wp-content/uploads/2020/10/Screenshot-on-2020-10-20-at-15_16_32.png",
  },
  {
    userId: 4,
    name: "Instrumental Acoustic Guitar Playlist",
    imageUrl:
      "https://www.lifewire.com/thmb/dNadcjOoAPYDZhoZbIgPMTAx8qw=/1440x1080/smart/filters:no_upscale()/how-to-create-soundcloud-playlist-featured-a7f822b0047e4060a887cf24628abbfd.jpg",
  },
  {
    userId: 4,
    name: "The Best of Bluegrass",
    imageUrl:
      "https://i.pinimg.com/564x/34/ed/80/34ed80c6c0f9fb4d9bdf00cae3fc5c52.jpg",
  },
  {
    userId: 4,
    name: "World Music Showcase",
    imageUrl:
      "https://www.online-tech-tips.com/wp-content/uploads/2021/08/listening1.jpg",
  },
  {
    userId: 4,
    name: "Old Songs Throwback",
    imageUrl: "https://apprecs.org/ios/images/app-icons/256/f4/959798516.jpg",
  },
  {
    userId: 4,
    name: "Happy Songs",
    imageUrl:
      "https://electronica.org.uk/wp-content/uploads/2020/10/number-437919_1920.jpg",
  },
  {
    userId: 4,
    name: "Workout Classics",
    imageUrl:
      "https://cdn.dribbble.com/users/5800/screenshots/4163837/media/e7f41d4de88b73439f0c4b877878bd04.jpg?compress=1&resize=400x300",
  },
  {
    userId: 4,
    name: "Cottage Country",
    imageUrl:
      "https://i.pinimg.com/564x/34/ed/80/34ed80c6c0f9fb4d9bdf00cae3fc5c52.jpg",
  },
  {
    userId: 4,
    name: "Acoustic Laid Back Blues",
    imageUrl:
      "https://a0.anyrgb.com/pngimg/132/854/music-radio-tablets-of-the-law-closer-google-play-music-soundcloud-playlist-free-music-mp3-internet-radio-streaming-media.png",
  },
  {
    userId: 5,
    name: "Female Singer Songwriters Playlist",
    imageUrl:
      "https://www.timesinternational.net/wp-content/uploads/2020/04/spencer-imbrock-JAHdPHMoaEA-unsplash-scaled.jpg",
  },
  {
    userId: 5,
    name: "Classic Canadian Rock",
    imageUrl:
      "https://mk0droplrg5q83m5xg0r.kinstacdn.com/wp-content/uploads/2020/10/Screenshot-on-2020-10-20-at-15_16_32.png",
  },
  {
    userId: 5,
    name: "Instrumental Acoustic Guitar Playlist",
    imageUrl:
      "https://www.lifewire.com/thmb/dNadcjOoAPYDZhoZbIgPMTAx8qw=/1440x1080/smart/filters:no_upscale()/how-to-create-soundcloud-playlist-featured-a7f822b0047e4060a887cf24628abbfd.jpg",
  },
  {
    userId: 5,
    name: "The Best of Bluegrass",
    imageUrl:
      "https://i.pinimg.com/564x/34/ed/80/34ed80c6c0f9fb4d9bdf00cae3fc5c52.jpg",
  },
  {
    userId: 5,
    name: "World Music Showcase",
    imageUrl:
      "https://www.online-tech-tips.com/wp-content/uploads/2021/08/listening1.jpg",
  },
  {
    userId: 5,
    name: "Old Songs Throwback",
    imageUrl: "https://apprecs.org/ios/images/app-icons/256/f4/959798516.jpg",
  },
  {
    userId: 5,
    name: "Happy Songs",
    imageUrl:
      "https://electronica.org.uk/wp-content/uploads/2020/10/number-437919_1920.jpg",
  },
  {
    userId: 5,
    name: "Workout Classics",
    imageUrl:
      "https://cdn.dribbble.com/users/5800/screenshots/4163837/media/e7f41d4de88b73439f0c4b877878bd04.jpg?compress=1&resize=400x300",
  },
  {
    userId: 5,
    name: "Cottage Country",
    imageUrl:
      "https://i.pinimg.com/564x/34/ed/80/34ed80c6c0f9fb4d9bdf00cae3fc5c52.jpg",
  },
  {
    userId: 5,
    name: "Acoustic Laid Back Blues",
    imageUrl:
      "https://a0.anyrgb.com/pngimg/132/854/music-radio-tablets-of-the-law-closer-google-play-music-soundcloud-playlist-free-music-mp3-internet-radio-streaming-media.png",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Playlist.bulkCreate(playlists, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Playlists", null, {});
  },
};
