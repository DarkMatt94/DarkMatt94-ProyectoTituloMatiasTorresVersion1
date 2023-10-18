const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: 'userId',
    secret: 'userSecret',
    resave: false,
    saveUninitialized: true, // Guardar incluso si no se ha modificado
    cookie: { httpOnly: true }, // Cookie no caduca al cerrar el navegador
  })
);

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'signup',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error registering user' });
    } else {
      db.query(
        'INSERT INTO login (username, email, password) VALUES (?, ?, ?)',
        [username, email, hash],
        (err, result) => {
          if (err) {
            console.error('Error registering user:', err);
            res.status(500).send({ message: 'Error registering user' });
          } else {
            console.log('User registered successfully');
            res.status(200).send({ message: 'User registered successfully' });
          }
        }
      );
    }
  });
});

app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM login WHERE email = ?', [email], (err, result) => {
    if (err) {
      console.error('Error logging in:', err);
      res.status(500).send({ message: 'Error logging in' });
    } else if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          console.log('User logged in successfully');
          res.status(200).send(result);
        } else {
          console.log('Wrong email/password');
          res.status(401).send({ message: 'Wrong email/password' });
        }
      });
    } else {
      console.log('User does not exist');
      res.status(401).send({ message: 'User does not exist' });
    }
  });
});

app.get('/logout', (req, res) => {
  // Eliminar la cookie de sesión
  res.clearCookie('userId'); // 'userId' es el nombre de la cookie
  req.session.destroy(); //  destruir la sesión si estás usando express-session

  res.json({ message: 'Logout successful' });
  console.log('Logout successful');
});

app.get('/users', (req, res) => {
  // Realiza una consulta a la base de datos para obtener la lista de usuarios
  db.query('SELECT * FROM login', (err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send({ message: 'Error fetching users' });
    } else {
      res.status(200).json(result);
    }
  });
});

const port = 3031;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//Materia -Contenido
// Ruta para obtener todas las unidades de inglés
app.get('/unidades_ingles', (req, res) => {
  db.query('SELECT * FROM unidades_ingles', (err, unidadesResult) => {
    if (err) {
      console.error('Error fetching English units:', err);
      res.status(500).send({ message: 'Error fetching English units' });
    } else {
      //  unidades de inglés
      res.status(200).json({ unidades: unidadesResult });
    }
  });
});

// Ruta para obtener todas las materias de inglés junto con sus unidades correspondientes
app.get('/materias_ingles', (req, res) => {
  // Realiza una consulta SQL JOIN para obtener materias junto con sus unidades
  db.query(
    'SELECT materias.*, unidades.nombre AS unidad_nombre FROM materias_ingles materias JOIN unidades_ingles unidades ON materias.unidad_id = unidades.id',
    (err, materiasResult) => {
      if (err) {
        console.error('Error fetching English materials:', err);
        res.status(500).send({ message: 'Error fetching English materials' });
      } else {
        // materias de inglés con sus unidades correspondientes
        res.status(200).json({ materias: materiasResult });
      }
    }
  );
});

// Ruta para obtener una materia de inglés por su ID
app.get('/materias_ingles/:id', (req, res) => {
  const materiaId = req.params.id; // Obtiene el ID de la materia desde los parámetros de la URL

  //consulta SQL para obtener la materia por su ID
  db.query(
    'SELECT * FROM materias_ingles WHERE id = ?',
    [materiaId],
    (err, materiaResult) => {
      if (err) {
        console.error('Error fetching English material:', err);
        res.status(500).send({ message: 'Error fetching English material' });
      } else if (materiaResult.length === 0) {
        // Si no se encuentra ninguna materia con el ID proporcionado, envía una respuesta de error
        res.status(404).send({ message: 'Material not found' });
      } else {
        // Si se encuentra la materia, envía la información de la misma como respuesta
        res.status(200).json({ materia: materiaResult[0] });
      }
    }
  );
});

//ChatGPT
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: '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', // clave de API real
});

//Version funcional con gpt
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    //  mensajes del cliente desde la solicitud
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'assistant',
          content: prompt,
        },
      ],
      temperature: 1,
      max_tokens: 250,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.send(response.choices[0].message.content);
  } catch (err) {
    res.status(500).send(err);
  }
});

/*
Version con davinci
app.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    // Obtén los mensajes del cliente desde la solicitud
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt,
      temperature: 1,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.send(response.choices[0].text);
  } catch (err) {
    res.status(500).send(err);
  }
});*/
