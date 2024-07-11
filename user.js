const db = require('../conf');

const createUser = async (firstName , lastName , email , password) => {
    const [result] = await db.execute(
        'Insert Into users (first_name, last_name , email , password ) VALUES(?,?,?,?)',

        [firstName, lastName , email , password]

    );
    
    return result.insertId;
};

const userByEmail = async (email)=> {
    const [rows] = await db.execute('SELECT * from users WHERE email = ?', [email]);
    return rows[0];
};

module.exports = {
    createUsers ,
    userByEmail ,
};