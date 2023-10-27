const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const secret = process.env.JWT_SECRET;

const users = [
  { id: 1, name: "Camila Perez", password: "prueba123" },
  { id: 2, name: "Kevin Conde", password: "prueba987" },
];

app.use(express.json());

// ruta de autenticación
app.post("/login", (req, res) => {
  const { name, password } = { name: "Camila Perez", password: "prueba123" };

  const user = users.find( user => user.name === name && user.password === password);

  if (!user) {
    return res.status(401).send({ message: "Credenciales invalidas" });
  }

  // crear un JWT
  const token = jwt.sign({ 
      name: user.name,
      password: user.password,
      exp: Date.now() + 60 * 2000
    }, secret)
  //enviar token
  res.send({ token });
});



app.get("/ruta-protegida", (req, res) => {
  try {    //beared
    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.verify(token, secret)

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expired" }); 
    }

    res.send("Ruta protegida");
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
});

app.listen(3000);

/* const {  id: user, password } = { id: 'Camila Perez', user: 'prueba123'}

const token = jwt.sign({
  user,
  password,
  exp: Date.now() + 60 *2000
}, secret)

res.send({ token }); */
