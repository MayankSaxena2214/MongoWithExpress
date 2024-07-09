const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

const sampleChats = [
  {
    from: "Alice",
    to: "Admin",
    msg: "Hello Admin, could you assist me with my account setup?",
    createdAt: new Date(),
  },
  {
    from: "Bob",
    to: "Support Team",
    msg: "I seem to be having trouble accessing my profile. Can someone help?",
    createdAt: new Date(),
  },
  {
    from: "Charlie",
    to: "Sales Department",
    msg: "I'm really interested in the new product launch. Could you tell me more about it?",
    createdAt: new Date(),
  },
  {
    from: "Diana",
    to: "Human Resources",
    msg: "I'm looking for new opportunities. Do you have any openings?",
    createdAt: new Date(),
  },
  {
    from: "Eva",
    to: "Marketing Team",
    msg: "I heard about your upcoming event. How can I get involved?",
    createdAt: new Date(),
  },
  {
    from: "Frank",
    to: "Technical Support",
    msg: "My computer suddenly stopped working. Any advice on what might be wrong?",
    createdAt: new Date(),
  },
  {
    from: "Grace",
    to: "Customer Care",
    msg: "There seems to be an issue with my recent purchase. Order #12345.",
    createdAt: new Date(),
  },
  {
    from: "Hannah",
    to: "Billing Department",
    msg: "I received my invoice #67890 but I have a few questions about it.",
    createdAt: new Date(),
  },
];
Chat.insertMany(sampleChats)
.then((res)=>console.log(res))
.catch((err)=>console.log(err));