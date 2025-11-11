// 当前用户角色
let currentUserRole = 'user'; // 'user' 或 'admin'

// 今日菜单（默认显示的菜品）
let dishes = [
    {
        id: 1,
        name: "宫保鸡丁",
        price: 15.00,
        image: "https://picsum.photos/seed/dish1/300/200"
    },
    {
        id: 2,
        name: "鱼香肉丝",
        price: 14.00,
        image: "https://picsum.photos/seed/dish2/300/200"
    },
    {
        id: 3,
        name: "红烧肉",
        price: 20.00,
        image: "https://picsum.photos/seed/dish3/300/200"
    },
    {
        id: 4,
        name: "麻婆豆腐",
        price: 12.00,
        image: "https://picsum.photos/seed/dish4/300/200"
    }
];

// 菜品库（所有可选的菜品）
const allDishes = [
    {
        id: 1,
        name: "宫保鸡丁",
        price: 15.00,
        image: "https://picsum.photos/seed/dish1/300/200"
    },
    {
        id: 2,
        name: "鱼香肉丝",
        price: 14.00,
        image: "https://picsum.photos/seed/dish2/300/200"
    },
    {
        id: 3,
        name: "红烧肉",
        price: 20.00,
        image: "https://picsum.photos/seed/dish3/300/200"
    },
    {
        id: 4,
        name: "麻婆豆腐",
        price: 12.00,
        image: "https://picsum.photos/seed/dish4/300/200"
    },
    {
        id: 5,
        name: "番茄炒蛋",
        price: 10.00,
        image: "https://picsum.photos/seed/dish5/300/200"
    },
    {
        id: 6,
        name: "青椒土豆丝",
        price: 8.00,
        image: "https://picsum.photos/seed/dish6/300/200"
    },
    {
        id: 7,
        name: "糖醋排骨",
        price: 22.00,
        image: "https://picsum.photos/seed/dish7/300/200"
    },
    {
        id: 8,
        name: "可乐鸡翅",
        price: 18.00,
        image: "https://picsum.photos/seed/dish8/300/200"
    },
    {
        id: 9,
        name: "清炒时蔬",
        price: 8.00,
        image: "https://picsum.photos/seed/dish9/300/200"
    },
    {
        id: 10,
        name: "西湖牛肉羹",
        price: 12.00,
        image: "https://picsum.photos/seed/dish10/300/200"
    },
    {
        id: 11,
        name: "水煮肉片",
        price: 16.00,
        image: "https://picsum.photos/seed/dish11/300/200"
    },
    {
        id: 12,
        name: "干煸四季豆",
        price: 10.00,
        image: "https://picsum.photos/seed/dish12/300/200"
    },
    {
        id: 13,
        name: "回锅肉",
        price: 16.00,
        image: "https://picsum.photos/seed/dish13/300/200"
    },
    {
        id: 14,
        name: "蒜蓉油麦菜",
        price: 9.00,
        image: "https://picsum.photos/seed/dish14/300/200"
    },
    {
        id: 15,
        name: "清蒸鱼",
        price: 25.00,
        image: "https://picsum.photos/seed/dish15/300/200"
    },
    {
        id: 16,
        name: "地三鲜",
        price: 11.00,
        image: "https://picsum.photos/seed/dish16/300/200"
    },
    {
        id: 17,
        name: "酸辣土豆丝",
        price: 8.00,
        image: "https://picsum.photos/seed/dish17/300/200"
    },
    {
        id: 18,
        name: "糖醋里脊",
        price: 19.00,
        image: "https://picsum.photos/seed/dish18/300/200"
    },
    {
        id: 19,
        name: "韭菜炒蛋",
        price: 10.00,
        image: "https://picsum.photos/seed/dish19/300/200"
    },
    {
        id: 20,
        name: "炸鸡排",
        price: 15.00,
        image: "https://picsum.photos/seed/dish20/300/200"
    }
];

// 订单数据
let orderItems = [];

// DOM元素
const loginContainer = document.getElementById('login-container');
const appContainer = document.getElementById('app-container');
const userRoleDisplay = document.getElementById('user-role-display');
const logoutBtn = document.getElementById('logout-btn');
const roleSelector = document.querySelectorAll('input[name="user-role"]');
const adminPasswordContainer = document.querySelector('.admin-password');
const adminPasswordInput = document.getElementById('admin-password');
const loginBtn = document.getElementById('login-btn');

const menuItemsContainer = document.getElementById('menu-items');
const orderItemsContainer = document.getElementById('order-items');
const totalPriceElement = document.getElementById('total-price');
const clearOrderButton = document.getElementById('clear-order');
const dishLibraryContainer = document.getElementById('dish-library-items');
const toggleLibraryButton = document.getElementById('toggle-library');
const librarySection = document.getElementById('dish-library-section');
const adminSection = document.querySelector('.admin-section');

// 初始化页面
function init() {
    setupLoginEventListeners();
}

// 根据用户角色显示或隐藏管理功能
function updateUIByRole() {
    if (currentUserRole === 'admin') {
        adminSection.style.display = 'block';
        userRoleDisplay.textContent = '管理员';
        userRoleDisplay.style.color = '#e74c3c'; // 管理员用红色标识
    } else {
        adminSection.style.display = 'none';
        librarySection.style.display = 'none'; // 确保普通用户看不到菜品库
        userRoleDisplay.textContent = '普通用户';
        userRoleDisplay.style.color = '#27ae60'; // 普通用户用绿色标识
    }
}

// 用户登录
function login() {
    const selectedRole = document.querySelector('input[name="user-role"]:checked').value;
    
    if (selectedRole === 'admin') {
        const password = adminPasswordInput.value;
        // 简单的密码验证（实际项目中应该更安全）
        if (password !== 'admin123') {
            alert('管理员密码错误！');
            return;
        }
        currentUserRole = 'admin';
    } else {
        currentUserRole = 'user';
    }
    
    // 隐藏登录界面，显示应用内容
    loginContainer.style.display = 'none';
    appContainer.style.display = 'block';
    
    // 更新UI和初始化应用
    updateUIByRole();
    renderMenu();
    updateOrderDisplay();
    renderDishLibrary();
    setupAppEventListeners();
}

// 用户退出登录
function logout() {
    // 隐藏应用内容，显示登录界面
    appContainer.style.display = 'none';
    loginContainer.style.display = 'flex';
    
    // 重置表单
    document.querySelector('input[name="user-role"][value="user"]').checked = true;
    adminPasswordContainer.style.display = 'none';
    adminPasswordInput.value = '';
    
    // 清空订单
    orderItems = [];
}

// 设置登录相关的事件监听器
function setupLoginEventListeners() {
    // 监听角色选择变化
    roleSelector.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'admin') {
                adminPasswordContainer.style.display = 'block';
            } else {
                adminPasswordContainer.style.display = 'none';
            }
        });
    });
    
    // 登录按钮点击事件
    loginBtn.addEventListener('click', login);
}

// 渲染菜单
function renderMenu() {
    menuItemsContainer.innerHTML = '';
    
    dishes.forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.innerHTML = `
            <img src="${dish.image || 'https://picsum.photos/seed/default/300/200'}" alt="${dish.name}" class="dish-img">
            <div class="dish-info">
                <span class="dish-name">${dish.name}</span>
                <span class="dish-price">¥${dish.price.toFixed(2)}</span>
            </div>
            <button class="add-to-order" data-id="${dish.id}">加入订单</button>
        `;
        
        menuItemsContainer.appendChild(dishCard);
    });
}

// 添加菜品到订单
function addToOrder(dishId) {
    const dish = dishes.find(d => d.id === dishId);
    if (!dish) return;
    
    const existingItem = orderItems.find(item => item.id === dishId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        orderItems.push({
            ...dish,
            quantity: 1
        });
    }
    
    updateOrderDisplay();
}

// 更新订单显示
function updateOrderDisplay() {
    orderItemsContainer.innerHTML = '';
    
    if (orderItems.length === 0) {
        const emptyOrder = document.createElement('p');
        emptyOrder.className = 'empty-order';
        emptyOrder.textContent = '暂无订单，请添加菜品';
        orderItemsContainer.appendChild(emptyOrder);
        totalPriceElement.textContent = '¥0.00';
        return;
    }
    
    orderItems.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div>
                <span>${item.name}</span>
                <span> x ${item.quantity}</span>
            </div>
            <span>¥${(item.price * item.quantity).toFixed(2)}</span>
        `;
        
        orderItemsContainer.appendChild(orderItem);
    });
    
    // 计算总价
    const totalPrice = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceElement.textContent = `¥${totalPrice.toFixed(2)}`;
}

// 清空订单
function clearOrder() {
    orderItems = [];
    updateOrderDisplay();
}

// 渲染菜品库
function renderDishLibrary() {
    if (!dishLibraryContainer) return;
    
    dishLibraryContainer.innerHTML = '';
    
    allDishes.forEach(dish => {
        const isInMenu = dishes.some(d => d.id === dish.id);
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.innerHTML = `
            <img src="${dish.image || 'https://picsum.photos/seed/default/300/200'}" alt="${dish.name}" class="dish-img">
            <div class="dish-info">
                <span class="dish-name">${dish.name}</span>
                <span class="dish-price">¥${dish.price.toFixed(2)}</span>
            </div>
            <button class="${isInMenu ? 'remove-from-menu' : 'add-to-menu'}" data-id="${dish.id}">
                ${isInMenu ? '从菜单移除' : '添加到菜单'}
            </button>
        `;
        
        dishLibraryContainer.appendChild(dishCard);
    });
}

// 添加菜品到今日菜单
function addToMenu(dishId) {
    // 检查菜品是否已在菜单中
    if (dishes.some(d => d.id === dishId)) {
        return;
    }
    
    const dish = allDishes.find(d => d.id === dishId);
    if (!dish) return;
    
    dishes.push({...dish});
    renderMenu();
    renderDishLibrary();
}

// 从今日菜单移除菜品
function removeFromMenu(dishId) {
    dishes = dishes.filter(dish => dish.id !== dishId);
    renderMenu();
    renderDishLibrary();
}

// 切换菜品库显示
function toggleLibrary() {
    if (!librarySection || currentUserRole !== 'admin') return;
    
    if (librarySection.style.display === 'none' || librarySection.style.display === '') {
        librarySection.style.display = 'block';
        toggleLibraryButton.textContent = '隐藏菜品库';
    } else {
        librarySection.style.display = 'none';
        toggleLibraryButton.textContent = '显示菜品库';
    }
}

// 添加菜品到订单的事件处理函数
function handleAddToOrder(e) {
    if (e.target.classList.contains('add-to-order')) {
        const dishId = parseInt(e.target.dataset.id);
        addToOrder(dishId);
    }
}

// 菜品库事件处理函数
function handleDishLibrary(e) {
    if (e.target.classList.contains('add-to-menu')) {
        const dishId = parseInt(e.target.dataset.id);
        addToMenu(dishId);
    } else if (e.target.classList.contains('remove-from-menu')) {
        const dishId = parseInt(e.target.dataset.id);
        removeFromMenu(dishId);
    }
}

// 设置应用相关的事件监听器
function setupAppEventListeners() {
    // 移除可能存在的事件监听器，避免重复绑定
    menuItemsContainer.removeEventListener('click', handleAddToOrder);
    clearOrderButton.removeEventListener('click', clearOrder);
    logoutBtn.removeEventListener('click', logout);
    
    if (dishLibraryContainer) {
        dishLibraryContainer.removeEventListener('click', handleDishLibrary);
    }
    
    if (toggleLibraryButton) {
        toggleLibraryButton.removeEventListener('click', toggleLibrary);
    }
    
    // 添加菜品到订单的点击事件（使用事件委托）
    menuItemsContainer.addEventListener('click', handleAddToOrder);
    
    // 清空订单按钮点击事件
    clearOrderButton.addEventListener('click', clearOrder);
    
    // 退出登录按钮点击事件
    logoutBtn.addEventListener('click', logout);
    
    // 只有管理员才能操作菜品库
    if (currentUserRole === 'admin') {
        // 菜品库相关事件
        if (dishLibraryContainer) {
            dishLibraryContainer.addEventListener('click', handleDishLibrary);
        }
        
        // 切换菜品库显示
        if (toggleLibraryButton) {
            toggleLibraryButton.addEventListener('click', toggleLibrary);
        }
    }
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);