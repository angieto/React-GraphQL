import React from "react"
import { connect } from "react-redux"
import { selectCollection } from "../../redux/shop/shop-selectors"

import "./collection.scss"

const CollectionPage = ({ collection }) => {
    return (
        <div className="collection-page">
            <h2>{collection.title}</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
