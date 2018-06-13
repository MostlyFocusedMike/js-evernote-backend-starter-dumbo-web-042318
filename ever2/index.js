document.addEventListener('DOMContentLoaded', function(){
// NOT GONNA GO ABOVE ME

(function() {
  Adapter.getAll().then(res => res.forEach(renderPreview))
}())

function renderPreview(note) {
  const noteContent = `
    <div data-id='${note.id}'>
    <p id="note-${note.id}" class="note-preview">${note.title}</p>
    <button class="delete"> x </button>
    </div>
  `
  notesPreview.innerHTML = noteContent + notesPreview.innerHTML ;
}


const noteViewer = document.querySelector('#note-viewer'),
  notesPreview = document.querySelector('#notes-preview'),
  noteBody = document.querySelector("#note-body"),
  noteTitle = document.querySelector("#note-title"),
  editTitle = document.querySelector("#edit-note-title"),
  editBody = document.querySelector("#edit-note-body"),
  form = document.getElementById("my-form");







form.addEventListener('submit', function(e) {
  e.preventDefault()
  data = {
    title: noteTitle.value,
    body: noteBody.value,
    user_id: 1
  }
  Adapter.create(data).then(renderPreview)
  noteBody.value = noteTitle.value = ""
})


notesPreview.addEventListener('click', (e) => {
  if (e.target.className === 'note-preview'){
    Adapter.getOne(e.target.parentElement.dataset.id).then(note => {
      editTitle.value = note.title
      editBody.value = note.body
    })
  } else if (e.target.className === 'delete') {
    Adapter.delete(e.target.parentElement.dataset.id).then(r => {
      e.target.parentElement.remove()
    })
  }

})




// NO TOUCHY
})
