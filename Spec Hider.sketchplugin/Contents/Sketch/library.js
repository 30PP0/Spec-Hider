//Thanks to https://github.com/preciousforever/sketch-toggle-layer-visibility

//Get layers with name
function getLayersWithName(name, rootLayer, exactMatch) {

  //Prepare predicate format
  var predicateFormat = {
    key: '(name != NULL) && ' + ((exactMatch) ? '(name == %@)' : '(name like %@)'),
    match: (exactMatch) ? name : (name + '*')
  };

  //Get and return matches
  return jsArray(filterWithPredicate([rootLayer children], predicateFormat));
}

//Filter array using NSPredicate
function filterWithPredicate(array, predicateFormat) {

  //Make sure that format is speficied
  if(!predicateFormat || !predicateFormat.key  || !predicateFormat.match) return;

  //Create predicate
  var predicate = NSPredicate.predicateWithFormat(predicateFormat.key, predicateFormat.match);
  var queryResult = array.filteredArrayUsingPredicate(predicate);

  return queryResult;
}

//Convert NSArray to js array
function jsArray(array) {
  var length = [array count];
  var jsArray = [];

  while(length--) {
    jsArray.push([array objectAtIndex: length]);
  }
  return jsArray;
}
