const ENDPOINT = "graphql";

const useFetchByGraphQl = async ($api,query,variables) => {
  return await $api.post(ENDPOINT, {
    query,
    variables,
  })
}

export { useFetchByGraphQl }
