# Kalkan Kitchen · Premium ana sayfa demosu

Next.js App Router, TypeScript ve Tailwind CSS 4 ile hazırlanmış, bağımsız çalışabilen restoran arayüzü. Referanstaki merkezde büyüyen ürün, dönüş ve renk geçişi fikri yemek fotoğraflarına uyarlandı. WebGL yerine CSS perspektif, dönüş, gölge ve şeffaf WebP görseller kullanılır.

## Çalıştırma

Node.js **22.18 veya üzeri** gerekir; geliştirme ve testler Node 24 ile doğrulandı.

```bash
cd kalkan-premium
npm ci
npm run dev
```

Tarayıcı: http://127.0.0.1:3000

Bu oturumdaki önizleme 3100 portunu kullanır. Aynı portu kullanmak için `npm run dev -- --port 3100`.

```bash
npm run build      # Üretim derlemesi
npm run start      # Derlenmiş uygulama, 3000 portu
npm run typecheck  # TypeScript kontrolü
npm test           # Sepet ve entegrasyon birim testleri
npm run format    # Kaynakları biçimlendir
```

macOS'ta kısıtlı çalışma ortamı `EMFILE` dosya izleme hatası verirse:

```bash
WATCHPACK_POLLING=true npm run dev -- --port 3100
```

Uygulama API anahtarı, hesap veya ortam değişkeni istemez. Paket sürümleri `package-lock.json` içinde sabitlenmiştir.

## Hazır özellikler

- Dört kategori: **Burgerler, Asia Kitchen, Pizza, İçecekler**. Her kategoride iki örnek ürün.
- Kategoriye basınca üst carousel ve alttaki ürün listesi yalnızca o kategoriyi gösterir. Kategori değişimi ilk üründen başlar, kaydırma kategori içinde döngü yapar.
- Telefonda farklı kategori seçimi üstteki ürün alanını görünür yapar; ortak sepet korunur.
- Her ürüne özel, yumuşak geçişli gradient ışık, renk paleti, başlık, açıklama ve fiyat.
- Pointer Events ile mouse sürükleme ve dokunma desteği. Dikey sayfa kaydırma için `touch-action: pan-y pinch-zoom` korunur; yatay hareket eşiği 50 px.
- Önceki/sonraki butonları, dört kategori seçim düğmesi, odaklanmış yemek üzerinde sol/sağ ve Home/End tuşları.
- Sepete eklerken uçan ürün görseli, bildirim, ürün bazında adet, ara toplam, boş sepet ve yerel sepet kaydı.
- Ürün başına en fazla 20 adet; bozuk kayıt, bilinmeyen ürün kimliği ve geçersiz adetler temizlenir.
- Native `dialog` ile modal odak yönetimi, Escape ile kapatma, anlamlı buton isimleri ve canlı bildirimler.
- Sistem `prefers-reduced-motion` tercihi ve ayrıca görünür “Hareketi durdur” kontrolü. Otomatik ürün değiştirme yoktur.
- Mobil menü, malzeme/alerjen açıklamaları, hikâye bölümü ve yerel SVG marka işareti.

## Dosya yapısı

```text
src/
  app/
    page.tsx                  Ana sayfa
    layout.tsx                Türkçe dil ve metadata
    globals.css               Tailwind ve sayfa temel stilleri
    icon.svg                  Favicon
  components/
    restaurant-demo.tsx       Tema, sepet ve sayfa bileşimi
    product-carousel.tsx     Yeniden kullanılabilir 2.5D ürün sunumu
    cart-drawer.tsx           Erişilebilir sepet paneli
    menu-section.tsx          Ürün kartları
    icons.tsx                 Yerel SVG ikonlar
  data/products.ts            Demo ürünleri, fiyatlar, temalar, görseller
  types/product.ts            Ürün ve callback tipleri
  lib/
    cart.ts                   Sepet doğrulama ve adet işlemleri
    format.ts                 Türkçe fiyat biçimleme
    kalkan-adapter.ts          Mevcut Kalkan kataloğu için dönüşüm
  styles/restaurant.css       .restaurant altında kapsamlanmış bileşen stilleri
public/food/                  Sekiz aktif ürüne ait şeffaf WebP görseller
tests/                        Sepet ve katalog dönüşüm testleri
docs/INTEGRATION.md            Mevcut projeye bağlama örnekleri
docs/ASSETS.md                 Görsel kaynağı ve üretim promptları
docs/VALIDATION.md             Yapılan kontroller ve sınırlar
```

## Düzenleme

Kategori adları ve sırası `src/data/categories.ts` içindedir. Ürünlerin `categoryId` alanı, ilgili kategori `id` değeriyle eşleşmelidir. Fiyat, ürün adı, metinler, malzeme listesi, görsel ve renkler `src/data/products.ts` içindedir. `price` bu demoda **TL** cinsindedir. Örneğin `420`, 420 TL anlamına gelir.

Yeni görselleri `public/food/` içine koyup ürünün `image` alanını değiştirin. En iyi 2.5D görünüm için şeffaf arka planlı, benzer açıdan çekilmiş kare fotoğraflar kullanın. Ana sayfanın marka adı ve hikâye metni `restaurant-demo.tsx` içindedir.

## Entegrasyon ve sınırlar

Mevcut Kalkan Kitchen projesine yönelik aktarım adımları ve `@kalkan/core` fiyat/sepet uyumu için [entegrasyon belgesine](docs/INTEGRATION.md) bakın. Mevcut projedeki `price` **kuruş** cinsindedir; adapter bu farkı ele alır.

Bu teslim bağımsız bir başlangıç projesidir. Mevcut uygulamaya henüz uygulanmamıştır. Gerçek sipariş, ödeme, kullanıcı hesabı, sunucu sepeti veya canlı stok bağlantısı içermez. Sepet yalnızca aynı tarayıcı ve origin içinde saklanır. Ürünler, fiyatlar, reçeteler, alerjenler ve marka anlatımı demo içeriğidir; yayımlamadan önce işletmenin gerçek bilgileriyle değiştirilmelidir.

İlk ekrandaki görsel `next/image` ile önceliklendirilir; diğer görseller tarayıcı ve Next.js tarafından boyutlandırılır. Görsel klasörü önceki tatlı varlığı dahil yaklaşık 2.2 MB'tır. Font/CDN veya harici görsel servisi bağımlılığı yoktur. Gerçek cihaz performans puanı ve Lighthouse ölçümü yapılmadı.

Teknik referanslar: [Next.js App Router](https://nextjs.org/docs/app/getting-started/installation), [Tailwind Next.js kurulumu](https://tailwindcss.com/docs/installation/framework-guides/nextjs).
