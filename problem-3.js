function isodd(a)
{
  if(a%2!=0){
    return true
  }
  else{
    return false
  }
}
function print(limit)
{
  for(let i=0;i<=limit;i++)
    {
      if(isodd(i)==true)
      {
        console.log(i);
      }
    }  
}
print(5);