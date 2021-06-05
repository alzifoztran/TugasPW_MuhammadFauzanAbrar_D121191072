const tombolCari = document.querySelector(".tombol-cari")
const keyword = document.querySelector(".keyword")
const container = document.querySelector(".container")

tombolCari.style.display = 'none'

// keyword event handler
keyword.addEventListener('keyup', function() {
    fetch('live_search.php?keyword=' + keyword.value)
        .then(response => response.text())
        .then(response => container.innerHTML = response)
})

function previewImage() {
    const gambar = document.querySelector('.gambar')
    const imgPreview = document.querySelector('.img-preview')

    const oFRead = new FileReader()

    oFRead.readAsDataURL(gambar.files['0'])

    oFRead.onload = function(oFRead) {
        imgPreview.src = oFRead.target.result
    }
}