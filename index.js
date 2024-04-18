<script>
    // Array of menu items
    const menuList = [
        { menu_name: "Item 1", menu_image: "image1.jpg" },
        { menu_name: "Item 2", menu_image: "image2.jpg" },
        { menu_name: "Item 3", menu_image: "image3.jpg" }
    ];

    // Function to generate HTML for menu items
    function generateMenuItems() {
        const menuListContainer = document.getElementById("menu-list");

        // Clear previous content
        menuListContainer.innerHTML = "";

        // Loop through menu items and generate HTML
        menuList.forEach((item, index) => {
            const menuItem = `
                <div class="explore-menu-list-item" onclick="handleMenuClick('${item.menu_name}')">
                    <img src="${item.menu_image}" alt="${item.menu_name}">
                    <p>${item.menu_name}</p>
                </div>
            `;
            menuListContainer.innerHTML += menuItem;
        });
    }

    // Function to handle menu item click
    function handleMenuClick(menuName) {
        console.log("Clicked menu item:", menuName);
        // Add your logic here
    }

    // Call the function to generate menu items
    generateMenuItems();
</script>