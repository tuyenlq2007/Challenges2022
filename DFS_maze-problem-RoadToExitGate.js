 const POSSIBLE_MOVE = 1
 var frontier_stack = []
 var visit_stack = []
 var i_EXIT = 9, j_EXIT = 12
 var maze = 
 [ [1,1,1,1,1,1,1,1,1,1,1,1,1],
   [1,0,1,0,1,0,1,0,0,0,0,0,1],
   [1,0,1,0,0,0,1,0,1,1,1,0,1],
   [1,0,0,0,1,1,1,0,0,0,0,0,1],
   [1,0,1,0,0,0,0,0,1,1,1,0,1],
   [1,0,1,0,1,1,1,0,1,0,0,0,1],
   [1,0,1,0,1,0,0,0,1,1,1,0,1],
   [1,0,1,0,1,1,1,0,1,0,1,0,1],
   [1,0,0,0,0,0,0,0,0,0,1,0,1],
   [1,1,1,1,1,1,1,1,1,1,1,1,1]
 ]
 var width = maze[0].length
 var height = maze.length
 
 function is_include(stack, object){
     include=false
     stack.forEach(e=>{
         if ((e.x == object.x) && (e.y == object.y) ) include = true
     })
     return include
 
 }
 
 function is_move_right(i,j){
     if (j+1<width) {
         if (is_posible_cells(i, j+1) && !is_include(visit_stack,{x:i, y:j+1})) return true
     }
     return false
 }
 
 function is_move_left(i,j){
     if (j-1>0) {
         if (is_posible_cells(i, j-1) && !is_include(visit_stack,{x:i, y:j-1})) return true
     }
     return false
 }
 
 function is_move_up(i,j){
     if (i-1>0) {
         if (is_posible_cells(i-1, j) && !is_include(visit_stack,{x:i-1, y:j})) return true
     }
     return false
 }
 
 function is_move_down(i,j){
     if (i+1<height) {
         if (is_posible_cells(i+1, j) && !is_include(visit_stack,{x:i+1, y:j})) return true
     }
     return false
 }
 
 function is_posible_cells(i,j){
     return maze[i][j]==POSSIBLE_MOVE
 }
 
 function is_exist_gate(i,j){
     return i==i_EXIT && j==j_EXIT
 }
 
 
 var cx = 0, cy=0
 frontier_stack.push({x:cx,y:cy})
 visit_stack.push({x:cx,y:cy})
 
 //start move
 while (frontier_stack.length>0 && !is_exist_gate(cx, cy)){
     pop = frontier_stack.pop()
     cx = pop.x
     cy=pop.y
     if (is_move_right(cx,cy) && !is_exist_gate(cx,cy)){
         frontier_stack.push({x:cx,y:cy+1})
         visit_stack.push({x:cx,y:cy+1})
         console.log('right')
     }
     
    
     if (is_move_left(cx,cy)&& !is_exist_gate(cx, cy)){
         frontier_stack.push({x:cx,y:cy-1})
         visit_stack.push({x:cx,y:cy-1})
         console.log('left')
 
     }
 
   
     if (is_move_up(cx,cy)&& !is_exist_gate(cx, cy)){
         frontier_stack.push({x:cx-1,y:cy})
         visit_stack.push({x:cx-1,y:cy})
         console.log('up')
 
     }
    
     if (is_move_down(cx,cy)&& !is_exist_gate(cx, cy)){
         frontier_stack.push({x:cx+1,y:cy})
         visit_stack.push({x:cx+1,y:cy})
         console.log('down')
 
     }
   
 }
 
 visit_stack.forEach(e=>console.log(e))
