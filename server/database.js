const mongoose = require("mongoose");
const URI = "mongodb+srv://barbearia_root:Barbearia.2025_@cluster0.farg7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//  Opção removida no Mongoose 6+
// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", true);
// mongoose.set("useCreateIndex", true);
// mongoose.set("useUnifiedTopoLoggy", true);

mongoose
.connect(URI)
.then(() => console.log("Conectado ao MongoDB!"))
.catch(err => console.error("Erro na conexão:", err));

