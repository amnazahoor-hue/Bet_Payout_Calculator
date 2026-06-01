import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";

export const metadata: Metadata = {
  title: "About | AltılıBahis Calculator",
  description:
    "Learn about the AltılıBahis team, our mission, and the TJK six-fold bet payout calculator.",
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="mb-8 font-display text-text-primary">Hakkımızda</h1>

        <section className="mb-10">
          <h2 className="mb-4 font-display text-text-primary">Biz Kimiz</h2>
          <p className="mb-4 text-text-secondary">
            AltılıBahis.com, Türkiye&apos;deki at yarışı tutkunları ve altılı bahis oyuncuları için
            geliştirilmiş bağımsız bir ikramiye hesaplama platformudur. Ekibimiz; yazılım
            geliştirme, veri analizi ve at yarışı kültürüne ilgi duyan profesyonellerden oluşur.
            Amacımız, karmaşık ikramiye hesaplamalarını herkesin anlayabileceği basit bir arayüze
            dönüştürmek ve kullanıcıların bilinçli kararlar almasına yardımcı olmaktır.
          </p>
          <p className="mb-4 text-text-secondary">
            Platformumuz, Türkiye Jokey Kulübü tarafından düzenlenen altılı bahis oyununun
            matematiksel yapısını şeffaf biçimde sunar. Resmi bir TJK kurumu veya bayi değiliz;
            ancak oyun kurallarına ve havuz bölünme mantığına sadık kalarak güvenilir tahminler
            üretmenize olanak tanırız. Her gün binlerce kullanıcı, çekiliş sonrası veya öncesinde
            olası ikramiye senaryolarını değerlendirmek için aracımızdan yararlanmaktadır.
          </p>
          <p className="text-text-secondary">
            Kullanıcı deneyimini ön planda tutarak arayüzümüzü sürekli iyileştiriyor, mobil
            cihazlarda sorunsuz çalışmasını sağlıyor ve erişilebilirlik standartlarına uygun
            tasarım ilkelerini benimsiyoruz. Geri bildirimleriniz, ürün yol haritamızın en önemli
            girdisidir.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 font-display text-text-primary">Bu Aracı Neden Yaptık</h2>
          <p className="mb-4 text-text-secondary">
            Altılı bahis, Türkiye&apos;nin en heyecan verici ve en yüksek ikramiye potansiyeline
            sahip bahis türlerinden biridir. Ancak çekiliş sonrasında &quot;havuz ne kadar, kaç
            kazanan var, bana ne kalır?&quot; sorularına hızlı yanıt bulmak her zaman kolay
            değildir. Resmi duyurular yayınlandığında sosyal medyada ve forumlarda yüzlerce farklı
            tahmin dolaşır; bu da kafa karışıklığına yol açar.
          </p>
          <p className="mb-4 text-text-secondary">
            Bu aracı, toplam ikramiye havuzu ile kazanan bilet sayısını girdiğinizde bilet başına
            ödemeyi anında hesaplayan basit bir çözüm olarak tasarladık. Karmaşık Excel tablolarına
            veya elle yapılan bölme işlemlerine gerek kalmadan, saniyeler içinde sonuç alırsınız.
            Ücretsiz erişim ilkesiyle herkesin eşit şekilde faydalanmasını hedefliyoruz.
          </p>
          <p className="text-text-secondary">
            Ayrıca eğitim amaçlı içeriklerle altılı bahisin nasıl çalıştığını, TJK havuz yapısını
            ve sık sorulan soruları Türkçe olarak açıklıyoruz. Bilgiye erişim, şeffaflık ve
            kullanım kolaylığı üçlüsü projemizin temel motivasyonudur.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 font-display text-text-primary">Doğruluk Taahhüdümüz</h2>
          <p className="mb-4 text-text-secondary">
            Hesaplama motorumuz, endüstride kabul gören temel formüle dayanır: Toplam İkramiye
            Havuzu ÷ Kazanan Bilet Sayısı = Bilet Başına Tahmini Ödeme. Bu matematiksel işlem
            her zaman doğru uygulanır ve kod tabanımızda yalnızca bu saf bölme işlemi yer alır.
            Girdiğiniz sayılar ne ise, çıktı da o oranda üretilir; gizli çarpan veya kesinti
            uygulanmaz.
          </p>
          <p className="mb-4 text-text-secondary">
            Bununla birlikte, aracımızın ürettiği sonuçlar tahmin niteliğindedir. Kesin ikramiye
            tutarları; vergi kesintileri, TJK komisyon yapısı, dağıtım kuralları ve resmi
            açıklamalar doğrultusunda değişebilir. Kullanıcı olarak sizden, önemli finansal
            kararlar almadan önce TJK&apos;nın resmi sonuç duyurularını kontrol etmenizi rica ederiz.
          </p>
          <p className="text-text-secondary">
            Hata bildirimi veya iyileştirme önerileri için iletişim sayfamızdan bize ulaşabilirsiniz.
            Tespit edilen teknik hatalar öncelikli olarak giderilir ve gerekirse kullanıcılarımız
            bilgilendirilir.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-text-primary">TJK ile İlişkimiz</h2>
          <p className="mb-4 text-text-secondary">
            AltılıBahis.com, Türkiye Jokey Kulübü ile resmi bir ortaklık, sponsorluk veya yetkilendirme
            ilişkisine sahip değildir. TJK adı ve altılı bahis kavramı yalnızca bilgilendirme ve
            bağlamsal açıklama amacıyla kullanılmaktadır. Tüm marka hakları ilgili sahiplerine aittir.
          </p>
          <p className="mb-4 text-text-secondary">
            Resmi bahis oynama, sonuç sorgulama ve ikramiye tahsil işlemleri yalnızca TJK&apos;nın
            yetkili kanalları üzerinden gerçekleştirilmelidir. Web sitemiz bahis satışı yapmaz,
            kupon kabul etmez ve ödeme dağıtımı gerçekleştirmez. Yalnızca kullanıcı tarafından
            girilen verilere dayalı matematiksel tahmin sunar.
          </p>
          <p className="text-text-secondary">
            TJK ile ilgili güncel duyuru, sonuç ve ikramiye bilgileri için lütfen{" "}
            <a
              href="https://www.tjk.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline"
            >
              tjk.org
            </a>{" "}
            adresini ziyaret edin. Platformumuz, resmi verilerin yerine geçecek bir kaynak olarak
            değil, tamamlayıcı bir hesaplama aracı olarak konumlanmıştır.
          </p>
        </section>
      </article>
    </SiteLayout>
  );
}
