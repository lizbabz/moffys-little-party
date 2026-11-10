/**
 * Moffy's Little Party - DIY Kids Party Kits
 * Main JavaScript Application
 * 
 * Rules:
 * - 9 total products for a clean 3x3 desktop grid.
 * - Realistic product photography used throughout.
 * - Minimum order of 6 kits per item enforced.
 * - No emojis used anywhere.
 * - No dots separating words.
 * - Balanced representation for girls and boys.
 */

const PRODUCTS = [
  {
    id: 'bracelet-studio',
    name: 'Custom Clay Bead and Bracelet Studio',
    category: ['girls-favorites', 'craft-fashion'],
    tag: 'Keepsake Jewelry',
    image: 'images/bracelet-studio.jpg',
    price: 19,
    minQty: 6,
    recommendedAge: 'Ages 6 to 12',
    duration: '60 mins',
    messLevel: 'Zero Mess',
    description: 'Over 250 vibrant polymer heishi clay beads, gold accent discs, alphabet letter beads, and stretch cords. Each guest creates 2 to 3 personalized name bracelets to wear and keep.',
    boxIncludes: [
      'Over 250 vibrant polymer clay heishi beads in partitioned box',
      'Full alphabet gold letter beads for personalized names',
      'Pre-cut durable crystal stretch jewelry cords',
      'Bead stopper clips to prevent spilling beads during stringing',
      'Velvet drawstring keepsake jewelry pouch',
      'Adult knotting instruction guide'
    ]
  },
  {
    id: 'race-car',
    name: 'Mini Monster Truck and Race Car Kit',
    category: ['boys-favorites', 'paint-molded'],
    tag: 'Rolling Woodcraft',
    image: 'images/race-car.jpg',
    price: 19,
    minQty: 6,
    recommendedAge: 'Ages 5 to 11',
    duration: '50-60 mins',
    messLevel: 'Low (Washable)',
    description: 'Smooth pine craft race cars and monster trucks with working rolling axles. Kids customize their speed machines with metallic paints and racing decals.',
    boxIncludes: [
      '2 solid wood rolling vehicles per child (monster truck and formula racer)',
      '6 pots of high-gloss metallic paints (fire red, chrome silver, deep navy, lightning yellow, jet black, emerald)',
      'High-adhesion peel-and-stick racing number decals and racing stripes',
      'Precision detail paint brush and foam sponsor sponge',
      'Official Pit Crew license card with custom birthday seal',
      'Checkerboard finish line paper table runner'
    ]
  },
  {
    id: 'dino-kit',
    name: 'Jurassic Dino Mold and Paint Kit',
    category: ['boys-favorites', 'paint-molded'],
    tag: 'Cast Stone Paint',
    image: 'images/dino-kit.jpg',
    price: 18,
    minQty: 6,
    recommendedAge: 'Ages 4 to 10',
    duration: '45-60 mins',
    messLevel: 'Low (Washable)',
    description: 'Solid stone-cast dinosaur figures including T-Rex, Stegosaurus, and Triceratops. Each guest paints and takes home their own durable prehistoric sculpture.',
    boxIncludes: [
      '2 solid stone-cast dinosaur figures per child',
      '6 pots of non-toxic, quick-dry acrylic wash',
      'Ergonomic wooden detail paint brush',
      'Stone mixing palette with water cup',
      'Personalized Fossil Hunter discovery certificate',
      'Heavyweight kraft paper table placemat'
    ]
  },
  {
    id: 'sweet-slime',
    name: 'Sweet Treat Cloud Slime Studio',
    category: ['girls-favorites', 'slime-sensory'],
    tag: 'Fluffy Scented Slime',
    image: 'images/cloud-slime.jpg',
    price: 18,
    minQty: 6,
    recommendedAge: 'Ages 4 to 10',
    duration: '45 mins',
    messLevel: 'Contained (Bowl Included)',
    description: 'Ultra-fluffy textured cloud slime that drizzles like pastel cotton candy. Scented with strawberry and vanilla essence, topped with polymer sprinkle charms.',
    boxIncludes: [
      'Pre-made fluffy cloud slime dough base (pastel pink and sky blue)',
      'Mini glass sprinkle shaker vial (rainbow stars and sprinkles)',
      'Miniature waffle cone display cup',
      'Cake spatula mixing tool',
      'Custom Ice Cream Parlor keepsake jar with child name label',
      'Table runner and apron smock'
    ]
  },
  {
    id: 'cosmic-slime',
    name: 'Galaxy Glow Cosmic Slime Lab',
    category: ['boys-favorites', 'slime-sensory'],
    tag: 'Glow-in-the-Dark',
    image: 'images/cosmic-slime.jpg',
    price: 17,
    minQty: 6,
    recommendedAge: 'Ages 5 to 12',
    duration: '45 mins',
    messLevel: 'Contained (Bowl Included)',
    description: 'Deep nebula pigments, glow-in-the-dark activator, asteroid beads, and planet charms. Non-sticky formula that easily washes off hands and clothes.',
    boxIncludes: [
      'Pre-portioned safe slime base and child-safe cosmic activator',
      'Glow-in-the-dark nebula star dust pigment',
      'Cosmic miniature astronaut and rocket charms',
      'Airtight celestial take-home storage jars',
      'Silicon mixing spatula and deep no-spill mixing bowl',
      'Official Astronaut Lab Scientist ID badge'
    ]
  },
  {
    id: 'tote-patch',
    name: 'Mini Canvas Crossbody Tote and Patch Craft',
    category: ['girls-favorites', 'craft-fashion'],
    tag: 'Wearable Fashion',
    image: 'images/tote-patch.jpg',
    price: 20,
    minQty: 6,
    recommendedAge: 'Ages 5 to 12',
    duration: '45 mins',
    messLevel: 'Zero Mess',
    description: 'Heavyweight organic cotton mini crossbody totes. Kids place heat-free permanent adhesive embroidered patches and fabric ink designs to create a daily wearable bag.',
    boxIncludes: [
      'Heavyweight 100% natural cotton mini tote with strap',
      '4 premium embroidered peel-and-press permanent patches',
      '3 dual-tip vibrant non-toxic textile markers',
      'Letter stencils for child initials and names',
      'Gift tag label customized with child party details',
      'Cardboard internal insert to prevent marker bleed'
    ]
  },
  {
    id: 'easel-paint',
    name: 'Little Picasso Canvas Painting Studio',
    category: ['girls-favorites', 'boys-favorites', 'paint-molded'],
    tag: 'Tabletop Mini Easel',
    image: 'images/easel-paint.jpg',
    price: 18,
    minQty: 6,
    recommendedAge: 'Ages 4 to 12',
    duration: '50 mins',
    messLevel: 'Low (Washable)',
    description: 'Mini tabletop wooden easels holding real stretched cotton canvases with pre-sketched friendly line designs. Kids blend vibrant colors with zero frustration.',
    boxIncludes: [
      'Stretched canvas with pre-sketched whimsical design',
      'Natural pine folding tabletop display easel',
      '6 high-pigment washable acrylic paint pots',
      'Dual tip wooden paint brushes (broad and detail)',
      'Artist color blending guide sheet',
      'Kraft paper table protector'
    ]
  },
  {
    id: 'woodland-ceramic',
    name: 'Ceramic Woodland Animal Paint Kit',
    category: ['girls-favorites', 'paint-molded'],
    tag: 'Ceramic Bisque Art',
    image: 'images/woodland-ceramic.jpg',
    price: 20,
    minQty: 6,
    recommendedAge: 'Ages 4 to 11',
    duration: '45-60 mins',
    messLevel: 'Low (Washable)',
    description: 'Smooth ceramic bisque animals including foxes, friendly owls, bears, and bunnies. Real kiln-ready ceramic texture that absorbs paints for rich, opaque display pieces.',
    boxIncludes: [
      'Heavy ceramic bisque animal figurine (stands independently)',
      '6 opaque matte ceramic-safe paints',
      'Fine tip synthetic hair detailing brush',
      'Pearl glaze topcoat to seal the finished craft',
      'Custom keepsake tag with artist name and party date',
      'Protective foam travel gift box for taking home'
    ]
  },
  {
    id: 'science-volcano',
    name: 'Volcano Eruption and Gem Dig Science Lab',
    category: ['boys-favorites', 'girls-favorites', 'slime-sensory'],
    tag: 'Science & Excavation',
    image: 'images/science-volcano.jpg',
    price: 19,
    minQty: 6,
    recommendedAge: 'Ages 5 to 12',
    duration: '50-60 mins',
    messLevel: 'Contained (Tray Included)',
    description: 'Excavate real amethyst and pyrite minerals from plaster dig blocks, then create fizzing colorful volcanic eruptions with test tubes, pipettes, and safety goggles.',
    boxIncludes: [
      'Solid excavation dig block embedded with 2 genuine polished crystals',
      'Child-safe wooden excavation chisel and dusting brush',
      'Mini desktop volcano mountain vessel with fizz powders',
      'Plastic lab safety goggles and scientist magnifying glass',
      'Mineral identification field guide with custom birthday seal',
      'Deep spill-proof laboratory paper table runner'
    ]
  }
];

class MoffysApp {
  constructor() {
    this.cart = this.loadCart();
    this.currentCategory = 'all';
    this.initDom();
    this.renderProducts();
    this.initHero();
    this.initParentSavingsCalc();
    this.initFounderDeck();
    this.initCartDrawer();
    this.initCheckout();
    this.initQuickView();
    this.initMobileMenu();
    this.updateCartCount();
  }

  loadCart() {
    try {
      const stored = localStorage.getItem('moffys_party_box');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('moffys_party_box', JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
    this.updateCartCount();
    this.renderCartItems();
  }

  initDom() {
    this.productsGrid = document.getElementById('products-grid');
    this.cartDrawer = document.getElementById('cart-drawer');
    this.cartBackdrop = document.getElementById('cart-drawer-backdrop');
    this.cartCounter = document.getElementById('cart-counter');
    this.cartItemsContainer = document.getElementById('cart-items-container');
    this.cartSubtotal = document.getElementById('cart-subtotal');
    this.cartGrandTotal = document.getElementById('cart-grand-total');
    this.shippingProgressFill = document.getElementById('shipping-progress-fill');
    this.shippingProgressText = document.getElementById('shipping-progress-text');
    this.shippingLine = document.getElementById('cart-shipping-line');
  }

  showToast(message) {
    const toast = document.getElementById('toast-notification');
    const toastText = document.getElementById('toast-text') || document.getElementById('toast-message');
    if (toast && toastText) {
      toastText.textContent = message;
      toast.classList.add('active');
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        toast.classList.remove('active');
      }, 3500);
    }
  }

  // ----------------------------------------------------------------
  // Product Catalog & Rendering (9 Products with Realistic Photos)
  // ----------------------------------------------------------------
  renderProducts() {
    if (!this.productsGrid) return;
    this.productsGrid.innerHTML = '';

    const filtered = this.currentCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category.includes(this.currentCategory));

    filtered.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';
      const isBoy = product.category.includes('boys-favorites') && !product.category.includes('girls-favorites');

      card.innerHTML = `
        <div class="card-media">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
          <span class="card-tag ${isBoy ? 'boys' : ''}">${product.tag}</span>
          <span class="card-min-pill">Min. 6 kits</span>
        </div>
        <div class="card-content">
          <div class="card-header-row">
            <h3 class="card-title">${product.name}</h3>
            <div class="card-price-wrap">
              <span class="card-unit-price">$${product.price}</span>
              <span class="card-min-order-note">per child</span>
            </div>
          </div>
          <p class="card-description">${product.description}</p>
          <div class="card-specs">
            <span>${product.recommendedAge}</span>
            <span class="spec-sep">/</span>
            <span>${product.duration}</span>
            <span class="spec-sep">/</span>
            <span>${product.messLevel}</span>
          </div>

          <div class="card-order-bar">
            <span class="card-qty-label">Party Count:</span>
            <div class="qty-stepper">
              <button type="button" class="btn-step" data-action="minus" data-id="${product.id}" aria-label="Decrease">&minus;</button>
              <input type="number" id="qty-input-${product.id}" value="8" min="6" max="36" readonly>
              <button type="button" class="btn-step" data-action="plus" data-id="${product.id}" aria-label="Increase">+</button>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn btn-secondary btn-sm" onclick="app.openQuickView('${product.id}')">
              What's in Box
            </button>
            <button class="btn btn-primary btn-sm" onclick="app.addCardToBox('${product.id}')">
              Add to Box
            </button>
          </div>
        </div>
      `;

      this.productsGrid.appendChild(card);
    });

    this.productsGrid.querySelectorAll('.btn-step').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.dataset.id;
        const action = e.currentTarget.dataset.action;
        const input = document.getElementById(`qty-input-${prodId}`);
        if (!input) return;
        let val = parseInt(input.value, 10) || 6;
        if (action === 'plus') {
          val += 1;
        } else if (action === 'minus') {
          if (val > 6) {
            val -= 1;
          } else {
            this.showToast('Minimum party order is 6 kits per theme');
          }
        }
        input.value = val;
      });
    });

    this.initCategoryFilters();
  }

  initCategoryFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      tab.onclick = () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentCategory = tab.dataset.category;
        this.renderProducts();
      };
    });
  }

  addCardToBox(productId) {
    const input = document.getElementById(`qty-input-${productId}`);
    const qty = input ? parseInt(input.value, 10) : 6;
    this.addToCart(productId, qty);
  }

  quickOrder(productId, qty) {
    this.addToCart(productId, qty);
  }

  // ----------------------------------------------------------------
  // Hero Interactive Elements (Clean, no overlap)
  // ----------------------------------------------------------------
  initHero() {
    const qtyInput = document.getElementById('hero-kit-qty');
    const minusBtn = document.getElementById('hero-qty-minus');
    const plusBtn = document.getElementById('hero-qty-plus');
    const totalDisp = document.getElementById('hero-calc-total');
    const addHeroBtn = document.getElementById('btn-hero-add-to-cart');

    const unitPrice = 18; // Dino Kit

    const updateHeroCalc = () => {
      let qty = parseInt(qtyInput.value, 10) || 6;
      if (qty < 6) qty = 6;
      const total = qty * unitPrice;
      totalDisp.textContent = `$${total.toFixed(2)}`;
      addHeroBtn.textContent = `Add ${qty} Kits to Party Box ($${total.toFixed(0)})`;
    };

    if (minusBtn && plusBtn && qtyInput) {
      minusBtn.onclick = () => {
        let val = parseInt(qtyInput.value, 10) || 6;
        if (val > 6) {
          qtyInput.value = val - 1;
          updateHeroCalc();
        } else {
          this.showToast('Minimum party order is 6 kits per theme');
        }
      };

      plusBtn.onclick = () => {
        let val = parseInt(qtyInput.value, 10) || 6;
        qtyInput.value = val + 1;
        updateHeroCalc();
      };

      if (addHeroBtn) {
        addHeroBtn.onclick = () => {
          const qty = parseInt(qtyInput.value, 10) || 6;
          this.addToCart('dino-kit', qty);
        };
      }

      updateHeroCalc();
    }
  }

  // ----------------------------------------------------------------
  // Parent Savings Calculator (Customer-Facing & Spacious)
  // ----------------------------------------------------------------
  initParentSavingsCalc() {
    const guestSlider = document.getElementById('calc-guest-count');
    const guestDisp = document.getElementById('guest-count-val');
    const tradCost = document.getElementById('calc-traditional-cost');
    const moffyCost = document.getElementById('calc-moffy-cost');
    const moffySub = document.getElementById('calc-moffy-sub');
    const savingsVal = document.getElementById('calc-savings-val');
    const applyBtn = document.getElementById('btn-calc-apply');

    let selectedThemePrice = 18;
    let selectedThemeName = 'Jurassic Dino Mold and Paint';

    const chips = document.querySelectorAll('.theme-chip');
    chips.forEach(chip => {
      chip.onclick = () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedThemePrice = parseInt(chip.dataset.price, 10) || 18;
        selectedThemeName = chip.dataset.theme;
        updateCalc();
      };
    });

    const updateCalc = () => {
      if (!guestSlider) return;
      const count = parseInt(guestSlider.value, 10);
      guestDisp.textContent = `${count} Kids`;

      const traditional = 350 + (count * 10);
      const moffyTotal = count * selectedThemePrice;
      const saved = traditional - moffyTotal;

      if (tradCost) tradCost.textContent = `$${traditional}`;
      if (moffyCost) moffyCost.textContent = `$${moffyTotal}`;
      if (moffySub) moffySub.textContent = `${count} children fully supplied`;
      if (savingsVal) savingsVal.textContent = `$${saved} Saved`;

      if (applyBtn) {
        applyBtn.textContent = `Order ${count}-Child Box ($${moffyTotal})`;
        applyBtn.onclick = () => {
          let kitId = 'dino-kit';
          if (selectedThemeName.includes('Monster')) kitId = 'race-car';
          if (selectedThemeName.includes('Bead')) kitId = 'bracelet-studio';
          if (selectedThemeName.includes('Slime')) kitId = 'cosmic-slime';
          if (selectedThemeName.includes('Tote')) kitId = 'tote-patch';
          this.addToCart(kitId, count);
        };
      }
    };

    if (guestSlider) {
      guestSlider.addEventListener('input', updateCalc);
      updateCalc();
    }
  }

  // ----------------------------------------------------------------
  // Founder's Private Business Deck Modal
  // ----------------------------------------------------------------
  initFounderDeck() {
    const triggerBtn = document.getElementById('btn-founder-trigger');
    const modal = document.getElementById('founder-modal');
    const backdrop = document.getElementById('founder-modal-backdrop');
    const closeBtn = document.getElementById('btn-close-founder');

    const openFounderModal = () => {
      if (modal && backdrop) {
        modal.classList.add('active');
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    const closeFounderModal = () => {
      if (modal && backdrop) {
        modal.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    const drawerFounderBtn = document.getElementById('btn-drawer-founder');
    const footerFounderBtn = document.getElementById('btn-footer-founder');
    const mobileDrawer = document.getElementById('mobile-menu-drawer');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');

    if (triggerBtn) triggerBtn.onclick = openFounderModal;
    if (footerFounderBtn) footerFounderBtn.onclick = openFounderModal;
    if (drawerFounderBtn) {
      drawerFounderBtn.onclick = () => {
        if (mobileDrawer) mobileDrawer.classList.remove('active');
        if (mobileOverlay) mobileOverlay.classList.remove('active');
        openFounderModal();
      };
    }
    if (closeBtn) closeBtn.onclick = closeFounderModal;
    if (backdrop) backdrop.onclick = closeFounderModal;

    const bizPartiesSlider = document.getElementById('biz-parties-per-month');
    const bizPartiesDisp = document.getElementById('biz-parties-val');
    const bizSizeSlider = document.getElementById('biz-avg-party-size');
    const bizSizeDisp = document.getElementById('biz-size-val');

    const bizAovVal = document.getElementById('biz-aov-val');
    const bizRevenueVal = document.getElementById('biz-revenue-val');
    const bizProfitVal = document.getElementById('biz-profit-val');
    const bizAnnualVal = document.getElementById('biz-annual-val');

    const updateBizCalc = () => {
      if (!bizPartiesSlider || !bizSizeSlider) return;
      const parties = parseInt(bizPartiesSlider.value, 10);
      const avgKids = parseInt(bizSizeSlider.value, 10);

      bizPartiesDisp.textContent = `${parties} Parties`;
      bizSizeDisp.textContent = `${avgKids} Kids`;

      const avgKitPrice = 19;
      const cogsPerKit = 5.80;

      const aov = avgKids * avgKitPrice;
      const monthlyRevenue = parties * aov;
      const monthlyProfit = parties * avgKids * (avgKitPrice - cogsPerKit);
      const fullTimeRevenue = 35 * (avgKids * avgKitPrice);

      if (bizAovVal) bizAovVal.textContent = `$${aov}`;
      if (bizRevenueVal) bizRevenueVal.textContent = `$${monthlyRevenue.toLocaleString()}`;
      if (bizProfitVal) bizProfitVal.textContent = `$${Math.round(monthlyProfit).toLocaleString()} / mo`;
      if (bizAnnualVal) bizAnnualVal.textContent = `$${Math.round(fullTimeRevenue).toLocaleString()} / mo`;
    };

    if (bizPartiesSlider && bizSizeSlider) {
      bizPartiesSlider.addEventListener('input', updateBizCalc);
      bizSizeSlider.addEventListener('input', updateBizCalc);
      updateBizCalc();
    }
  }

  // ----------------------------------------------------------------
  // Cart Drawer & State Management
  // ----------------------------------------------------------------
  initCartDrawer() {
    const trigger = document.getElementById('cart-drawer-trigger');
    const closeBtn = document.getElementById('btn-close-cart');
    const backdrop = this.cartBackdrop;
    const checkoutBtn = document.getElementById('btn-trigger-checkout');

    if (trigger) {
      trigger.onclick = () => this.openCart();
    }
    if (closeBtn) {
      closeBtn.onclick = () => this.closeCart();
    }
    if (backdrop) {
      backdrop.onclick = () => this.closeCart();
    }
    if (checkoutBtn) {
      checkoutBtn.onclick = () => {
        if (this.cart.length === 0) {
          this.showToast('Please add party kits to your box first');
          return;
        }
        this.closeCart();
        this.openCheckoutModal();
      };
    }

    const partyDateInput = document.getElementById('cart-party-date');
    if (partyDateInput && !partyDateInput.value) {
      const partyDate = new Date();
      partyDate.setDate(partyDate.getDate() + 14);
      partyDateInput.value = partyDate.toISOString().split('T')[0];
    }

    this.renderCartItems();
  }

  openCart() {
    if (this.cartDrawer && this.cartBackdrop) {
      this.cartDrawer.classList.add('active');
      this.cartBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeCart() {
    if (this.cartDrawer && this.cartBackdrop) {
      this.cartDrawer.classList.remove('active');
      this.cartBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  addToCart(productId, quantity) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let validQty = parseInt(quantity, 10);
    if (isNaN(validQty) || validQty < 6) {
      validQty = 6;
      this.showToast('Applied minimum order of 6 kits for this theme');
    }

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].qty += validQty;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: validQty,
        tag: product.tag
      });
    }

    this.saveCart();
    this.showToast(`Added ${validQty}x ${product.name} to Party Box`);
    this.openCart();
  }

  updateItemQty(productId, newQty) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    if (newQty < 6) {
      this.showToast('Minimum order is 6 kits per theme');
      return;
    }

    item.qty = newQty;
    this.saveCart();
  }

  removeItem(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.saveCart();
    this.showToast('Removed item from party box');
  }

  updateCartCount() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.qty, 0);
    if (this.cartCounter) {
      this.cartCounter.textContent = totalCount;
    }
  }

  renderCartItems() {
    if (!this.cartItemsContainer) return;

    if (this.cart.length === 0) {
      this.cartItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h4>Your Party Box is Empty</h4>
          <p>Select your favorite craft theme above. Minimum order of 6 kits per theme.</p>
          <a href="#kits-section" class="btn btn-secondary btn-sm" onclick="app.closeCart()">
            Browse Party Kits
          </a>
        </div>
      `;
      if (this.cartSubtotal) this.cartSubtotal.textContent = '$0.00';
      if (this.cartGrandTotal) this.cartGrandTotal.textContent = '$0.00';
      if (this.shippingProgressFill) this.shippingProgressFill.style.width = '0%';
      if (this.shippingProgressText) {
        this.shippingProgressText.textContent = 'Add $140 for complimentary priority shipping';
      }
      return;
    }

    let subtotal = 0;
    this.cartItemsContainer.innerHTML = '';

    this.cart.forEach(item => {
      const lineTotal = item.price * item.qty;
      subtotal += lineTotal;

      const itemCard = document.createElement('div');
      itemCard.className = 'cart-item-card';
      itemCard.innerHTML = `
        <div class="cart-item-thumb">
          <img src="${item.image || 'images/dino-kit.jpg'}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
        </div>
        <div class="cart-item-info">
          <span class="cart-item-title">${item.name}</span>
          <span class="cart-item-price">$${item.price} each (Min. 6)</span>

          <div class="cart-item-controls">
            <div class="item-qty-stepper">
              <button type="button" aria-label="Decrease" onclick="app.updateItemQty('${item.id}', ${item.qty - 1})">&minus;</button>
              <span>${item.qty}</span>
              <button type="button" aria-label="Increase" onclick="app.updateItemQty('${item.id}', ${item.qty + 1})">+</button>
            </div>
            <span class="item-line-total">$${lineTotal.toFixed(2)}</span>
          </div>

          <button type="button" class="btn-remove-item" onclick="app.removeItem('${item.id}')">
            Remove theme
          </button>
        </div>
      `;
      this.cartItemsContainer.appendChild(itemCard);
    });

    const freeShippingThreshold = 140;
    const isFreeShipping = subtotal >= freeShippingThreshold;
    const shippingCost = isFreeShipping ? 0 : 12;
    const grandTotal = subtotal + shippingCost;

    if (this.cartSubtotal) this.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (this.cartGrandTotal) this.cartGrandTotal.textContent = `$${grandTotal.toFixed(2)}`;

    if (this.shippingLine) {
      this.shippingLine.textContent = isFreeShipping ? 'Complimentary Priority' : '$12.00 Flat';
    }

    if (this.shippingProgressFill && this.shippingProgressText) {
      if (isFreeShipping) {
        this.shippingProgressFill.style.width = '100%';
        this.shippingProgressText.textContent = 'Complimentary priority delivery unlocked!';
      } else {
        const remaining = freeShippingThreshold - subtotal;
        const pct = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
        this.shippingProgressFill.style.width = `${pct}%`;
        this.shippingProgressText.textContent = `Add $${remaining.toFixed(2)} more for complimentary shipping`;
      }
    }
  }

  // ----------------------------------------------------------------
  // Quick View Modal
  // ----------------------------------------------------------------
  initQuickView() {
    this.productModal = document.getElementById('product-modal');
    this.productModalBackdrop = document.getElementById('product-modal-backdrop');
    const closeBtn = document.getElementById('btn-close-modal');

    if (closeBtn) {
      closeBtn.onclick = () => this.closeQuickView();
    }
    if (this.productModalBackdrop) {
      this.productModalBackdrop.onclick = () => this.closeQuickView();
    }
  }

  openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !this.productModal) return;

    const body = document.getElementById('modal-product-body');
    if (!body) return;

    const includesHtml = product.boxIncludes
      .map(item => `<li>${item}</li>`)
      .join('');

    body.innerHTML = `
      <div class="modal-layout">
        <div class="modal-media" style="padding: 0; overflow: hidden; height: 320px;">
          <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="modal-details">
          <span class="modal-theme-tag">${product.tag}</span>
          <h2 class="modal-title">${product.name}</h2>
          <div class="modal-price-row">
            <span class="modal-price">$${product.price}</span>
            <span class="modal-price-rule">per child (Minimum 6 kits)</span>
          </div>

          <p class="modal-desc">${product.description}</p>

          <div class="box-breakdown-card">
            <h4>Every Individual Child Box Contains:</h4>
            <ul class="box-breakdown-list">
              ${includesHtml}
            </ul>
          </div>

          <div class="modal-purchase-row">
            <div class="qty-stepper">
              <button type="button" class="btn-step" id="modal-qty-minus">&minus;</button>
              <input type="number" id="modal-qty-input" value="8" min="6" max="36" readonly>
              <button type="button" class="btn-step" id="modal-qty-plus">+</button>
            </div>
            <button class="btn btn-primary" id="btn-modal-add">
              Add 8 Kits to Party Box ($${product.price * 8})
            </button>
          </div>
        </div>
      </div>
    `;

    const qtyInput = document.getElementById('modal-qty-input');
    const minus = document.getElementById('modal-qty-minus');
    const plus = document.getElementById('modal-qty-plus');
    const addBtn = document.getElementById('btn-modal-add');

    const updateModalCalc = () => {
      const q = parseInt(qtyInput.value, 10) || 6;
      addBtn.textContent = `Add ${q} Kits to Party Box ($${q * product.price})`;
    };

    minus.onclick = () => {
      let q = parseInt(qtyInput.value, 10) || 6;
      if (q > 6) {
        qtyInput.value = q - 1;
        updateModalCalc();
      } else {
        this.showToast('Minimum order is 6 kits per theme');
      }
    };

    plus.onclick = () => {
      let q = parseInt(qtyInput.value, 10) || 6;
      qtyInput.value = q + 1;
      updateModalCalc();
    };

    addBtn.onclick = () => {
      const q = parseInt(qtyInput.value, 10) || 6;
      this.addToCart(product.id, q);
      this.closeQuickView();
    };

    this.productModal.classList.add('active');
    this.productModalBackdrop.classList.add('active');
    this.productModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeQuickView() {
    if (this.productModal && this.productModalBackdrop) {
      this.productModal.classList.remove('active');
      this.productModalBackdrop.classList.remove('active');
      this.productModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // ----------------------------------------------------------------
  // Frictionless Checkout Flow
  // ----------------------------------------------------------------
  initCheckout() {
    this.checkoutModal = document.getElementById('checkout-modal');
    this.checkoutBackdrop = document.getElementById('checkout-modal-backdrop');
    const closeBtn = document.getElementById('btn-close-checkout');

    if (closeBtn) {
      closeBtn.onclick = () => this.closeCheckoutModal();
    }
    if (this.checkoutBackdrop) {
      this.checkoutBackdrop.onclick = () => this.closeCheckoutModal();
    }

    const backToCartBtn = document.getElementById('btn-checkout-back-to-cart');
    if (backToCartBtn) {
      backToCartBtn.onclick = () => {
        this.closeCheckoutModal();
        this.openCart();
      };
    }

    const step2Back = document.getElementById('btn-step-2-back');
    if (step2Back) {
      step2Back.onclick = () => this.goToCheckoutStep(1);
    }

    const formStep1 = document.getElementById('checkout-form-step-1');
    if (formStep1) {
      formStep1.onsubmit = (e) => {
        e.preventDefault();
        this.partyData = {
          childName: document.getElementById('co-child-name').value.trim(),
          childAge: document.getElementById('co-child-age').value.trim(),
          partyDate: document.getElementById('co-party-date').value,
          notes: document.getElementById('co-special-notes').value.trim()
        };
        this.goToCheckoutStep(2);
      };
    }

    const formStep2 = document.getElementById('checkout-form-step-2');
    if (formStep2) {
      formStep2.onsubmit = (e) => {
        e.preventDefault();
        this.parentData = {
          firstName: document.getElementById('co-parent-fname').value.trim(),
          lastName: document.getElementById('co-parent-lname').value.trim(),
          email: document.getElementById('co-email').value.trim(),
          phone: document.getElementById('co-phone').value.trim(),
          address: document.getElementById('co-address').value.trim(),
          city: document.getElementById('co-city').value.trim(),
          zip: document.getElementById('co-zip').value.trim()
        };
        this.completeOrder();
      };
    }

    const payRadios = document.querySelectorAll('.pay-radio input[type="radio"]');
    payRadios.forEach(radio => {
      radio.onchange = () => {
        document.querySelectorAll('.pay-radio').forEach(r => r.classList.remove('active'));
        radio.closest('.pay-radio').classList.add('active');
      };
    });

    const confirmDone = document.getElementById('btn-confirm-done');
    if (confirmDone) {
      confirmDone.onclick = () => {
        this.closeCheckoutModal();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  }

  openCheckoutModal() {
    if (!this.checkoutModal || !this.checkoutBackdrop) return;

    const cartName = document.getElementById('cart-child-name');
    const cartAge = document.getElementById('cart-child-age');
    const cartDate = document.getElementById('cart-party-date');

    const coName = document.getElementById('co-child-name');
    const coAge = document.getElementById('co-child-age');
    const coDate = document.getElementById('co-party-date');

    if (cartName && coName && cartName.value) coName.value = cartName.value;
    if (cartAge && coAge && cartAge.value) coAge.value = cartAge.value;
    if (cartDate && coDate && cartDate.value) coDate.value = cartDate.value;

    this.goToCheckoutStep(1);
    this.checkoutModal.classList.add('active');
    this.checkoutBackdrop.classList.add('active');
    this.checkoutModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeCheckoutModal() {
    if (this.checkoutModal && this.checkoutBackdrop) {
      this.checkoutModal.classList.remove('active');
      this.checkoutBackdrop.classList.remove('active');
      this.checkoutModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  goToCheckoutStep(stepNumber) {
    const pane1 = document.getElementById('checkout-form-step-1');
    const pane2 = document.getElementById('checkout-form-step-2');
    const pane3 = document.getElementById('checkout-confirmation-step');

    const ind1 = document.getElementById('step-indicator-1');
    const ind2 = document.getElementById('step-indicator-2');
    const ind3 = document.getElementById('step-indicator-3');

    [pane1, pane2, pane3].forEach(p => p && p.classList.remove('active'));
    [ind1, ind2, ind3].forEach(i => i && i.classList.remove('active'));

    if (stepNumber === 1) {
      if (pane1) pane1.classList.add('active');
      if (ind1) ind1.classList.add('active');
    } else if (stepNumber === 2) {
      if (pane2) pane2.classList.add('active');
      if (ind2) ind2.classList.add('active');
    } else if (stepNumber === 3) {
      if (pane3) pane3.classList.add('active');
      if (ind3) ind3.classList.add('active');
    }
  }

  completeOrder() {
    const orderNumber = 'MLP-' + Math.floor(100000 + Math.random() * 900000);
    const child = this.partyData ? this.partyData.childName : 'Your child';
    const age = this.partyData ? this.partyData.childAge : '';
    const date = this.partyData ? this.partyData.partyDate : 'Upcoming Weekend';
    const parent = this.parentData ? this.parentData.firstName : 'Parent';

    let subtotal = this.cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const shipping = subtotal >= 140 ? 0 : 12;
    const total = subtotal + shipping;

    const dynamicMsg = document.getElementById('confirm-dynamic-msg');
    if (dynamicMsg) {
      dynamicMsg.textContent = `Thank you, ${parent}. Moffy is printing custom party seals for ${child}'s ${age ? age + 'th ' : ''}celebration. Kits will arrive 4 days before ${date}.`;
    }

    const receiptCard = document.getElementById('confirm-receipt-card');
    if (receiptCard) {
      const itemsList = this.cart.map(item => `
        <div style="display: flex; justify-content: space-between; font-size: 0.92rem; margin-bottom: 8px;">
          <span><strong>${item.qty}x</strong> ${item.name}</span>
          <span>$${(item.price * item.qty).toFixed(2)}</span>
        </div>
      `).join('');

      receiptCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; border-bottom: 1.5px solid #E8DFD3; padding-bottom: 10px; margin-bottom: 14px;">
          <span style="font-weight: 800; font-size: 0.9rem; color: #20BF6B;">Order #${orderNumber}</span>
          <span style="font-size: 0.86rem; color: #535F5B;">Celebration: ${date}</span>
        </div>
        ${itemsList}
        <div style="border-top: 1.5px dashed #FF5A36; margin-top: 12px; padding-top: 12px; display: flex; justify-content: space-between; font-weight: 800;">
          <span>Total Charged:</span>
          <span style="color: #FF5A36; font-size: 1.25rem;">$${total.toFixed(2)}</span>
        </div>
        <div style="margin-top: 14px; font-size: 0.82rem; color: #535F5B; background: #FFF; padding: 10px 14px; border-radius: 8px; border: 1px solid #E8DFD3;">
          Delivery to: ${this.parentData.address}, ${this.parentData.city} ${this.parentData.zip}
        </div>
      `;
    }

    this.cart = [];
    this.saveCart();
    this.goToCheckoutStep(3);
  }

  // ----------------------------------------------------------------
  // Mobile Navigation Drawer
  // ----------------------------------------------------------------
  initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const drawer = document.getElementById('mobile-menu-drawer');
    const overlay = document.getElementById('mobile-menu-overlay');
    const closeBtn = document.getElementById('btn-close-mobile-menu');

    const openMenu = () => {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (toggleBtn) toggleBtn.onclick = openMenu;
    if (closeBtn) closeBtn.onclick = closeMenu;
    if (overlay) overlay.onclick = closeMenu;

    document.querySelectorAll('.mobile-nav-item').forEach(link => {
      link.onclick = closeMenu;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new MoffysApp();
});
