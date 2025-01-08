require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gamer server Is running");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jtl5b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const reviewCollection = client.db("ReviewDB").collection("Review");
    const GameCollection = client.db("GameCollectionDB").collection("Games");
    const watchListCollection = client.db("watchListCollectionDB").collection("watchList");
    // data post
    app.post("/reviews", async (req, res) => {
      const reviews = req.body;
      const result = await reviewCollection.insertOne(reviews);
      res.send(result);
    });
    app.get("/reviews", async (req, res) => {
      const cursor = reviewCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/reviewDetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviewCollection.findOne(query);
      res.send(result);
    });

    app.get("/myReviews/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };

      const result = await reviewCollection.find(query).toArray();
      res.send(result);
    });
    // Games
    app.post("/games", async (req, res) => {
      const games = req.body;
      const result = await GameCollection.insertOne(games);
      res.send(result);
    });
    app.get("/games", async (req, res) => {
      const cursor = GameCollection.find().limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.patch("/updateReview/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const reviewDoc = req.body;
      const review = {
        $set: {
          name: reviewDoc.name,
          email: reviewDoc.email,
          photo: reviewDoc.photo,
          title: reviewDoc.title,
          description: reviewDoc.description,
          rating: reviewDoc.rating,
          publishing_Year: reviewDoc.publishing_Year,
          genre: reviewDoc.genre,
        },
      };
      const result = await reviewCollection.updateOne(filter, review, options);
      res.send(result);
    });

    app.delete("/reviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviewCollection.deleteOne(query);
      res.send(result);
    });

    // Wishlist put data 
    app.post('/watchList',async(req,res)=>{
      const watch=req.body;
      const result= await watchListCollection.insertOne(watch);
      res.send(result);
    })

    // watchList get data 

    app.get('/watchList/:email',async(req,res)=>{
      const email=req.params.email;
      const query={email};
      const cursor=watchListCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    })
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
