const db = require('../db');

// ToDo
class UsersController {
    async createUser(req, res) {
        const { email, password } = req.body;
        const isUser = await db.query(`SELECT * FROM users WHERE email = $1 LIMIT 1`, [email]);
        if (!!isUser.rows.length) {
            return res.status(401).json({ error: "Пользователь с таким email уже существует" })
        }

        const newUser = await db.query(`
            INSERT INTO users (email, password, role)
             values ($1, $2, $3) RETURNING *`,
            [email, password, 'user']
        );
        const user = {email: newUser.rows[0].email};
        console.log("user", user);
        res.cookie('auth', user, {
            maxAge: 9000000000, // Время жизни в миллисекундах
            httpOnly: true, // Доступно только через HTTP(S), не доступно через JavaScript
            secure: process.env.NODE_ENV === 'production', // Использовать secure только в продакшене
            sameSite: 'Strict' // Защита от CSRF
        });
        res.json(user);
    }

    async isAuth(req, res) {
        const cookies = req.cookies; // Все куки
        if (cookies.auth && cookies.auth.email) {
            res.json({email: cookies.auth.email})
        } else {res.json({email: null});}
        
    }

    async isUser(req, res) {
        const { email, password } = req.body;

        const isEmail = await db.query(`SELECT * FROM users WHERE email = $1 LIMIT 1`, [email]);
        if (isEmail.rows.length === 0) {
            return res.status(404).json({ error: 'Пользователь с таким email не найден' });
        }

        const isPassword = await db.query(`SELECT * FROM users WHERE email = $1 AND password = $2 LIMIT 1`, [email, password]);
        if (isPassword.rows.length === 0) {
            return res.status(404).json({ error: 'Неправильный пароль' });
        }

        const user = await db.query(`SELECT * FROM users WHERE email = $1 LIMIT 1`, [email]);
        res.cookie('auth', user.rows[0], {
            maxAge: 900000000, // Время жизни в миллисекундах
            httpOnly: true, // Доступно только через HTTP(S), не доступно через JavaScript
            secure: process.env.NODE_ENV === 'production', // Использовать secure только в продакшене
            sameSite: 'Strict' // Защита от CSRF
        });
        res.json({
            email: user.rows[0].email
        });
    }
}

module.exports = new UsersController();