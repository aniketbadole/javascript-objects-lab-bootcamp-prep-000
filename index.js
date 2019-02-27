var recipes = { foo: 'bar'}

function updateObjectWithKeyAndValue(object, key, value) {
  //return recipes
  Object.assign({}, object, key, value)
}

