export const types = {
    ADD_ITEM: "ADD_ITEM",
    TOGGLE_STATUS: "TOGGLE_STATUS"
}

// TODO add a default title "New Todo" if one is not supplied
function addItem(title) {
    return {
        type: types.ADD_ITEM,
        title: title
    }
}

function toggleItemStatus(id) {
    return {
        type: types.TOGGLE_STATUS,
        id: id
    }
}

const actions = {
    addItem,
    toggleItemStatus
};

export default actions
