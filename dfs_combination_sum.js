var combinationSum = function (candidates, thetarget){
    var listElements = candidates
    var target = thetarget
    var results = []
    var currentList = []
    function combiSum(index){
        if (index >= listElements.length) return
        tempSum = 0
        currentList.forEach(e => {tempSum = tempSum + e})
        if (tempSum == target){
            results.push([...currentList])
            return
        }
        if (tempSum > target) return
        currentList.push(listElements[index])
        combiSum(index)
        currentList.pop()
        combiSum(index+1)
    }
    
    combiSum(0)
    return results
}



results = combinationSum([1,2,3], 7)
results.forEach(e => console.log(e))
