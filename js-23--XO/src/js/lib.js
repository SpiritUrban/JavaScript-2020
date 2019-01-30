function nodeListToArr (nodeList) {
    const arr = []
    for (let i = 0; i< nodeList.length; i++) {
        arr.push(nodeList[i])
    }
    return arr
}

function random(){
    return Math.floor( Math.random() * 9 )
}