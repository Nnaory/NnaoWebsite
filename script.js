// INTERAKRIVITAS NAVIGASI
const links = document.querySelectorAll('a');

// mengganti warna latar belakang dan teks link yang diklik
function changeColor(event) {
    // background menjadi putih dan teks menjadi hitam
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
}

links.forEach(link => {
    link.addEventListener('click', changeColor);
});