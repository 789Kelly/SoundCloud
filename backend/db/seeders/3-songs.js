"use strict";

const { Song } = require("../models");

const songs = [
  {
    userId: 1,
    albumId: 1,
    title: "What's Going On",
    description: "Marvin Gaye",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984375/What%27s%20Going%20On/01_-_What_s_Going_On_njorjt.mp3",
    imageUrl: "https://m.media-amazon.com/images/I/719kIe1npJL._SL1200_.jpg",
  },
  {
    userId: 1,
    albumId: 1,
    title: "What's Happening Brother",
    description: "Marvin Gaye",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984375/What%27s%20Going%20On/02_-_What_s_Happening_Brother_hiy0dn.mp3",
    imageUrl: "https://m.media-amazon.com/images/I/719kIe1npJL._SL1200_.jpg",
  },
  {
    userId: 1,
    albumId: 1,
    title: "Flyin' High",
    description: "Marvin Gaye",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984375/What%27s%20Going%20On/03_-_Flyin_High_In_The_Friendly_Sky_dxzjfl.mp3",
    imageUrl: "https://m.media-amazon.com/images/I/719kIe1npJL._SL1200_.jpg",
  },
  {
    userId: 1,
    albumId: 1,
    title: "Save the Children",
    description: "Marvin Gaye",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984375/What%27s%20Going%20On/04_-_Save_The_Children_j2vdu1.mp3",
    imageUrl:
      "https://i.discogs.com/mXEN1z46n5NI6kEhqoIeB8_6XG-OrfBS2lmmOtqNTxs/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMzQ2/MjYtMTQyOTMxNTA4/OC05ODc1LmpwZWc.jpeg",
  },
  {
    userId: 1,
    albumId: 1,
    title: "God Is Love",
    description: "Marvin Gaye",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984375/What%27s%20Going%20On/05_-_God_Is_Love_iztbug.mp3",
    imageUrl:
      "https://images.rapgenius.com/656caf1c299ead324c8510a473456273.580x600x1.jpg",
  },
  {
    userId: 1,
    albumId: 1,
    title: "Mercy Mercy Me",
    description: "Marvin Gaye",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984375/What%27s%20Going%20On/06_-_Mercy_Mercy_Me_The_Ecology_nn9n8q.mp3",
    imageUrl:
      "https://townsquare.media/site/295/files/2020/06/Mercy-Mercy-Me-single.jpg?w=980&q=75",
  },
  {
    userId: 1,
    albumId: 1,
    title: "Right On",
    description: "Marvin Gaye",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984377/What%27s%20Going%20On/07_-_Right_On_bqflwp.mp3",
    imageUrl: "https://m.media-amazon.com/images/I/719kIe1npJL._SL1200_.jpg",
  },
  {
    userId: 1,
    albumId: 1,
    title: "Wholy Holy",
    description: "Marvin Gaye",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984376/What%27s%20Going%20On/08_-_Wholy_Holy_vtputj.mp3",
    imageUrl: "https://m.media-amazon.com/images/I/719kIe1npJL._SL1200_.jpg",
  },
  {
    userId: 1,
    albumId: 1,
    title: "Inner City Blues",
    description: "Marvin Gaye",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984377/What%27s%20Going%20On/09_-_Inner_City_Blues_Make_Me_Wanna_Holler_emjww3.mp3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/65/Icbmomg.jpg",
  },
  {
    userId: 2,
    albumId: 2,
    title: "Wouldn't It Be Nice",
    description: "The Beach Boys",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984526/Pet%20Sounds/01_-_Wouldn_t_It_Be_Nice_Mono___Remastered_ql5ohw.mp3",
    imageUrl: "https://i.ytimg.com/vi/dmcNbsLCpBQ/mqdefault.jpg",
  },
  {
    userId: 2,
    albumId: 2,
    title: "You Still Believe in Me",
    description: "The Beach Boys",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984526/Pet%20Sounds/02_-_You_Still_Believe_In_Me_Mono___Remastered_n1hmvu.mp3",
    imageUrl:
      "https://lovethatsongpodcast.com/wp-content/uploads/2020/01/PetSounds.jpg",
  },
  {
    userId: 2,
    albumId: 2,
    title: "That's Not Me",
    description: "The Beach Boys",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984526/Pet%20Sounds/03_-_That_s_Not_Me_Mono___Remastered_axibte.mp3",
    imageUrl:
      "http://images.genius.com/0e5f7583995468c26e62266a4b01193f.1000x1000x1.jpg",
  },
  {
    userId: 2,
    albumId: 2,
    title: "Don't Talk",
    description: "The Beach Boys",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984526/Pet%20Sounds/04_-_Don_t_Talk_Put_Your_Head_On_My_Shoulder_Mono___Remastered_alts1u.mp3",
    imageUrl:
      "http://images.genius.com/0e5f7583995468c26e62266a4b01193f.1000x1000x1.jpg",
  },
  {
    userId: 2,
    albumId: 2,
    title: "I'm Waiting for the Day",
    description: "The Beach Boys",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984526/Pet%20Sounds/05_-_I_m_Waiting_For_The_Day_Mono___Remastered_gvuuqn.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ed/Little_Honda_b.w._I%27m_Waiting_For_the_Day_-_Beach_Boys.jpg",
  },
  {
    userId: 2,
    albumId: 2,
    title: "Let's Go Away For A While",
    description: "The Beach Boys",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984526/Pet%20Sounds/06_-_Let_s_Go_Away_For_A_While_Mono___Remastered_czd0np.mp3",
    imageUrl:
      "https://e.snmc.io/i/600/s/7de790c2fb77d456bada6a8efb49e36f/5248148/the-beach-boys-good-vibrations-lets-go-away-for-awhile-Cover-Art.jpg",
  },
  {
    userId: 2,
    albumId: 2,
    title: "Sloop John B",
    description: "The Beach Boys",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984528/Pet%20Sounds/07_-_Sloop_John_B_Remastered_op6x16.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Sloop_John_B_cover.jpg/220px-Sloop_John_B_cover.jpg",
  },
  {
    userId: 2,
    albumId: 2,
    title: "God Only Knows",
    description: "The Beach Boys",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984530/Pet%20Sounds/08_-_God_Only_Knows_Mono___1997_Remastered_r0hkqx.mp3",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzhhNWJiOWYtNTA3ZC00MzdhLThmZDYtYjkzZmVhZjYyYzVlXkEyXkFqcGdeQXVyNTMyODM3MTg@._V1_FMjpg_UX1000_.jpg",
  },
  {
    userId: 2,
    albumId: 2,
    title: "I Know There's an Answer",
    description: "The Beach Boys",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984528/Pet%20Sounds/09_-_I_Know_There_s_An_Answer_Mono___Remastered_dof6bc.mp3",
    imageUrl:
      "http://images.genius.com/0e5f7583995468c26e62266a4b01193f.1000x1000x1.jpg",
  },
  {
    userId: 3,
    albumId: 3,
    title: "All I Want",
    description: "Joni Mitchell",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984701/Blue/01_-_All_I_Want_ypznoz.mp3",
    imageUrl:
      "https://i1.sndcdn.com/artworks-QjeB6sltbd4MiWP7-p1HK5Q-t500x500.jpg",
  },
  {
    userId: 3,
    albumId: 3,
    title: "My Old Man",
    description: "Joni Mitchell",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984702/Blue/02_-_My_Old_Man_vfxs9y.mp3",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730766e9c736b00f6f312d2781",
  },
  {
    userId: 3,
    albumId: 3,
    title: "Little Green",
    description: "Joni Mitchell",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984701/Blue/03_-_Little_Green_i6rwoo.mp3",
    imageUrl:
      "https://64.media.tumblr.com/88a4386c72ac25e484c7ace5124c6555/tumblr_inline_p9ovlfJqAL1qzahcl_500.jpg",
  },
  {
    userId: 3,
    albumId: 3,
    title: "Carey",
    description: "Joni Mitchell",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984702/Blue/04_-_Carey_hlf21k.mp3",
    imageUrl:
      "https://s.wsj.net/public/resources/images/AR-AH804_JONI_JV_20141111102211.jpg",
  },
  {
    userId: 3,
    albumId: 3,
    title: "Blue",
    description: "Joni Mitchell",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984701/Blue/05_-_Blue_wnokvc.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e1/Bluealbumcover.jpg",
  },
  {
    userId: 3,
    albumId: 3,
    title: "California",
    description: "Joni Mitchell",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984703/Blue/06_-_California_sd20gt.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/50/California_Joni_Mitchell_Dutch_single_cover.jpg",
  },
  {
    userId: 3,
    albumId: 3,
    title: "This Flight Tonight",
    description: "Joni Mitchell",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984703/Blue/07_-_This_Flight_Tonight_z9asfl.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Nazareth_This_Flight_Tonight.png",
  },
  {
    userId: 3,
    albumId: 3,
    title: "River",
    description: "Joni Mitchell",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984701/Blue/08_-_River_lx7hpr.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-cn4yba44FMdH-0-t500x500.jpg",
  },
  {
    userId: 3,
    albumId: 3,
    title: "A Case of You",
    description: "Joni Mitchell",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984703/Blue/09_-_A_Case_of_You_jxe06y.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-8248r2x0D5oe-0-t500x500.jpg",
  },
  {
    userId: 3,
    albumId: 3,
    title: "The Last Time I Saw Richard",
    description: "Joni Mitchell",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677984704/Blue/10_-_The_Last_Time_I_Saw_Richard_fzdzdk.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-8248r2x0D5oe-0-t500x500.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Love's in Need of Love Today",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985302/Songs%20in%20the%20Key%20of%20Life/01_-_Love_s_In_Need_Of_Love_Today_u7v0uq.mp3",
    imageUrl: "https://img.youtube.com/vi/FGZYWSfiYbM/hqdefault.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Have a Talk with God",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985297/Songs%20in%20the%20Key%20of%20Life/02_-_Have_A_Talk_With_God_sogkhk.mp3",
    imageUrl:
      "http://images.genius.com/9c9efcb3e5c2ba5daa29c788c7e62d64.1000x1000x1.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Village Ghetto Land",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985297/Songs%20in%20the%20Key%20of%20Life/03_-_Village_Ghetto_Land_qn1w0z.mp3",
    imageUrl:
      "http://images.genius.com/9c9efcb3e5c2ba5daa29c788c7e62d64.1000x1000x1.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Contusion",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985297/Songs%20in%20the%20Key%20of%20Life/04_-_Contusion_z5xwk0.mp3",
    imageUrl: "https://assets.jazziz.com/2019/05/stevie-wonder-14.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Sir Duke",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985299/Songs%20in%20the%20Key%20of%20Life/05_-_Sir_Duke_a91jpx.mp3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d5/Sir_Duke45.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "I Wish",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985302/Songs%20in%20the%20Key%20of%20Life/06_-_I_Wish_alaue0.mp3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/93/I_Wish45.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Knocks Me Off My Feet",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985299/Songs%20in%20the%20Key%20of%20Life/07_-_Knocks_Me_Off_My_Feet_m14z1j.mp3",
    imageUrl:
      "http://images.genius.com/9c9efcb3e5c2ba5daa29c788c7e62d64.1000x1000x1.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Pastime Paradise",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985299/Songs%20in%20the%20Key%20of%20Life/08_-_Pastime_Paradise_arx6pq.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-000114044510-ouwlcl-t500x500.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Summer Soft",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985299/Songs%20in%20the%20Key%20of%20Life/09_-_Summer_Soft_vczhax.mp3",
    imageUrl:
      "https://samuelsounds.files.wordpress.com/2013/11/stevie-wonder-again.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Ordinary Pain",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985304/Songs%20in%20the%20Key%20of%20Life/10_-_Ordinary_Pain_ghevsq.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-XAlZSzuhdgOD-0-t500x500.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Isn't She Lovely",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985303/Songs%20in%20the%20Key%20of%20Life/Disc_2_01_-_Isn_t_She_Lovely_vhlood.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/25/Isn%27t_She_Lovely_-_Stevie_Wonder.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Joy Inside My Tears",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985302/Songs%20in%20the%20Key%20of%20Life/Disc_2_02_-_Joy_Inside_My_Tears_vv8wfg.mp3",
    imageUrl:
      "https://somehowjazz.com/wp-content/uploads/2019/09/Stevie-Wonder-Joy-Inside-My-Tears.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Black Man",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985304/Songs%20in%20the%20Key%20of%20Life/Disc_2_03_-_Black_Man_jqpbjs.mp3",
    imageUrl:
      "http://images.genius.com/9c9efcb3e5c2ba5daa29c788c7e62d64.1000x1000x1.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Ngiculela-Es Una Historia-I Am Singing",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985297/Songs%20in%20the%20Key%20of%20Life/Disc_2_04_-_Ngiculela-Es_Una_Historia-I_Am_Singing_f40cu5.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-01mehqltzAwD-0-t500x500.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "If It's Magic",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985297/Songs%20in%20the%20Key%20of%20Life/Disc_2_05_-_If_It_s_Magic_wryanu.mp3",
    imageUrl:
      "https://nyfos.org/wp-content/uploads/2018/02/stevie-wonder-if-its-magic.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "As",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985303/Songs%20in%20the%20Key%20of%20Life/Disc_2_06_-_As_jbgrwo.mp3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/cb/As_Single.jpeg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Another Star",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985305/Songs%20in%20the%20Key%20of%20Life/Disc_2_07_-_Another_Star_akvr2c.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Another_Star_Single.jpeg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Saturn",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985300/Songs%20in%20the%20Key%20of%20Life/Disc_2_08_-_Saturn_dzjxul.mp3",
    imageUrl: "https://img.youtube.com/vi/-FvzpOF0nDQ/0.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Ebony Eyes",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985299/Songs%20in%20the%20Key%20of%20Life/Disc_2_09_-_Ebony_Eyes_polpg4.mp3",
    imageUrl:
      "http://images.genius.com/9c9efcb3e5c2ba5daa29c788c7e62d64.1000x1000x1.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "All Day Sucker",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985300/Songs%20in%20the%20Key%20of%20Life/Disc_2_10_-_All_Day_Sucker_ze4fid.mp3",
    imageUrl:
      "http://images.genius.com/9c9efcb3e5c2ba5daa29c788c7e62d64.1000x1000x1.jpg",
  },
  {
    userId: 4,
    albumId: 4,
    title: "Easy Goin' Evening",
    description: "Stevie Wonder",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985297/Songs%20in%20the%20Key%20of%20Life/Disc_2_11_-_Easy_Goin_Evening_My_Mama_s_Call_eoq5vm.mp3",
    imageUrl: "https://img.youtube.com/vi/dQWt2o08qh8/0.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Come Together",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985630/Abbey%20Road/01_-_Come_Together_2019_Mix_prfpms.mp3",
    imageUrl: "https://www.beatlesbible.com/wp/media/italy_something.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Something",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985626/Abbey%20Road/Disc_3_10_-_Something_Take_39___Instrumental___Strings_Only_vkwsgd.mp3",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjQ0Nzg3MDQtNzlmOS00M2ViLWIwYmItMjE4MmNmYTAzM2FmXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Maxwell's Silver Hammer",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985627/Abbey%20Road/03_-_Maxwell_s_Silver_Hammer_2019_Mix_rz4byh.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/69/Maxwells_silver_hammer_beatles.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Oh! Darling",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985624/Abbey%20Road/04_-_Oh_Darling_2019_Mix_wt1h5p.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Oh_Darling_single_cover.jpg/220px-Oh_Darling_single_cover.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Octopus's Garden",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985627/Abbey%20Road/05_-_Octopus_s_Garden_2019_Mix_tmwsgg.mp3",
    imageUrl:
      "https://atwoodmagazine.com/wp-content/uploads/2021/04/Octopuss-Garden.jpeg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "I Want You",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985630/Abbey%20Road/06_-_I_Want_You_She_s_So_Heavy_2019_Mix_ph3tmp.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/THE_BEATLES_I%2BWANT%2BYOU%2B%28SHES%2BSO%2BHEAVY%29-.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Here Comes the Sun",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985624/Abbey%20Road/07_-_Here_Comes_The_Sun_2019_Mix_f0q1r2.mp3",
    imageUrl: "https://img.youtube.com/vi/xUNqsfFUwhY/0.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Because",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985629/Abbey%20Road/08_-_Because_2019_Mix_tefwzk.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/95/Because_sheet_music.PNG",
  },
  {
    userId: 5,
    albumId: 5,
    title: "You Never Give Me Your Money",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985629/Abbey%20Road/09_-_You_Never_Give_Me_Your_Money_2019_Mix_iyhrcx.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/82/Younevergivemeyourmoney.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Sun King",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985625/Abbey%20Road/10_-_Sun_King_2019_Mix_nivfzo.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Sunkingthebeatles.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Mean Mr Mustard",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985621/Abbey%20Road/11_-_Mean_Mr_Mustard_2019_Mix_icfe72.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/55/Mean_mr_mustard.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Polythene Pam",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985621/Abbey%20Road/12_-_Polythene_Pam_2019_Mix_gyzoeh.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/19/Polythene_Pam_sheet_music.PNG",
  },
  {
    userId: 5,
    albumId: 5,
    title: "She Came In Through The Bathroom Window",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985625/Abbey%20Road/13_-_She_Came_In_Through_The_Bathroom_Window_2019_Mix_yzgch0.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c2/Beatles-she-came-in-through-the-bathroom-window.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Golden Slumbers",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985622/Abbey%20Road/14_-_Golden_Slumbers_2019_Mix_uo7y5u.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/78/Golden_Slumbers_vinyl_cover.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Carry That Weight",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985621/Abbey%20Road/15_-_Carry_That_Weight_2019_Mix_rvqwy5.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f3/Carry_that_weight_sheet_music.jpg",
  },
  {
    userId: 5,
    albumId: 5,
    title: "The End",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985626/Abbey%20Road/16_-_The_End_2019_Mix_lgwyej.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/61/The_end_beatles.PNG",
  },
  {
    userId: 5,
    albumId: 5,
    title: "Her Majesty",
    description: "The Beatles",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677985620/Abbey%20Road/17_-_Her_Majesty_2019_Mix_dbi6pl.mp3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/cb/Her_majesty.jpg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Smells Like Teen Spirit",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986001/Nevermind/01_-_Smells_Like_Teen_Spirit_uycmvr.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Smells_Like_Teen_Spirit.jpg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "In Bloom",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986003/Nevermind/02_-_In_Bloom_Explicit_ihcilc.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b8/Nirvana-usa-in-bloom-geffen-s.jpg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Come As You Are",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986001/Nevermind/03_-_Come_As_You_Are_uc8thj.mp3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/06/ComeAsYouAre.jpg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Breed",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986001/Nevermind/04_-_Breed_mlufm4.mp3",
    imageUrl:
      "https://i.discogs.com/-xDqL7D3z4fJKi5WXWAZXYc_HBLWhYKB5EtNzzL5MLQ/rs:fit/g:sm/q:90/h:537/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyODE5/NDktMTI3NDM0MjM0/MC5qcGVn.jpeg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Lithium",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986004/Nevermind/05_-_Lithium_fbucfh.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6c/Nirvana-lithium-geffen-2-s.jpg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Polly",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986001/Nevermind/06_-_Polly_yiqyk4.mp3",
    imageUrl:
      "https://i1.sndcdn.com/artworks-2SYS2EvorJk1uHxT-v9migA-t500x500.jpg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Territorial Pissings",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986001/Nevermind/07_-_Territorial_Pissings_q3qqck.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-vExtGtXrdvHQ-0-t500x500.jpg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Drain You",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986003/Nevermind/08_-_Drain_You_xpewtf.mp3",
    imageUrl:
      "https://i.discogs.com/FzZjfqa4QJU-TXCOd6mEpMeKB7D5WGRNJ7J-qDS9mIo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyMjQ3/NzctMTU2Njc3MDIx/Ni04MDI0LmpwZWc.jpeg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Lounge Act",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986001/Nevermind/09_-_Lounge_Act_Explicit_wqeqlz.mp3",
    imageUrl:
      "https://images.genius.com/7c54284641a09b96e9bae94ef9b2dbc4.1000x1000x1.jpg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Stay Away",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986003/Nevermind/10_-_Stay_Away_Explicit_wrkoe0.mp3",
    imageUrl:
      "https://images.genius.com/c7a0f0fae1f28e4cd3982e5779574f81.1000x1000x1.png",
  },
  {
    userId: 1,
    albumId: 6,
    title: "On A Plain",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986003/Nevermind/11_-_On_A_Plain_rqnbr6.mp3",
    imageUrl:
      "https://i.discogs.com/Lxg_Y8hH1hSdAIChdMbDdm11PcF_WBNS9JX16I04ucY/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNTEx/NzMtMTUyNTcxOTQ0/Mi04NTU5LmpwZWc.jpeg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Something in the Way",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986003/Nevermind/12_-_Something_In_The_Way_n7tig9.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-fRGpWlHa7inl-0-t500x500.jpg",
  },
  {
    userId: 1,
    albumId: 6,
    title: "Endless, Nameless",
    description: "Nirvana",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677986004/Nevermind/13_-_Endless_Nameless_svymmn.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/18/Nirvana_-_Endless%2C_Nameless_-_7_inch_single_cover_art.jpg",
  },
  {
    userId: 2,
    albumId: 7,
    title: "Second Hand News",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987019/Rumours/01_-_Second_Hand_News_2004_Remaster_ha9owk.mp3",
    imageUrl:
      "https://albumart.publicradio.org/mb/63/63391236-6baf-45bd-b62f-d92b392fc526_409a.jpg",
  },
  {
    userId: 2,
    albumId: 7,
    title: "Dreams",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987020/Rumours/02_-_Dreams_2004_Remaster_qdytce.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Fleetwood_Mac_-_Dreams.png",
  },
  {
    userId: 2,
    albumId: 7,
    title: "Never Going Back Again",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987019/Rumours/03_-_Never_Going_Back_Again_2004_Remaster_dcrpsh.mp3",
    imageUrl:
      "https://images.genius.com/09409c304d07a868f7c892a71ba580be.969x969x1.jpg",
  },
  {
    userId: 2,
    albumId: 7,
    title: "Don't Stop",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987022/Rumours/04_-_Don_t_Stop_2004_Remaster_vvrqn9.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/48/Fleetwood_Mac_Don%27t_Stop.jpg",
  },
  {
    userId: 2,
    albumId: 7,
    title: "Go Your Own Way",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987021/Rumours/05_-_Go_Your_Own_Way_2004_Remaster_ueh3td.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/14/Go_Your_Own_Way_single.jpg",
  },
  {
    userId: 2,
    albumId: 7,
    title: "Songbird",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987019/Rumours/06_-_Songbird_2004_Remaster_wmnjvo.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-000469070379-8myq8h-t500x500.jpg",
  },
  {
    userId: 2,
    albumId: 7,
    title: "The Chain",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987020/Rumours/07_-_The_Chain_2004_Remaster_lbjwxt.mp3",
    imageUrl:
      "https://images.genius.com/aeefdc62b246591ecf449d3e744ed258.1000x1000x1.jpg",
  },
  {
    userId: 2,
    albumId: 7,
    title: "You Make Loving Fun",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987020/Rumours/08_-_You_Make_Loving_Fun_2004_Remaster_izef1q.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/54/You_Make_Loving_Fun_FM.jpg",
  },
  {
    userId: 2,
    albumId: 7,
    title: "I Don't Want to Know",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987021/Rumours/09_-_I_Don_t_Want_to_Know_2004_Remaster_ltcglp.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/Oh_Daddy_I_Don%27t_Want_to_Know_single_cover.jpg",
  },
  {
    userId: 2,
    albumId: 7,
    title: "Oh Daddy",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987021/Rumours/10_-_Oh_Daddy_2004_Remaster_xlf964.mp3",
    imageUrl:
      "https://i.discogs.com/AI98t3mYFzmBaOk6JuvQjIa39pGrH7SJ3btLODfJQOE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4NzU5/NTctMTUxMTQzMDQ3/NC0yMzk4LmpwZWc.jpeg",
  },
  {
    userId: 2,
    albumId: 7,
    title: "Gold Dust Woman",
    description: "Fleetwood Mac",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987021/Rumours/11_-_Gold_Dust_Woman_2004_Remaster_zkq5vm.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-000488226516-o4vh2z-t500x500.jpg",
  },
  {
    userId: 3,
    albumId: 8,
    title: "Let's Go Crazy",
    description: "Prince and the Revolution",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987159/Purple%20Rain/01_-_Let_s_Go_Crazy_wgg9pe.mp3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d1/Prince_Crazy.jpg",
  },
  {
    userId: 3,
    albumId: 8,
    title: "Take Me with U",
    description: "Prince and the Revolution",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987159/Purple%20Rain/02_-_Take_Me_with_U_ol1ki0.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/00/Prince_TakeMe.jpg",
  },
  {
    userId: 3,
    albumId: 8,
    title: "The Beautiful Ones",
    description: "Prince and the Revolution",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987161/Purple%20Rain/03_-_The_Beautiful_Ones_h9wve9.mp3",
    imageUrl:
      "https://m.media-amazon.com/images/I/A1jrXkHUgmL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    userId: 3,
    albumId: 8,
    title: "Computer Blue",
    description: "Prince and the Revolution",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987159/Purple%20Rain/04_-_Computer_Blue_hlbvsa.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-000094751360-0uxfp2-t500x500.jpg",
  },
  {
    userId: 3,
    albumId: 8,
    title: "Darling Nikki",
    description: "Prince and the Revolution",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987159/Purple%20Rain/05_-_Darling_Nikki_n5h5ax.mp3",
    imageUrl:
      "https://media.newyorker.com/photos/59097cbec14b3c606c1096fc/master/w_2560%2Cc_limit/Nelson-Darling-Nikki.jpg",
  },
  {
    userId: 3,
    albumId: 8,
    title: "When Doves Cry",
    description: "Prince and the Revolution",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987161/Purple%20Rain/06_-_When_Doves_Cry_zyq0cz.mp3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prince_doves.jpg",
  },
  {
    userId: 3,
    albumId: 8,
    title: "I Would Die 4 U",
    description: "Prince and the Revolution",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987159/Purple%20Rain/07_-_I_Would_Die_4_U_wmqj3w.mp3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/be/Prince_Die4U.jpg",
  },
  {
    userId: 3,
    albumId: 8,
    title: "Baby I'm a Star",
    description: "Prince",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987160/Purple%20Rain/08_-_Baby_I_m_a_Star_Explicit_h5x4rp.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-lmXN6wJGRn3K-0-t500x500.jpg",
  },
  {
    userId: 3,
    albumId: 8,
    title: "Purple Rain",
    description: "Prince",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987162/Purple%20Rain/09_-_Purple_Rain_jdkerz.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9c/Princepurplerain.jpg",
  },
  {
    userId: 4,
    albumId: 9,
    title: "Tangled up in Blue",
    description: "Bob Dylan",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987378/Blood%20on%20the%20Tracks/01_-_Tangled_up_in_Blue_wjwvb4.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5f/Tangled_Up_in_Blue_Cover.jpg",
  },
  {
    userId: 4,
    albumId: 9,
    title: "Simple Twist of Fate",
    description: "Bob Dylan",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987377/Blood%20on%20the%20Tracks/02_-_Simple_Twist_of_Fate_wsl92z.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-000349699254-fz1nag-t500x500.jpg",
  },
  {
    userId: 4,
    albumId: 9,
    title: "You're a Big Girl Now",
    description: "Bob Dylan",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987377/Blood%20on%20the%20Tracks/03_-_You_re_a_Big_Girl_Now_u7cpeb.mp3",
    imageUrl:
      "https://alldylan.com/wp-content/uploads/2016/11/big-girl-now-bob-dylan-750x576.jpg",
  },
  {
    userId: 4,
    albumId: 9,
    title: "Idiot Wind",
    description: "Bob Dylan",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987379/Blood%20on%20the%20Tracks/04_-_Idiot_Wind_fun476.mp3",
    imageUrl:
      "https://jmeshel.com//wp-content/uploads/2014/10/0851_155826_Dylan12cBarryFeinstein.jpg",
  },
  {
    userId: 4,
    albumId: 9,
    title: "You're Gonna Make Me Lonesome When You Go",
    description: "Bob Dylan",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987377/Blood%20on%20the%20Tracks/05_-_You_re_Gonna_Make_Me_Lonesome_When_You_Go_gvulnb.mp3",
    imageUrl:
      "https://cdn.smehost.net/bobdylancom-uscolumbiaprod/wp-content/uploads/2011/10/3992174_218.jpg",
  },
  {
    userId: 4,
    albumId: 9,
    title: "Meet Me in the Morning",
    description: "Bob Dylan",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987377/Blood%20on%20the%20Tracks/06_-_Meet_Me_in_the_Morning_ujkwzz.mp3",
    imageUrl: "https://i1.sndcdn.com/artworks-9s4qLUd0DHCZ-0-t500x500.jpg",
  },
  {
    userId: 4,
    albumId: 9,
    title: "Lily, Rosemary and the Jack of Hearts",
    description: "Bob Dylan",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987380/Blood%20on%20the%20Tracks/07_-_Lily_Rosemary_and_the_Jack_of_Hearts_dtz8kx.mp3",
    imageUrl: "https://pictures.abebooks.com/inventory/12561385943.jpg",
  },
  {
    userId: 4,
    albumId: 9,
    title: "If You See Her, Say Hello",
    description: "Bob Dylan",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987379/Blood%20on%20the%20Tracks/08_-_If_You_See_Her_Say_Hello_euwrhv.mp3",
    imageUrl:
      "https://media.npr.org/assets/img/2018/09/20/photo-credit-barry-feinstein_1974_3-cbad1c1631f37f7caf95267d486cafc2b52c4f8e.jpg",
  },
  {
    userId: 4,
    albumId: 9,
    title: "Shelter from the Storm",
    description: "Bob Dylan",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987379/Blood%20on%20the%20Tracks/09_-_Shelter_from_the_Storm_kj8qfk.mp3",
    imageUrl:
      "http://alldylan.com/wp-content/uploads/2018/08/bob-dylan-shelter-from-the-storm.jpg",
  },
  {
    userId: 4,
    albumId: 9,
    title: "Buckets of Rain",
    description: "Bob Dylan",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987377/Blood%20on%20the%20Tracks/10_-_Buckets_of_Rain_ao2l34.mp3",
    imageUrl:
      "https://www.rollingstone.com/wp-content/uploads/2018/11/bob-dylan-performing-in-1990.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Intro",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987467/The%20Miseducation%20of%20Lauryn%20Hill/01_-_Intro_pvu3gi.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Ex-Factor.jpg/220px-Ex-Factor.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Lost Ones",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987468/The%20Miseducation%20of%20Lauryn%20Hill/02_-_Lost_Ones_afmnjs.mp3",
    imageUrl: "https://i.ytimg.com/vi/Yq_3A_8C7Ag/maxresdefault.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Ex-Factor",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987469/The%20Miseducation%20of%20Lauryn%20Hill/03_-_Ex-Factor_cjirbq.mp3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/11/Ex-Factor.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "To Zion",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987469/The%20Miseducation%20of%20Lauryn%20Hill/04_-_To_Zion_hbkuyq.mp3",
    imageUrl:
      "https://images.genius.com/1b4427b3ad0a40feb97bb94e532da4b0.600x600x1.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Doo Wop",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987468/The%20Miseducation%20of%20Lauryn%20Hill/05_-_Doo_Wop_That_Thing_kl9jvt.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e3/Doowop-thatthing-lhill.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Superstar",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987470/The%20Miseducation%20of%20Lauryn%20Hill/06_-_Superstar_q9euvt.mp3",
    imageUrl: "https://i.ytimg.com/vi/f_cUk41450w/maxresdefault.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Final Hour",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987468/The%20Miseducation%20of%20Lauryn%20Hill/07_-_Final_Hour_vnzvd3.mp3",
    imageUrl: "https://i.ytimg.com/vi/uVYuWHqOyrw/maxresdefault.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "When It Hurts so Bad",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987472/The%20Miseducation%20of%20Lauryn%20Hill/08_-_When_It_Hurts_so_Bad_rgifei.mp3",
    imageUrl:
      "https://images.rapgenius.com/078172390a426e1de777de657cf2ec89.500x500x1.png",
  },
  {
    userId: 5,
    albumId: 10,
    title: "I Used To Love Him",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987468/The%20Miseducation%20of%20Lauryn%20Hill/09_-_I_Used_to_Love_Him_yz1hkd.mp3",
    imageUrl:
      "http://hiphoparchive.org/sites/default/files/styles/avatar/public/avatars/lauryn.jpg?itok=3Oez0VYS",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Forgive Them Father",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987471/The%20Miseducation%20of%20Lauryn%20Hill/10_-_Forgive_Them_Father_vhqnzt.mp3",
    imageUrl:
      "https://i.pinimg.com/550x/66/99/63/669963ecddf394cc3000761059b9e9cc.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Every Ghetto, Every City",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987471/The%20Miseducation%20of%20Lauryn%20Hill/11_-_Every_Ghetto_Every_City_Explicit_p6bhcb.mp3",
    imageUrl: "https://i.ytimg.com/vi/RfNJSKF9j4c/maxresdefault.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Nothing Even Matters",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987471/The%20Miseducation%20of%20Lauryn%20Hill/12_-_Nothing_Even_Matters_ureyfz.mp3",
    imageUrl:
      "https://images.genius.com/72a5219269e6016c9c14e2ea00e59f9b.800x800x1.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Everything is Everything",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987471/The%20Miseducation%20of%20Lauryn%20Hill/13_-_Everything_Is_Everything_pmpmae.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/59/Lauryn_Hill-Everything_Is_Everything.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "The Miseducation of Lauryn Hill",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987470/The%20Miseducation%20of%20Lauryn%20Hill/14_-_The_Miseducation_of_Lauryn_Hill_u6iiys.mp3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/55/LaurynHillTheMiseducationofLaurynHillalbumcover.jpg",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Can't Take My Eyes Off of You",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987470/The%20Miseducation%20of%20Lauryn%20Hill/15_-_Can_t_Take_My_Eyes_Off_of_You_I_Love_You_Baby_dzktbh.mp3",
    imageUrl:
      "https://e.snmc.io/i/600/s/8a640768bab05afed47b8e35c5cdd2a5/3680552/lauryn-hill-cant-take-my-eyes-off-of-you-Cover-Art.png",
  },
  {
    userId: 5,
    albumId: 10,
    title: "Tell Him",
    description: "Lauryn Hill",
    url: "https://res.cloudinary.com/diyjzl1ol/video/upload/v1677987471/The%20Miseducation%20of%20Lauryn%20Hill/16_-_Tell_Him_smr18v.mp3",
    imageUrl: "https://i.ytimg.com/vi/-RAqYg7bnmw/mqdefault.jpg",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Song.bulkCreate(songs, {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Songs", null, {});
  },
};
