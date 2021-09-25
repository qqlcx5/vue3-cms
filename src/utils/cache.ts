class LocalCache {
  getCache(key: string) {
    const data = window.localStorage.getItem(key)
    return data ? JSON.parse(data) : ''
  }
  setCache(key: string, value: string) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
