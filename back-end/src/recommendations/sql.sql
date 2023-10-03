SELECT text, dot_product(vector, JSON_ARRAY_PACK("[placeholder]")) AS score
FROM embeddings
ORDER BY score DESC
LIMIT 5;