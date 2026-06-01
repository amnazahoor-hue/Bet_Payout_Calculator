import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";

export const metadata: Metadata = {
  title: "Sorumluluk Reddi | AltılıBahis",
  description: "AltılıBahis web sitesi ve hesaplama aracı için yasal sorumluluk reddi beyanı.",
};

export default function DisclaimerPage() {
  return (
    <SiteLayout>
      <article className="legal-content mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="mb-8 font-display text-text-primary">Sorumluluk Reddi</h1>
        <p className="text-sm text-text-secondary">Son güncelleme: 1 Haziran 2026</p>

        <h2>Genel Sorumluluk Reddi</h2>
        <p>
          AltılıBahis.com (&quot;Site&quot;, &quot;biz&quot;, &quot;platformumuz&quot;) web sitesini ve altılı bahis ikramiye
          hesaplama aracını kullanarak, bu sorumluluk reddi belgesinde yer alan tüm hüküm ve
          koşulları okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz. Site
          üzerindeki tüm içerik, araçlar ve hesaplamalar yalnızca genel bilgilendirme amaçlı
          sunulmaktadır. Hiçbir içerik; yatırım, bahis, hukuki, mali veya profesyonel tavsiye
          niteliği taşımaz ve bu şekilde yorumlanmamalıdır.
        </p>
        <p>
          Siteyi kullanmanız tamamen kendi sorumluluğunuzdadır. Site yönetimi, içerik sağlayıcıları
          ve iş ortakları; Site kullanımından, hesaplama sonuçlarından veya Site üzerinde yer alan
          bilgilere dayanılarak alınan kararlardan doğabilecek doğrudan, dolaylı, arızi, özel veya
          sonuç olarak ortaya çıkan zararlardan, kanunun izin verdiği azami ölçüde, sorumlu tutulamaz.
        </p>

        <h2>Araç Kullanımına İlişkin Uyarılar</h2>
        <p>
          Altılı bahis hesaplayıcımız, kullanıcının girdiği toplam ikramiye havuzu ve kazanan bilet
          sayısı üzerinden basit bir bölme işlemi gerçekleştirir. Bu işlem matematiksel olarak
          doğrudur; ancak üretilen sonuçlar kesin ikramiye tutarlarını garanti etmez. Gerçek ödemeler;
          Türkiye Jokey Kulübü (TJK) tarafından uygulanan vergi kesintileri, komisyon yapısı,
          dağıtım kuralları, ikramiye tabloları ve resmi duyurular doğrultusunda farklılık gösterebilir.
        </p>
        <p>
          Kullanıcıların yanlış, eksik veya güncel olmayan veri girmesi halinde hesaplama sonuçları
          hatalı olacaktır. Site, girilen verilerin doğruluğunu kontrol etmez ve doğrulama yükümlülüğü
          üstlenmez. Önemli finansal kararlar almadan önce mutlaka TJK&apos;nın resmi web sitesi ve
          yetkili bayiler üzerinden güncel sonuçları teyit etmeniz önerilir.
        </p>
        <p>
          Hesaplayıcı; bahis oynama, kupon satın alma, ikramiye tahsil etme veya herhangi bir
          kumar/bahis hizmeti sunmaz. Yalnızca tahmini hesaplama yapar. 18 yaşından küçüklerin bahis
          oynaması yasaktır; Site yalnızca yetişkin kullanıcılar için tasarlanmıştır.
        </p>

        <h2>Üçüncü Taraf Bağlantıları</h2>
        <p>
          Sitemizde zaman zaman üçüncü taraf web sitelerine (örneğin TJK resmi sitesi, sosyal medya
          platformları veya bilgilendirme kaynakları) bağlantılar bulunabilir. Bu bağlantılar
          yalnızca kullanıcı kolaylığı için sağlanır. Üçüncü taraf sitelerin içeriği, gizlilik
          uygulamaları, güvenliği veya doğruluğu üzerinde kontrolümüz bulunmamaktadır. Bu siteleri
          ziyaret etmeniz halinde, ilgili sitenin kendi kullanım şartları ve gizlilik politikaları
          geçerli olacaktır.
        </p>
        <p>
          Üçüncü taraf bağlantıların varlığı, o sitelerin veya hizmetlerinin onaylandığı, desteklendiği
          veya garanti edildiği anlamına gelmez. Bağlantı üzerinden yaşanabilecek veri kaybı,
          güvenlik ihlali veya maddi zararlardan sorumluluk kabul etmeyiz.
        </p>

        <h2>Profesyonel Tavsiye Reddi</h2>
        <p>
          Site üzerindeki makaleler, SSS bölümü ve hesaplama sonuçları; lisanslı finansal danışman,
          avukat, muhasebeci veya bahis uzmanı görüşü yerine geçmez. Özellikle yüksek tutarlı
          ikramiye beklentileri veya yatırım kararları söz konusu olduğunda, ilgili alanda yetkin
          profesyonellerden destek almanız tavsiye edilir. Site yönetimi, kullanıcıların Site
          içeriğine dayanarak aldığı kararlardan sorumlu değildir.
        </p>

        <h2>Affiliate ve Reklam Reddi</h2>
        <p>
          AltılıBahis.com, şu an için bahis operatörleri veya TJK ile doğrudan gelir paylaşımı
          (affiliate) anlaşması içermemektedir. Gelecekte reklam veya sponsorluk içerikleri
          eklenmesi halinde, bu içerikler açıkça işaretlenecek ve kullanıcılar bilgilendirilecektir.
          Sponsorlu içeriklerin varlığı, Site&apos;nin bağımsız hesaplama mantığını değiştirmez;
          ancak kullanıcıların reklam materyallerini tanıtım amaçlı değerlendirmesi gerekir.
        </p>
        <p>
          Harici reklam ağları (Google AdSense vb.) kullanılması durumunda, bu ağların kendi çerez
          ve veri işleme politikaları geçerli olabilir. Detaylar için Gizlilik Politikamıza bakınız.
        </p>

        <h2>Bilgilerin Doğruluğu</h2>
        <p>
          Site içeriğini doğru ve güncel tutmak için makul çabayı gösteririz; ancak içeriklerin
          eksiksiz, hatasız veya her zaman güncel olduğunu garanti etmeyiz. At yarışı kuralları,
          ikramiye yapıları ve TJK uygulamaları zaman içinde değişebilir. Kullanıcılar, kritik
          bilgileri resmi kaynaklardan doğrulamalıdır.
        </p>
        <p>
          Teknik aksaklıklar, sunucu kesintileri, yazılım hataları veya siber saldırılar nedeniyle
          Site geçici olarak erişilemez olabilir veya hatalı sonuçlar üretebilir. Bu durumlardan
          kaynaklanan zararlardan sorumluluk kabul edilmez.
        </p>

        <h2>Değişiklik Bildirimi</h2>
        <p>
          Bu sorumluluk reddi belgesini herhangi bir zamanda, önceden haber vermeksizin güncelleme
          hakkımız saklıdır. Değişiklikler Site üzerinde yayınlandığı anda yürürlüğe girer. Siteyi
          kullanmaya devam etmeniz, güncellenmiş metni kabul ettiğiniz anlamına gelir. Önemli
          değişikliklerde ana sayfada veya ilgili bölümde bilgilendirme yapılabilir.
        </p>
        <p>
          Belgenin son güncelleme tarihi sayfanın üst kısmında belirtilmiştir. Düzenli aralıklarla
          bu sayfayı kontrol etmeniz önerilir.
        </p>

        <h2>İletişim Referansı</h2>
        <p>
          Bu sorumluluk reddi belgesi hakkında sorularınız için{" "}
          <a href="/contact" className="font-medium text-primary underline">
            iletişim sayfamız
          </a>{" "}
          üzerinden bize ulaşabilirsiniz. Yasal talepler ve resmi yazışmalar için makul süre içinde
          yanıt verilmeye çalışılacaktır. Türkiye Cumhuriyeti kanunlarının uygulanması söz konusu
          olduğunda, kullanım şartlarımızda belirtilen yetkili mahkeme ve hukuk kuralları geçerli
          olacaktır.
        </p>
        <p>
          Siteyi kullanarak bu belgedeki tüm hükümleri okuduğunuzu ve kabul ettiğinizi onaylamış
          sayılırsınız. Kabul etmiyorsanız, lütfen Siteyi kullanmayı bırakınız.
        </p>
      </article>
    </SiteLayout>
  );
}
