let id_input = document.getElementById("p_id")
let name_input = document.getElementById("p_name")
let category_input = document.getElementById("category")
let price_input = document.getElementById("price")

let productsBody = document.getElementById("productData")

let url = "http://localhost:3000/products"

async function getProducts() {
    try {
        let res = await axios.get(url)
        console.log(res)
        let products = res.data
        renderTable(products)
    } catch (error) {

    }
}
getProducts()

async function saveProduct(e) {
    try {
        e.preventDefault();
        let product = {
            name: name_input.value,
            category: category_input.value,
            price: price_input.value,
        }
        let res = ""
        if(id_input.value){
            res = await axios.put(`${url}/${id_input.value}`, product)
        } else {
            res = await axios.post(url, product)
        }
        console.log(res)
        if(res.status == 201){
            alert("Product Added")
        }
        if(res.status == 200){
            alert("Product Updated")
        }
        clearForm()
        getProducts()
    } catch (error) {
        console.log(error)
        alert("Error "+error)
    }
}

async function deleteProduct(pid){
    try {
        let res = await axios.delete(`${url}/${pid}`)
        console.log(res)
        getProducts()
    } catch (error) {
        console.log(error)
    }
}

async function preFetchData(pid){
    try {
        let res = await axios.get(`${url}/${pid}`)
        console.log(res)
        let product = res.data
        id_input.value = product.id
        name_input.value = product.name
        category_input.value = product.category
        price_input.value = product.price
    } catch (error) {
        console.log(error)
    }
}


function renderTable(products) {
    let htmlStr = ``
    products.forEach((p) => {
        htmlStr += `
                        <tr>
                            <td>${p.id}</td>
                            <td>${p.name}</td>
                            <td>${p.category}</td>
                            <td>${p.price}</td>
                            <td>
                                <button class="btn btn-sm btn-outline-warning" onclick="preFetchData('${p.id}')">✏️ Edit</button>
                                <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct('${p.id}')">❌ Delete</button>
                            </td>
                        </tr>
                    `
    })

    productsBody.innerHTML = htmlStr
}

function clearForm(){
    id_input.value = ""
    name_input.value = ""
    category_input.value = ""
    price_input.value = ""
}