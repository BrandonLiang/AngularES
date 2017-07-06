#!/bin/bash -e

host="localhost"
port=9200
index="account"
docType="info"

# delete index if it already exists
curl -XDELETE "http://${host}:${port}/${index}?pretty" || echo "Index ${index} not found"

# create index
curl -XPUT "http://${host}:${port}/${index}?pretty" -d '
{
 "mappings" : {
  "'${docType}'" : {
   "properties" : {
    "account_number": {"type": "integer"},
    "balance": {"type": "integer"},
    "firstname": {"type": "keyword"},
    "lastname": {"type": "keyword"},
    "age": {"type": "integer"},
    "gender": {"type": "keyword"},
    "address": {"type": "keyword"},
    "employer": {"type": "keyword"},
    "email": {"type": "keyword"},
    "city": {"type": "keyword"},
    "state": {"type": "keyword"}
   }
  }
 }
}'

# upload data to index
curl -H 'Content-Type:application/x-ndjson' -XPOST "http://${host}:${port}/${index}/${docType}/_bulk?pretty" --data-binary @../json/accounts.json
