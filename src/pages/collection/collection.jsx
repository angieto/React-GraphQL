import React from "react"

import "./collection.scss"

const CollectionPage = ({ match }) => (
    <div className="collection-page">
        <h2>{match.params.categoryId}</h2>
    </div>
)

export default CollectionPage
