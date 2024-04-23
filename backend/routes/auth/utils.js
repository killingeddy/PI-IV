const register = (email, name, cpf, password) => {
    return {
        text: `
            INSERT INTO users (email, name, cpf, password)
            VALUES ($1, $2, $3, $4)
            RETURNING id, email, name, cpf
        `,
        values: [email, name, cpf, password]
    };
};

const checkUser = (email, cpf) => {
    return {
        text: `
            SELECT *
            FROM users
            WHERE email = $1 OR cpf = $2
        `,
        values: [email, cpf]
    };
};

const login = (email) => {
    return {
        text: `
            SELECT *
            FROM users
            WHERE email = $1
        `,
        values: [email]
    };
};

const edit = (id, email, name, cpf, password) => {
    return `
        UPDATE users
        SET email = '${email}', name = '${name}', password = '${password}', cpf = '${cpf}'
        WHERE id = ${id}
        RETURNING id, email, name, cpf
    `;
};

const getUser = (id) => {
    return `
        SELECT *
        FROM users
        WHERE id = ${id}
    `;
};

module.exports = {
    register,
    checkUser,
    login,
    edit,
    getUser
};