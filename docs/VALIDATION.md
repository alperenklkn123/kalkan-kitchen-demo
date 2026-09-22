# Doğrulama

21 Eylül 2026 tarihinde bu çalışma ortamında yapılan kontroller:

| Kontrol | Sonuç |
| --- | --- |
| Next.js üretim derlemesi (`npm run build`) | Başarılı; ana sayfa statik ön işleniyor |
| TypeScript (`npm run typecheck`) | Başarılı |
| Birim testleri (`npm test`) | 6/6 başarılı |
| 320, 390, 768 ve 1440 px görünüm | Sayfanın genişliği viewport ile eşit; yatay taşma yok |
| Görseller | İncelenen viewport'larda yükleniyor; boyut değişiminden sonra büyük varyant da doğrulandı |
| Carousel | Doğrudan seçim, önceki/sonraki, son üründen ilk ürüne dönüş çalışıyor |
| Klavye | Odaklanmış yemek üzerinde sağ ok pizza → ramen geçişini sağlıyor |
| Sürükleme | 390 px görünümde yatay pointer sürükleme ramen → burger geçişini sağlıyor |
| Sepet | İki pizza → 840 TL; birini azaltma → 420 TL |
| Yerel kayıt | Yenilemeden sonra 1 ürün korunuyor |
| Kaldırma | Son ürünü azaltma boş sepet görünümünü açıyor |
| Modal | Escape kapatıyor; odak sepet düğmesine geri dönüyor |
| Hareket kontrolü | “Hareketi durdur” sonrası hesaplanan animation-play-state `paused` |

Birim testleri bozuk sepet kayıtlarını, geçersiz ürünleri/adetleri, yinelenen kayıtları, 20 adet sınırını, değişmez veri güncellemelerini, gerçek katalogdaki kuruş → TL dönüşümünü ve pasif/stoksuz ürünlerin ayıklanmasını kapsar.

Tarayıcı kontrolleri Codex uygulama içi tarayıcıda, viewport boyutu değiştirilerek yapıldı. Fiziksel iPhone/Android cihazı, gerçek dokunmatik donanım, Safari/Firefox, düşük güçlü cihaz GPU'su ve işletim sisteminin reduced-motion ayarı ayrıca test edilmedi. Reduced-motion medya sorgusu kodda mevcuttur. Otomatik erişilebilirlik denetimi, Lighthouse skoru ve yük testi yapılmadı.

Demo gerçek sipariş veya ödeme üretmedi. Önizleme sepetindeki test ürünü kontroller sonunda kaldırıldı.


## Kategori güncellemesi · 22 Eylül 2026

- Üretim derlemesi ve TypeScript kontrolü başarılı; birim testleri **9/9** geçti.
- Dört kategori için ilk ürün → ikinci ürün → ilk ürün döngüsü tarayıcıda doğrulandı. Burgerler, Asia Kitchen, Pizza ve İçecekler birbirine karışmıyor.
- Kategori değişince üst sunum ve alt menü aynı kategoriye geçiyor; yeni kategori ilk üründen başlıyor.
- Limonata ve Double Smash farklı kategorilerden ortak sepete eklendi: toplam **580 TL**. Test ürünleri sonrasında kaldırıldı.
- 390 px görünümde kategori seçiminin ürün alanına kaydırması ve taşmasız düzeni; 1440 px görünümde kategori satırı ve tüm görünür görseller kontrol edildi.
- Yeni kategori sürümünde fiziksel dokunmatik cihaz testi yapılmadı. Kaydırma aynı Pointer Events bileşenini, kategoriye filtrelenmiş ürün listesiyle kullanıyor.
