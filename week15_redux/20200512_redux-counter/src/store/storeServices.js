const loadState = () => {
  const serializeState = localStorage.getItem('localStore');
  if(serializeState) {
    return JSON.parse(serializeState);
  }
  return undefined;
}

const saveState = (state) => {
  const serializeState = JSON.stringify(state);
  localStorage.setItem('localStore', serializeState);
}

export {
  loadState,
  saveState
}