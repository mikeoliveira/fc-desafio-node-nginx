const express = require('express')
const app = express()

// Add middleware to parse POST request body
app.use(express.urlencoded({ extended: true }))

const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const insertPerson = async (name) => {
    const sql = `INSERT INTO people(name) values(?)`
    try {
        await connection.promise().query(sql, [name])
        console.log('Pessoa inserida com sucesso')
        return true
    } catch (error) {
        console.error('Erro ao inserir pessoa:', error)
        return false
    }
}

const deletePerson = async (id) => {
    const sql = `DELETE FROM people WHERE id = ?`
    try {
        await connection.promise().query(sql, [id])
        console.log('Pessoa excluída com sucesso')
        return true
    } catch (error) {
        console.error('Erro ao excluir pessoa:', error)
        return false
    }
}

const generateTable = (rows) => {
    let html = '<h1>Full Cycle Rocks!</h1>';
    
    // Add form for new name
    html += `
    <form action="/save" method="POST">
        <input type="text" name="name" placeholder="Digite um nome" required>
        <button type="submit">Salvar Nome</button>
    </form>
    <br>`;

    html += '<table border="1" style="border: 1px solid;">';
    html += `<tr>
        <td>ID</td>
        <td>Name</td>
        <td>Ações</td>
    </tr>`;
    
    rows.forEach(person => {
        html += `
        <tr>
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>
                <a href="/delete/${person.id}" onclick="return confirm('Tem certeza que deseja excluir?')">
                    Excluir
                </a>
            </td>
        </tr>`; 
    });
    
    html += '</table>';
    return html;
}

app.get('/', async (req, res) => {
    try {
        const [rows] = await connection.promise().query('SELECT * FROM people');
        const html = generateTable(rows);
        res.send(html);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/save', async (req, res) => {
    const { name } = req.body;
    
    if (!name) {
        return res.status(400).send('Nome é obrigatório');
    }

    try {
        const success = await insertPerson(name);
        if (success) {
            // Redirect back to home page to see updated table
            res.redirect('/');
        } else {
            res.status(500).send('Erro ao salvar pessoa');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    
    if (!id) {
        return res.status(400).send('ID é obrigatório');
    }

    try {
        const success = await deletePerson(id);
        if (success) {
            // Redirect back to home page to see updated table
            res.redirect('/');
        } else {
            res.status(500).send('Erro ao excluir pessoa');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

// Tratamento adequado do fechamento da conexão
process.on('SIGTERM', () => {
    connection.end()
    process.exit(0)
})