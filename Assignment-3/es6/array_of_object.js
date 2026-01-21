const mcuMovies = [
    {
        name: "Captain Marvel",
        year: 2019,
        rating: 6.8,
        superheroes: ["Captain Marvel", "Nick Fury", "Maria Rambeau"]
      },
      {
        name: "Iron Man",
        year: 2008,
        rating: 7.9,
        superheroes: ["Iron Man", "Pepper Potts", "James Rhodes"]
      },
      {
        name: "Guardians of the Galaxy",
        year: 2014,
        rating: 8.0,
        superheroes: ["Star-Lord", "Gamora", "Drax", "Rocket", "Groot"]
      },
      {
        name: "The Avengers",
        year: 2012,
        rating: 8.0,
        superheroes: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"]
      },
      {
        name: "Captain America: The Winter Soldier",
        year: 2014,
        rating: 7.8,
        superheroes: ["Captain America", "Black Widow", "Falcon"]
      },
      {
        name: "Black Panther",
        year: 2018,
        rating: 7.3,
        superheroes: ["Black Panther", "Shuri", "Okoye", "M'Baku"]
      },
      {
        name: "Thor: Ragnarok",
        year: 2017,
        rating: 7.9,
        superheroes: ["Thor", "Hulk", "Loki", "Valkyrie"]
      }
    ];
    
    // Display movie name in the format - "MOVIENAME is released on YEAR and has a ratigng of RATING"
    // mcuMovies.forEach((movie)=>{
    //   // console.log(`${movie.name} is released on ${movie.year} and has a ratigng of ${movie.rating}`)
    //   let { name, year, rating } = movie
    //   console.log(`${name} is released on ${year} and has a ratigng of ${rating}`)
    // })

    // Create an array with all the movie names
    // let movieNams = mcuMovies.map(movie => movie.name)
    // console.log(movieNams)

    // Find the movies relesed after 2015
    // let moviesAfter2015 = mcuMovies.filter(movie => movie.year > 2015)
    // let moviesAfter2015 = mcuMovies.filter(movie =>{
    //   if(movie.year > 2015) return true
    //   else return false
    // } )
    // console.log(moviesAfter2015)

    // Find the average rating of all the movies
    // let totalRating = mcuMovies.reduce((totalRating, movie)=>{
    //   return totalRating + movie.rating
    // },0)
    // let totalRating = mcuMovies.reduce((totalRating, movie)=>totalRating + movie.rating, 0)
    // console.log(`Average Rating is ${totalRating/mcuMovies.length}`)
    

    // Display the movie where "Iron Man" is involved
    // let moviesOfIronMan = mcuMovies.filter(movie => movie.superheroes.includes("Iron Man"))
    // console.log(moviesOfIronMan)

    // Delete "Guardians of the Galaxy"
    // let newMovies = mcuMovies.filter(movie => movie.name !==  "Guardians of the Galaxy")
    // console.log(newMovies)
    
    // sort the movies based on release year
    // mcuMovies.sort((m1, m2) => m1.rating - m2.rating)
    mcuMovies.sort((m1, m2) => m1.year - m2.year)
    console.log(mcuMovies)
    