let parseUri=require("dburi2config");

let config=parseUri("mysql://root@localhost:3306/sakila?encrypt=true&param1=value1");

//console.log(config);
var knex = require('knex')({
  client: "mysql",
  connection: config
});

let listTablesAsync=require("../index").listTablesAsync;
let listDatabasesAsync=require("../index").listDatabasesAsync;


listTablesAsync(knex).then((rst)=>{
   console.log("databases",rst);
})


listTablesAsync(knex).then((rst)=>{
   console.log("tables",rst);
})


// knex.select()
//     .from('city')
//     .limit(10)
//     .offset(100)
//     .then((rst)=>{
//         console.log(rst);
//     })

// knex.raw('select * from city').then(function(resp) {
    
// });


