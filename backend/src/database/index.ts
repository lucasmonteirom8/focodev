import Sequelize from 'sequelize';
import dbconfig from '../config/database';
import User from '../models/User.model';


class Database {

    public connection: Sequelize.Sequelize | undefined;

    constructor(){

        this.init();
        
        User.init(connection);
        User.associations(this.connection)
        
    }

    init(): void {
        this.connection = new Sequelize.Sequelize(dbconfig);      
    }
}


const database: Database = new Database();

export default database;