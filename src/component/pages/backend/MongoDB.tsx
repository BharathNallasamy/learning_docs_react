import { useState } from "react";

const MongoDB = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "🍃" },
    { id: "crud", label: "CRUD Operations", icon: "📝" },
    { id: "mongoose", label: "Mongoose ODM", icon: "🦫" },
    { id: "aggregation", label: "Aggregation", icon: "📊" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Introduction to MongoDB</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connecting to MongoDB</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('myDatabase');
    return db;
  } catch (error) {
    console.error(error);
  }
}

connect();`}
              </pre>
            </div>
          </div>
        );
      case "crud":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">CRUD Operations</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Insert
await collection.insertOne({ name: 'Alice', age: 25 });
await collection.insertMany([
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
]);

// Find
const users = await collection.find({}).toArray();
const user = await collection.findOne({ name: 'Alice' });

// Update
await collection.updateOne(
  { name: 'Alice' },
  { $set: { age: 26 } }
);

await collection.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: 'young' } }
);

// Delete
await collection.deleteOne({ name: 'Bob' });
await collection.deleteMany({ age: { $gt: 40 } });`}
              </pre>
            </div>
          </div>
        );
      case "mongoose":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Mongoose ODM</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://localhost/mydb');

// Define Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

// Create Model
const User = mongoose.model('User', userSchema);

// CRUD Operations
const user = new User({
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
});

await user.save();

const users = await User.find({ age: { $gte: 18 } });
await User.findByIdAndUpdate(id, { age: 26 });
await User.findByIdAndDelete(id);`}
              </pre>
            </div>
          </div>
        );
      case "aggregation":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Aggregation Pipeline</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Aggregation pipeline
const results = await collection.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: '$city', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 }
]).toArray();

// Common stages
// $match - filter documents
// $group - group by field
// $project - select fields
// $sort - sort results
// $limit - limit results
// $lookup - join collections`}
              </pre>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50">
      <div className="bg-gradient-to-r from-green-700 to-lime-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">MongoDB Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              NoSQL database for modern applications
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === topic.id
                    ? "bg-gradient-to-r from-green-700 to-lime-700 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-2xl">{topic.icon}</span>
                <span>{topic.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MongoDB;