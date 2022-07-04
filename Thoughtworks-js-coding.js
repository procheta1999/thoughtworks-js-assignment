var arr=[4,5,6,7];

// map without inbuilt function
const mapFunction=(arr,func)=>
{
    var result=[];
    for(var i=0;i<arr.length;i++)
{
    result.push(func(arr[i]));
}
return result;
}

const square=(n)=>{
    return n*n;
}
var mapFunctionResult=mapFunction(arr,square);
console.log(mapFunctionResult);

//filter without inbuilt function

const filterFunction=(arr,func)=>
{
    var result=[];
    for(var i=0;i<arr.length;i++)
    {
        if(func(arr[i]))
        {
            result.push(arr[i]);
        }
    }
    return result;
}

const passFunction=(n)=>
{
    if(n>=6)
    {
        return true;
    }
}
var FilterFunctionResult=filterFunction(arr,passFunction);
console.log(FilterFunctionResult);

//reduce function without using inbuilt function

const reduceFunction=(arr,func,initialValue)=>
{
    var s=0;
    if(initialValue!=undefined)
    {
        s=func(s,initialValue);
    }
    for(var i=0;i<arr.length;i++)
    {
        s=func(s,arr[i]);
    }
    return s;
}

const sumFunction=(x,y)=>
{
    return x+y;
}
console.log(reduceFunction(arr,sumFunction));

// forEach function without inbuilt function

const forEachFunction=(arr,func)=>
{
    var result=[];
    for(var i=0;i<arr.length;i++)
    {
        func(arr[i]);
    }
}

const consoleFunction=(n)=>
{
    console.log(n);
}
forEachFunction(arr,consoleFunction);