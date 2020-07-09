import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCollections } from "../../redux/shop/shop-selectors"

import CollectionPreview from "../collection-preview/collection-preview"

import "./collections-overview.scss"

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...collections }) => (
            <CollectionPreview key={id} {...collections} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionsOverview)