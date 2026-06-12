import couchbase from "couchbase"

const cluster =await couchbase.connect(
    "couchbases://cb.5tebyuzry7ze-q6.cloud.couchbase.com",
    {
        username:"nodejs-user",
        password:"9865Paul@"
    }
)

const bucket=cluster.bucket("documents")

const collection =bucket.defaultCollection()

export {collection}