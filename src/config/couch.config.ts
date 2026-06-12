import couchbase from "couchbase"

const cluster =await couchbase.connect(
    "couchbases://cb.5tebyuzry7ze-q6.cloud.couchbase.com",
    {
        username:"your-username",
        password:"your-password"
    }
)

const bucket=cluster.bucket("documents")

const collection =bucket.defaultCollection()

export {collection}
