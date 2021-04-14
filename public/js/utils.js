function pathUtil(...params) {
  const path = window.location.pathname.split('/').slice(1);
  path.length = 2;
  path.concat(params);
  return `${window.location.origin}/api/${path.join('/')}/${params.join('/')}`;
}
