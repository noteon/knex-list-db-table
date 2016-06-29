function getMySqlListProp(resp){
    let vals=resp[0];
    if (!vals) return;

    return Object.keys(vals && vals[0])[0]
}

function getMySqlReturnValues(resp){
    let prop=getMySqlListProp(resp)
    return prop && resp[0].map(it=>it[prop])
}

//refer to: http://troels.arvin.dk/db/rdbms/#cli-list_of_databases
function listDatabasesAsync(knex){
    let dialect=knex.client.config.client;
    if (dialect==="mysql")
        return knex.raw('show databases').then(getMySqlReturnValues)
    else throw new Error(`${dialect} not supported`);
}

//refer to: http://troels.arvin.dk/db/rdbms/#cli-list_of_tables
function listTablesAsync(knex){
    let dialect=knex.client.config.client;
    if (dialect==="mysql")
        return knex.raw('show tables').then(getMySqlReturnValues)
    else throw new Error(`${dialect} not supported`);
}

module.exports={
    listDatabasesAsync,
    listTablesAsync
}