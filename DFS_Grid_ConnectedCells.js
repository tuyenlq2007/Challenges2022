
//Binary search element in sorted array
grid=[[1,1,0,0],[0,1,1,0],[0,0,1,0],[1,0,0,0]]

//console.log(grid[0][0]);//1
//console.log(grid[1][0]);//0
//console.log(grid[0][1]);//1
//console.log(grid[1][1]);//0

console.log(largestRegion(grid))
//console.log(count_related_cell1(grid,0,0));//

function largestRegion(grid) {
        let maxRegion = 0;
        
        for (row = 0; row < 4; row++) {
            for (col = 0; col < 4; col++) {
                /* Find the largest region from the current cell */
                if (grid[row][col] == 1) {
                    let size  = count_related_cell(grid, row, col);
                    if (size>maxRegion) maxRegion= size;
                }
            }
        }
        return maxRegion;
    }
    
function findLargestRegion(grid, row, col){
/* Put boundary checks here (at top of recursive call), instead of before doing recursive call */
        if (row < 0 || row >= 4 || col < 0 || col >= 4 || grid == null || grid[row][col] == 0) {
            return 0;
        }

        grid[row][col] = 0; // we alter the original matrix here
        let size = 1;       // 1 accounts for our size
        
        /* Recursively search neighbors */
        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                size += findLargestRegion(grid, r, c);
            }
        }

        return size;
   
}


function count_related_cell(grid, row, col){
 if (row < 0 || row >= 4 || col < 0 || col >= 4 || grid == null || grid[row][col] == 0) {
            return 0;
        }

 count = 1;
 grid[row][col]=0
 for (r=row-1; r<=row+1; r++){
     for (c=col-1; c<=col+1; c++){
         count=count+count_related_cell(grid, r, c)
     }
  }
 return count;
   
}
