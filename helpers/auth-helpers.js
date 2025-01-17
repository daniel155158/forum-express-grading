const getUser = req => {
  return req.user || null // req.user ? req.user : null
}

const ensureAuthenticated = req => {
  return req.isAuthenticated()
}

module.exports = {
  getUser,
  ensureAuthenticated
}
