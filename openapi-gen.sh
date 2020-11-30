docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/packages/server/swagger-spec.json \
    -g typescript-angular \
    -o /local/client/hoge