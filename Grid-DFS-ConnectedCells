grid=[[1,1,0],[0,0,0],[0,0,0]]

console.log(grid[0][0]);//1
console.log(grid[1][0]);//0
console.log(grid[0][1]);//1
console.log(grid[1][1]);//0
console.log(count_related_cell(grid,0,1));

function count_related_cell(grid, row, col){
  if (row<0 || col<0|| row>grid.length||col>grid[0].length) return 0
  if (grid[row][col]==0) return 0
  let count=1
  grid[row][col]=0
  for (r=row-1; r<row+1; r++){
     for (c=col-1; c<col+1; c++){
         if (r!=row||c!=col)
         count=count+count_related_cell(grid, r, c)
     }
  }
  return count;
   
}
