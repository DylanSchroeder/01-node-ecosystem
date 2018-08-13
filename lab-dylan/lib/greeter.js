exports.hiWorld = (name, ...extra)=>{
  if(typeof name !== 'string') {
    return null;
  }

  if(name === 'world'){
    return 'hello world';
  }

  if(name)
    return `hello ${name}`;
};