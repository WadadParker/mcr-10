export const getLocalStorage = (value) => JSON.parse(localStorage.getItem(value))

export const setLocalStorage = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value))
  }