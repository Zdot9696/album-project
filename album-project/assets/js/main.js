document.addEventListener("DOMContentLoaded", function () {
    const albumContainer = document.getElementById("album-container");

    // Lista de imágenes simuladas
    const images = [
        "assets/images/photo1.jpg",
        "assets/images/photo2.jpg",
        "assets/images/photo1.jpg",
        "assets/images/photo2.jpg",
        "assets/images/photo1.jpg",
        "assets/images/photo2.jpg",
        "assets/images/photo1.jpg",
        "assets/images/photo2.jpg",
        "assets/images/photo1.jpg"
    ];

    // Generar dinámicamente las tarjetas con estructura responsive
    images.forEach(image => {
        const card = document.createElement("div");
        card.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4"); 
        // col-12: Una columna en pantallas extra pequeñas
        // col-sm-6: Dos columnas en pantallas pequeñas
        // col-md-4: Tres columnas en pantallas medianas
        // col-lg-3: Cuatro columnas en pantallas grandes

        card.innerHTML = `
            <div class="card shadow-sm">
                <img src="${image}" class="card-img-top" alt="Imagen del álbum">
                <div class="card-body">
                    <h5 class="card-title">Thumbnail</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-sm btn-outline-primary">View</button>
                        <button class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                </div>
            </div>
        `;

        albumContainer.appendChild(card);
    });
});
