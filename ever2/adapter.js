const Adapter = {
  baseUrl: "http://localhost:3000/api/v1/notes",

  getAll: function() {
    return fetch(this.baseUrl).then(res => res.json())
  },

  getOne: function(id) {
    return fetch(`${this.baseUrl}/${id}`).then(res => res.json())
  },

  create: function(data) {
    let options = {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    }
    return fetch(this.baseUrl, options).then(res => res.json())
  },

  update: function(id, data) {
    let options = {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    }
    return fetch(`${this.baseUrl}/${id}`, options).then(res => res.json())
  },

  delete: function(id) {
    let options = {
      method: 'delete',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    return fetch(`${this.baseUrl}/${id}`, options).then(res => res.json())
  }
}
