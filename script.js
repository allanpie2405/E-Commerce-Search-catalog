const searchCategory = document.querySelector("#searchinput")
const renderArea = document.querySelector(".card-area")
const products = [{
    'imgPath': "./Imgs/camisa.jpg",
    'title': "Camisa social de algodão dryfit tam 48",
    'price': "79.90",
    'category': "roupas"
}, {
    'imgPath': "./Imgs/tenis.jpg",
    'title': "Tênis esportivo",
    'price': "149.90",
    'category': "calçados"
}, {
    'imgPath': "./Imgs/bolsa.jpg",
    'title': "Bolsa feminina",
    'price': "99.90",
    'category': "acessorios"
}, {
    'imgPath': "./Imgs/relogio.jpg",
    'title': "Relógio premium",
    'price': "249.90",
    'category': "acessorios"
}, {
    'imgPath': "./Imgs/camisa.jpg",
    'title': "Jaqueta casual",
    'price': "169.90",
    'category': "roupas"
}, {
    'imgPath': "./Imgs/tenis.jpg",
    'title': "Tênis urbano",
    'price': "179.90",
    'category': "calçados"
}, {
    'imgPath': "./Imgs/bolsa.jpg",
    'title': "Mochila executive",
    'price': "139.90",
    'category': "acessorios"
}, {
    'imgPath': "./Imgs/relogio.jpg",
    'title': "Relógio esportivo",
    'price': "219.90",
    'category': "acessorios"
}]
function renderProducts() {
    const search = searchCategory.value.trim().toLowerCase()
    renderArea.innerHTML = ""
    if (search === "") {
        products.forEach(product => {
            renderArea.innerHTML += `
<div class="card Dflex flexJustifyCenter">
                    <div class="card-info-conteiner">
                        <img class="card-img" src="${product.imgPath}" alt="">
                        <h2>${product.title}</h2>
                        <p>$ ${product.price}</p>
                    </div>
                </div>
                `
        });
    } else {
        const found = products.filter((product) => { return product.category.trim().toLowerCase().includes(search) })
        if (found.length === 0) {
            renderArea.innerHTML = `
            <div id="NotFound">
                <p>Não foi possivel achar um resultado</p>
            </div>
            `
        } else {
            found.forEach(product => {
                renderArea.innerHTML += `
<div class="card Dflex flexJustifyCenter">
                    <div class="card-info-conteiner">
                        <img class="card-img" src="${product.imgPath}" alt="">
                        <h2>${product.title}</h2>
                        <p>$ ${product.price}</p>
                    </div>
                </div>
                `
            });
        }
    }
}

searchCategory.addEventListener("input", renderProducts)
renderProducts()