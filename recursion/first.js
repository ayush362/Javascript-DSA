function shower()
{
    console.log("Taking shower");
}
 function breakfast()
 {
    let food = cookfood();
    console.log(`Eating ${food}`)
 }

 function cookfood()
 {
    let items = ["Egg","Butter chicken","salad","fruits"]
    let food = Math.floor(Math.random() * items.length)
    return items[food];
 }

 function ready()
 {
    shower();
    breakfast();
    console.log("Ready to go to work");
 }

 ready();