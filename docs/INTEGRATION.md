# Mevcut Kalkan Kitchen projesine entegrasyon

Bu demo mevcut proje üzerinde değişiklik yapmadan ayrı hazırlanmıştır. İncelenen önceki yapı `apps/web` altında Next.js 16 ve `packages/core` altında `useShop` ile ortak ürün/sepet tipleri kullanıyor.

## 1. Önce ayrı bir demo rotası

`src/components`, `src/types`, `src/data`, `src/lib` dosyalarını web uygulamanızın ilgili klasörlerine, `public/food` dosyalarını web uygulamasının `public/food` klasörüne taşıyın. İsim çakışıyorsa `components/premium` gibi bir alt klasör seçip importları güncelleyin. `@/*` alias'ı bu projede `src/*` anlamındadır; hedef projenin alias'ını koruyun.

Tailwind 4 için `tailwindcss`, `@tailwindcss/postcss` ve `postcss` paketlerini web workspace'ine ekleyin; `postcss.config.mjs` içindeki plugin'i mevcut ayara birleştirin. Global CSS'in başına `@import "tailwindcss";` ekleyin. Zaten Tailwind varsa ikinci kurulum yapmayın. Tailwind Preflight'ın mevcut genel reset kurallarıyla uyumunu demo rotasında kontrol edin.

`src/styles/restaurant.css` dosyasını taşıyın ve app layout'unuzda bir kez import edin. Bileşen seçicileri `.restaurant` altında kapsamlanmıştır. Sayfaya ait `globals.css` ve `body` ayarlarını mevcut projede körlemesine değiştirmeyin. Tek dış seçici `kalkan-cart-flight` uçuş efektidir.

```tsx
// apps/web/app/premium-demo/page.tsx
import { RestaurantDemo } from "@/components/restaurant-demo";
export default function PremiumDemoPage() {
  return <RestaurantDemo />;
}
```

Bu rota kendi demo sepetini kullanır. Gerçek sipariş akışına bağlamak için aşağıdaki adımı uygulayın.

## 2. Carousel'i mevcut sepetle kullanma

`ProductCarousel` veri ve callback alır; kendi ödeme veya sepet servisini içermez:

```tsx
"use client";
import { ProductCarousel } from "@/components/product-carousel";
import type { Product } from "@/types/product";

export function PremiumHero({ products, add }: {
  products: Product[];
  add: (productId: string, optionId?: string) => void;
}) {
  // Bu küçük örnek sabit bir zemin kullanır. Dinamik gradient için
  // RestaurantDemo'daki scene-backgrounds + onProductChange yapısını taşıyın.
  return (
    <div className="restaurant" style={{ background: "#1e241a" }}>
      <div className="dark-experience">
        <ProductCarousel
          products={products}
          onAddToCart={(product) => add(product.id)}
        />
      </div>
    </div>
  );
}
```

Mevcut `Shop` içinde aynı `s = useShop(...)` örneğini kullanın ve `add={s.add}` geçin. İkinci bir `useShop` veya `RestaurantDemo` sepeti oluşturmayın. Eski `s.add(productId, optionId = "")` standart ürünü ekleyebilir. Zorunlu ürün seçenekleri varsa callback içinde mevcut ürün detayı/seçenek panelini açın, seçimden sonra `s.add(id, optionId)` çağırın.

## 3. Fiyat birimi ve katalog eşleştirme

Mevcut `@kalkan/core` fiyatları **kuruş**, bu sunum bileşeni ise **TL** cinsinden alır. 42.000 kuruş, 420 TL olarak gösterilmelidir. `adaptKalkanCatalog` bu dönüşümü yapar, pasif/stoksuz ürünleri ve geçersiz fiyatları ayıklar.

```tsx
import { adaptKalkanCatalog } from "@/lib/kalkan-adapter";
import { products as demoVisuals } from "@/data/products";

// Kimlikleri gerçek katalog kimliklerinizle değiştirin.
// İsim benzerliğine dayanarak otomatik eşleştirme yapmayın.
const visualsById = {
  "GERCEK_PIZZA_ID": demoVisuals[0],
  "GERCEK_RAMEN_ID": demoVisuals[1],
};
const featured = adaptKalkanCatalog(s.products, visualsById);
// <PremiumHero products={featured} add={s.add} />
```

Görsel, içerik, alerjen ve porsiyon alanlarını gerçek reçeteye uyarlayın. Miso ramen görselini tonkotsu ürününe otomatik bağlamayın. `ProductCarousel` ürün listesi boşsa boş menü mesajı gösterir. İlk katalog yüklemesi bitene kadar mevcut uygulamanızın yükleme durumunu kullanın. Katalog değişip ürünler yeniden sıralanırsa carousel'e `key={featured.map(p => p.id).join(",")}` vererek aktif seçimi baştan başlatabilirsiniz.

`ProductCarouselProps`:

| Alan | İşlev |
| --- | --- |
| `products` | Görsel/metin/tema alanları eklenmiş ürün dizisi |
| `onAddToCart(product, source?)` | Gerçek sepete veya ürün seçeneklerine bağlantı |
| `onProductChange(product)` | Arka plan/üst gezinme temasını güncelleme |
| `motionEnabled` | Dekoratif hareketleri açma/kapama |

Sunucu sipariş oluştururken ürün fiyatını, stok miktarını ve seçenekleri kendi kataloğundan tekrar doğrulamalıdır. Bu demo müşteri arayüzünü sağlar; ödeme ve sipariş API sözleşmesini değiştirmez.

## 4. Mobil uygulama

Bu teslim responsive web'dir; Expo/iOS/Android uygulaması değildir. Ürün tipleri, içerik ve WebP varlıklar paylaşılabilir. DOM, CSS animasyonları, native web `dialog` ve Pointer Events, React Native'de doğrudan çalışmaz; mobil istemcide kendi gesture/animation katmanına uyarlanmalıdır.


## Kategori bazlı sunum (22 Eylül güncellemesi)

`src/data/categories.ts` kategori sırasını ve adlarını, ürünün `categoryId` alanı üyeliğini belirler. `CategoryTabs` tıklaması `RestaurantDemo` içindeki kategori state’ini günceller. `productsInCategory` ile filtrelenmiş diziyi `ProductCarousel` bileşenine verin; `key={categoryId}` ile kategori değiştiğinde ilk ürüne dönün. Seçili ilk ürünün temasını aynı olayda güncelleyin. Tüm katalog ve sepet state’ini carousel dışında tutun; kategori değişiminde sepeti sıfırlamayın.

Mevcut katalog adapter’ı `visualsById` içindeki `categoryId` değerini korur. Gerçek ürün ID’lerini doğru kategoriye bağlayın. Eski dört ürün arasında gezinme yerine carousel artık dışarıdan verilen kategori ürünleriyle çalışır; kategori butonları bağımsız `category-tabs.tsx` bileşenindedir.
