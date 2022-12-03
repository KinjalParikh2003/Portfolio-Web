function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  createGrid(5,8,"c", "b")
}

function createGrid(hCount,vCount,uShape, uColor)
{
  for(j=0; j<vCount; j++)
    {
      for(i=0; i<hCount; i++)
        {
          if(uColor == "R" || uColor == "r")
        {
          fill("red")
        }
          else if(uColor == "B" || uColor == "b")
        {
          fill("blue")
        }
       else
            {
              noFill()
             
            }
        {
          if(uShape == "R" || uShape == "r")
            {
              rect(50*i, 50*j, 45,45)
             }
            else if (uShape == "C"|| uShape == "c")
            {
              circle(50*i+25, 50*j+25, 45)
            }
          else
            {
              noFill()
              rect(50*i, 50*j, 45,45)
            }
        }
    }
   } 
}