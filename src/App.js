import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import Header from "./components/header/header"
import HomePage from "./pages/home/homepage"
import ShopPage from "./pages/shop/shop"
import SignInNSignUpPage from "./pages/signin-n-signup/signin-n-signup"

import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/user-actions"

import "./App.css"

class App extends React.Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props
        // setup an open subscription from firebase that tracks whenever the user's updated
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot((snapshot) => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    })
                })
            }

            // if user logs out
            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        // close the subscription to prevent memory leak
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() => {
                            return this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInNSignUpPage />
                            )
                        }
                            
                        }
                    />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
