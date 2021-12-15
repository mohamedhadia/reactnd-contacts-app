import { object } from "prop-types";
import React, { Component } from "react";

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Jones",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 3,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};

class Movie extends Component {
  constructor(props) {
    super(props);
    this.catUsers = {};

    profiles.map((profile) => {
      let movieId = profile.favoriteMovieID;

      if (this.catUsers[movieId]) {
        this.catUsers[movieId].push(profile.userID);
      } else {
        this.catUsers[movieId] = [profile.userID];
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
        {Object.keys(movies).map((key) => (
          <div key={key.id}>
            <h3>{movies[key].name} : Liked By</h3>
            {!this.catUsers[key] || this.catUsers[key].length === 0 ? (
              <p>no one liked this movie</p>
            ) : (
              this.catUsers[key].map((user) => {
                return <p key={user}>{users[user].name}</p>;
              })
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Movie;
