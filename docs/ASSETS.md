# Görseller

Dört yemek görseli bu demo için yerleşik **Imagegen** aracıyla üretildi; CLI/API fallback kullanılmadı. Görseller gerçek restoran ürünlerinin fotoğrafı değildir.

Şeffaf alfa kanalı korunarak 1000 × 1000 WebP biçimine optimize edildiler. Runtime'da harici görsel bağlantısı veya Imagegen erişimi gerekmez. Dosyalar:

- `public/food/pizza.webp`
- `public/food/ramen.webp`
- `public/food/burger.webp`
- `public/food/dessert.webp`

SVG marka işareti, favicon ve arayüz ikonları kodla oluşturulmuş yerel vektörlerdir.

## Pizza / ramen / burger ortak prompt

```text
Use case: product-mockup. Asset type: isolated food photography cutout for a premium restaurant website animated carousel. Subject: [SUBJECT] Photorealistic editorial food photography, appetizing real textures, warm directional studio light from upper left, gentle rim light. One centered item occupying 82% of a square canvas, ample safe margin on all sides. Truly transparent background with alpha channel; no table, no backdrop, no floor, no cast background shadow, no text, no logos, no graphic decoration. Export square PNG. Save output for use in website.
```

Her bir görsel ayrı çağrıda üretildi. `[SUBJECT]` alanları:

**Pizza**

```text
A whole authentic Neapolitan margherita pizza, puffy blistered golden crust, vibrant tomato, melted mozzarella, 5 fresh basil leaves. Three-quarter elevated view showing the whole circular pizza and edge, no plate.
```

**Ramen**

```text
A deep matte dark ceramic bowl of miso ramen, curly noodles, two golden jammy egg halves, shiitake mushrooms, scallions, sesame, rich amber broth. Three-quarter elevated view, whole bowl visible, no chopsticks.
```

**Burger**

```text
A beautiful single premium smash cheeseburger, golden sesame brioche bun, two thin charred beef patties with melted cheddar, green lettuce, pickles and a little sauce. Three-quarter view showing layers. No plate, no fries.
```

**Tatlı — kullanılan son prompt**

```text
Use case: product-mockup. Asset: food cutout for premium restaurant carousel. One slice of Basque burnt cheesecake with caramelized brown top and rich ivory creamy interior, two red raspberries at base. Entire cake slice centered in a square image, 15 percent safe margins. Three quarter elevated camera view, appetizing photorealistic food studio photography, warm directional light from top left. Truly transparent alpha background, no plate, no utensils, no surface, no backdrop, no text, no logo. Match a luxury food product photograph.
```


## Kategori güncellemesi · 22 Eylül 2026

Yerleşik Imagegen ile beş ilave şeffaf ürün görseli üretildi ve alfa kanalı korunarak 1000 px WebP’ye optimize edildi: `public/food/chicken-burger.webp`, `funghi-pizza.webp`, `wok-noodles.webp`, `lemonade.webp`, `iced-tea.webp`. Bunlar örnek menü görselleridir. Dört yeni görselin tam promptları `category-image-prompts.json` içindedir.

Funghi promptu: “Use case: product-mockup. Asset: isolated premium restaurant menu photography cutout. Subject: A whole Neapolitan mushroom pizza, puffy blistered golden crust, mozzarella cheese, sliced brown mushrooms and thyme. No basil or tomatoes on top. One entire item centered in a square canvas with 12% safe margins, three-quarter elevated view. Warm directional studio lighting from upper left, photorealistic appetizing texture. Truly transparent alpha background. No table, surface, backdrop, utensils, text, branding, watermark or background shadow. Match a high-end editorial food catalogue.”
