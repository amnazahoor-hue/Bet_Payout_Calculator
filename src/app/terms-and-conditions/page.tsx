import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";

export const metadata: Metadata = {
  title: "Kullanım Şartları | AltılıBahis",
  description: "AltılıBahis web sitesi ve hesaplama aracı kullanım şartları ve koşulları.",
};

export default function TermsPage() {
  return (
    <SiteLayout>
      <article className="legal-content mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="mb-8 font-display text-text-primary">Kullanım Şartları</h1>
        <p className="text-sm text-text-secondary">Son güncelleme: 1 Haziran 2026</p>

        <h2>Şartların Kabulü</h2>
        <p>
          AltılıBahis.com web sitesine (&quot;Site&quot;) erişerek veya Site üzerindeki herhangi bir hizmeti
          kullanarak, işbu Kullanım Şartları&apos;nı okuduğunuzu, anladığınızı ve bunlara bağlı kalmayı
          kabul ettiğinizi beyan edersiniz. Bu şartları kabul etmiyorsanız, Siteyi kullanmamalısınız.
          Site yönetimi, şartları herhangi bir zamanda güncelleme hakkını saklı tutar; güncellemeler
          yayınlandığı anda geçerlilik kazanır.
        </p>
        <p>
          Bu şartlar; Site sahibi ile ziyaretçi ve kullanıcı arasındaki hukuki ilişkiyi düzenler.
          Ayrıca Sorumluluk Reddi ve Gizlilik Politikası belgeleri bu şartların ayrılmaz parçasıdır.
        </p>

        <h2>Web Sitesinin Kullanımı</h2>
        <p>
          Site, yalnızca yasal amaçlarla ve bu şartlara uygun şekilde kullanılmalıdır. Aşağıdaki
          eylemler kesinlikle yasaktır: Site güvenliğini tehlikeye atmak, yetkisiz erişim girişiminde
          bulunmak, zararlı yazılım yaymak, otomatik botlarla aşırı trafik oluşturmak, içerikleri
          izinsiz kopyalamak veya ticari olarak dağıtmak, yanıltıcı bilgi yaymak veya başkalarının
          haklarını ihlal etmek.
        </p>
        <p>
          Siteye erişim, bakım, güvenlik veya teknik nedenlerle önceden haber verilmeksizin
          askıya alınabilir veya sonlandırılabilir. Kullanıcılar, Siteyi kendi internet bağlantı ve
          cihaz güvenliği sorumluluğu altında kullanır.
        </p>

        <h2>Fikri Mülkiyet</h2>
        <p>
          Site üzerindeki tüm metin, grafik, logo, tasarım, yazılım kodu ve hesaplama aracı dahil
          tüm içerikler AltılıBahis.com veya lisans verenlerine aittir ve telif hakkı ile korunur.
          Önceden yazılı izin alınmadan kopyalanamaz, çoğaltılamaz, dağıtılamaz veya türev eser
          oluşturulamaz. TJK ve diğer üçüncü taraf markaları ilgili sahiplerinin mülkiyetindedir.
        </p>
        <p>
          Kişisel, ticari olmayan kullanım için Siteyi görüntülemenize ve hesaplayıcıyı kullanmanıza
          izin verilir. Bu izin, mülkiyet devri veya alt lisans anlamına gelmez.
        </p>

        <h2>Araç Kullanım Şartları</h2>
        <p>
          Altılı bahis hesaplayıcı; kullanıcı tarafından girilen verilere dayalı tahmini sonuçlar
          üretir. Araç, bahis oynatma, kupon satışı veya ikramiye ödemesi yapmaz. Sonuçların
          doğruluğu, girilen verilerin doğruluğuna ve TJK resmi uygulamalarına bağlıdır. Site,
          kesin ikramiye tutarlarını garanti etmez.
        </p>
        <p>
          Kullanıcılar, 18 yaş ve üzeri olduklarını ve bulundukları yargı bölgesinde bahis ve kumar
          faaliyetlerinin yasal olduğunu teyit etmekle yükümlüdür. Yasak bölgelerden erişim
          kullanıcının sorumluluğundadır.
        </p>

        <h2>Sorumluluğun Sınırlandırılması</h2>
        <p>
          Kanunun izin verdiği azami ölçüde, Site ve yönetimi; Site kullanımından, hesaplama
          hatalarından, veri kaybından, iş kesintisinden veya üçüncü taraf eylemlerinden doğan
          zararlardan sorumlu tutulamaz. Site &quot;olduğu gibi&quot; ve &quot;mevcut haliyle&quot; sunulur; açık veya
          zımni hiçbir garanti verilmez.
        </p>
        <p>
          Toplam sorumluluk, varsa, kullanıcının Siteye son altı ay içinde ödediği tutarla sınırlıdır;
          Site ücretsiz olduğundan bu tutar sıfır olabilir.
        </p>

        <h2>Üçüncü Taraf Bağlantıları</h2>
        <p>
          Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriği ve
          uygulamaları üzerinde kontrolümüz yoktur. Bağlantılar yalnızca kolaylık sağlar; onay veya
          garanti anlamına gelmez. Üçüncü taraf siteleri kullanımınız kendi riskinizdedir.
        </p>

        <h2>Uygulanacak Hukuk</h2>
        <p>
          Bu Kullanım Şartları, Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda Türkiye
          mahkemeleri ve icra daireleri yetkilidir; aksi zorunlu tüketici mevzuatı hükümleri saklıdır.
        </p>

        <h2>İletişim Referansı</h2>
        <p>
          Kullanım şartları hakkında sorularınız için{" "}
          <a href="/contact" className="font-medium text-primary underline">
            iletişim sayfamızı
          </a>{" "}
          kullanabilirsiniz. Resmi yazışmalar için geçerli e-posta adresi iletişim formu üzerinden
          paylaşılacaktır. Siteyi kullanmaya devam ederek bu şartların tüm hükümlerini kabul etmiş
          sayılırsınız.
        </p>
        <p>
          İşbu belge, Site ile kullanıcı arasındaki tam anlaşmayı oluşturur ve önceki sözlü veya
          yazılı anlaşmaların yerine geçer. Herhangi bir hükmün geçersiz sayılması, diğer hükümlerin
          geçerliliğini etkilemez.
        </p>
      </article>
    </SiteLayout>
  );
}
