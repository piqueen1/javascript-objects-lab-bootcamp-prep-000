var recipes = Object.assign ({});

function updateObjectWithKeyAndValue(object, key, value) {
 const target = object;
 const source = { [key]: value };
 const returnedTarget = Object.assign({}, target, source);
 return returnedTarget;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object.key = value;
 return object
}

function deleteFromObjectByKey(object, key) {
    delete object[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}

