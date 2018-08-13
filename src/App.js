import React, { Component } from 'react'
import './App.css'
import { Router } from '@reach/router'
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core'

import Header from './components/Header'
import Home from './pages/Home'
import AddMovieForm from './pages/AddMovieForm'
import MovieId from './components/MovieId'
import DeleteMovie from './components/DeleteMovie'
import EditeMovies from './components/EditeMovies'

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});


const App = ({ classes }) => (
 
      <div>
      <CssBaseline />
        <Header/>
        <main className={classes.main}>
          <Router>
            <Home path ="/home" />
            <EditeMovies path="/update/:id" />
            <DeleteMovie path="/delete/:id" />
            <MovieId path="/movie/:id" />
            <AddMovieForm path="/formulaire" />
          </Router>
        </main>
      </div>
)

export default withStyles(styles)(App)
