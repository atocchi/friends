module.exports = function(app) {

console.log("loaded")

let friends = [
{
    "name":"Ahmed",
    "photo":"https://i.imgur.com/C73XTb6.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
]
 //friends API
 app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

app.post("/api/friends", function(req, res) {
    let newFriend = req.body;

    console.log(newFriend);
    friends.push(newFriend);
    return res.status(200);
    
  });

}