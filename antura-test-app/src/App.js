import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import UserInfo from "./UserInfo"

const API_URL = "https://randomuser.me/api/"

class App extends React.Component {
  state = {
    fetchedData: {
      results: [],
      info: {}
    },
    isLoading: true,
    error: null
  }

  componentDidMount() {
    this.fetchUser()
  }

  fetchUser() {
    console.log("fetching user....")

    fetch(API_URL)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw Error("An occurred while fetching the user")
        }
      })
      .then(res => this.setState({ fetchedData: res, isLoading: false }))
      .catch(error => this.setState({ error }))
  }

  render() {
    const { fetchedData, isLoading, error } = this.state

    return (
      <Container className="App" maxWidth="sm">
        {error && <h1>{error.message}</h1>}
        {isLoading && <CircularProgress />}
        {!isLoading &&
          <Grid container>
            <Grid item xs={2}>
              <Avatar alt="Remy Sharp" src={fetchedData.results[0].picture.thumbnail} />
            </Grid>
            <Grid item xs={10}>
              <UserInfo {...fetchedData.results[0]}/>
            </Grid>
          </Grid>
        }
        <Grid container>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              disabled={isLoading}
              fullWidth
              onClick={() => this.fetchUser()}>
              Fetch user
        </Button>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default App;
