docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/swagger-spec.json \
    -g typescript-angular \
    -o /local/client/hoge