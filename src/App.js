import React from "react"
import { Switch, Route } from "react-router-dom"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import Header from "./components/header/header"
import HomePage from "./pages/home/homepage"
import ShopPage from "./pages/shop/shop"
import SignInNSignUpPage from "./pages/signin-n-signup/signin-n-signup"

import "./App.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        // setup an open subscription from firebase that tracks whenever the user's updated
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot((snapshot) => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data(),
                        },
                    })
                })
            }

            // if user logs out
            this.setState({ currentUser: userAuth })
        })
    }

    componentWillUnmount() {
        // close the subscription to prevent memory leak
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInNSignUpPage} />>
                </Switch>
            </div>
        )
    }
}

export default App
