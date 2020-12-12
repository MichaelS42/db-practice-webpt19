exports.seed = function (knex) {
  return knex("characters")
    .truncate()
    .then(() => {
      return knex('characters').insert([
        {
          id: 1,
          name: "Eleven",
          gender: "Female",
          imageurl:
            "https://upload.wikimedia.org/wikipedia/en/5/52/Eleven_%28Stranger_Things%29.jpg",
        },
        {
          id: 2,
          name: "Billy Hargrove",
          gender: "Male",
          imageurl:
            "https://i.pinimg.com/236x/a8/4c/9a/a84c9af7a4acb38e3e18f3dce67d8c80.jpg",
        },
        {
          id: 3,
          name: "Dustin Henderson",
          gender: "Male",
          imageurl:
            "https://upload.wikimedia.org/wikipedia/en/a/a4/Dustin_Henderson.jpeg",
        },
        {
          id: 4,
          name: "Mike Wheeler",
          gender: "Male",
          imageurl:
            "https://vignette.wikia.nocookie.net/strangerthings8338/images/f/f0/Mike_Wheeler_S3.png/revision/latest?cb=20190918231339",
        },
        {
          id: 5,
          name: "Steve Harrignton",
          gender: "Male",
          imageurl:
            "https://upload.wikimedia.org/wikipedia/en/8/8b/ST3_Steve_Harrington_portrait.jpg",
        },
        {
          id: 6,
          name: "Nancy Wheeler",
          gender: "Female",
          imageurl:
            "https://www.celebjacket.com/wp-content/uploads/2019/09/Stranger-Things-Season-2-Nancy-Wheeler-Jacket-1.jpg",
        },
      ]);
    });
};
