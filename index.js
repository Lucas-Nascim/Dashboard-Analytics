const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// Change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    //themeToggler.querySelector('span').classList.toggle('active');
})

// Find orders in table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.supervisortName}</td>
                        <td>${order.callNumber}</td>
                        <td>${order.tmaStatus}</td>
                        <td class="${order.ns <= '70%' ? 'danger' : order.ns >= '80%' ? 'success' : 'warning'}">${order.ns}</td>
                        <td class="primary">Details</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

