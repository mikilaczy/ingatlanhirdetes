document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const hirdetesekContainer = document.getElementById("hirdetesek").querySelector(".row");
    form.addEventListener("submit", (event) => {
        event.preventDefault();   
        const cim = document.getElementById("hirdetes-cim").value;
        const kategoria = document.getElementById("hirdetes-kategoria").value;
        const leiras = document.getElementById("hirdetes-leiras").value;
        const ar = document.getElementById("hirdetes-ar").value;

        const col = document.createElement("div");
        col.className = "col-md-3 mb-4";

        const card = `
            <div class="card">
                <img src="kepek/default.jpg" class="card-img-top" alt="${cim}">
                <div class="card-body">
                    <h5 class="card-title">${cim}</h5>
                    <p class="card-text">${leiras}</p>
                    <p class="card-text"><strong>Ár:</strong> ${ar} Ft</p>
                    <button class="btn btn-primary" onclick="sendEmail('${cim}')">Érdeklődöm!</button>
                </div>
            </div>
        `;
        col.innerHTML = card;
        hirdetesekContainer.appendChild(col);
        form.reset();
    });
});
function sendEmail(hirdetesCim) {
    const email = ""; 
    const subject = `Érdeklődés: ${hirdetesCim}`;
    const body = `Tisztelt Hirdető,\n\nSzeretnék érdeklődni a következő hirdetéssel kapcsolatban: "${hirdetesCim}".\n\nÜdvözlettel,\n[Az érdeklődő neve]`;

window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
