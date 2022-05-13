let lastPostIndexKey = "LastPostIndexKey";

function getLastPostIndex() {
    return parseInt(localStorage.getItem(lastPostIndexKey) || '0');
}

function setLastPostIndex(index) {
    localStorage.setItem(lastPostIndexKey, index)
}

export { getLastPostIndex, setLastPostIndex }