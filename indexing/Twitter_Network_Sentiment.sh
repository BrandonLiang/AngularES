#!/bin/bash -e

file="Twitter_Election/$1"
host="localhost"
port=9200
index="twitter_network_sentiment"
docType="$2"

# delete index if it already exists
curl -k -XDELETE "http://${host}:${port}/${index}?pretty" || echo "Index ${index} not found"

# create index
curl -k -XPUT "http://${host}:${port}/${index}?pretty" -d '
{
 "mappings" : {
  "'${docType}'" : {
   "properties" : {
    "user": {"type": "keyword"},
    "Original_User/Web": {"type": "keyword"},
    "Compound": {"type": "float"},
    "Negative": {"type": "float"},
    "Neutral": {"type": "float"},
    "Positive": {"type": "float"},
    "Tweet": {"type": "keyword"}
   }
  }
 }
}'

# upload data to index
export MAPRED_PARAMS="-D es.net.ssl=true -D es.net.ssl.cert.allow.all=true $MAPRED_PARAMS"
/usr/local/lib/tresata-tools/bin/hdfs-to-es --hdfs --input bsv%${file} --host ${host} --port ${port} --index ${index} --docType ${docType} #--id ${id}
