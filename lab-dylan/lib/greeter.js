exports.hiWorld = (name, ...extra)=>{
  if(typeof name !== 'string') {
    return null;
  }

  if (extra.length) {
    return null;
  }

  if(name)
    return `hello ${name}`;

  // name might be an empty string!
  return null;
};