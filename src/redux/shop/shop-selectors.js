import { createSelector } from "reselect"
import memoize from "lodash.memoize"

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4,
    men: 5,
}

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

// memoize will just return the stored selector if the same collectionUrlParam's passed in again
export const selectCollection = memoize((collectionUrlParam) =>
    createSelector([selectCollections], (collections) =>
        collections.find(
            (collection) =>
                collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    )
)
