const express = require('express')
const app = express()

const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const insertPerson = async () => {
    const sql = `INSERT INTO people(name) values('Mike')`
    try {
        await connection.promise().query(sql)
        console.log('Pessoa inserida com sucesso')
    } catch (error) {
        console.error('Erro ao inserir pessoa:', error)
    }
}

app.get('/', async (req,res) => {
    

    try {
        // Usando Promises
        const [rows] = await connection.promise().query('SELECT * FROM people');
        
        let html = '<h1>Full Cycle Rocks!</h1>';

        html += '<table border="1" style="border: 1px solid;">';
        html+= `<tr>
        <td>
        ID
        </td>
        <td>
        Name
        </td>
                </tr>`
        rows.forEach(person => {
            html += 
            `<tr>
            <td>${person.id}</td>
            <td>${person.name}</td>
            </tr>`; 
        });
        
        html += '</table>';
        res.send(html)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
    insertPerson()
})

// Tratamento adequado do fechamento da conexão
process.on('SIGTERM', () => {
    connection.end()
    process.exit(0)
})