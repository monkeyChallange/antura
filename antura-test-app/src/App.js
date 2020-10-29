import React from "react";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

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
        <Button variant="outlined" color="primary" disabled={isLoading} onClick={() => this.fetchUser()}>
          Fetch user
        </Button>
        {error && <h1>{error.message}</h1>}
        {isLoading && <CircularProgress />}
        {!isLoading &&
          <React.Fragment>
            <h1>Seed: {fetchedData.info.seed}</h1>
            {fetchedData.results.map((result, index) => (
              <h1 key={index}>
                {result.gender}
              </h1>
            ))}
          </React.Fragment>
        }
      </Container>
    )
  }
}

export default App;
