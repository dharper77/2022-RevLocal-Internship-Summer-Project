const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://dharper:Tz34Hki2D@cluster0.7lcwkon.mongodb.net/test?retryWrites=true&w=majority";


    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        // await  listDatabases(client);
        await findAllData(client)
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function findAllData(client, ) {
    const result = await client.db('consumore').collection('collection1').find()

    result && console.log(result)
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);