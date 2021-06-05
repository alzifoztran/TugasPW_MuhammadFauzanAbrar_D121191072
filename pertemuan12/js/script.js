const tombolCari = document.querySelector(".tombol-cari")
const keyword = document.querySelector(".keyword")
const container = document.querySelector(".container")

// keyword event handler
keyword.addEventListener('keyup', function() {
    fetch('live_search.php?keyword=' + keyword.value)
        .then(response => response.text())
        .then(response => container.innerHTML = response)
})