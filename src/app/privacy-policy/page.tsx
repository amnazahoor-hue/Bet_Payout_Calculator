import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | AltılıBahis",
  description: "AltılıBahis gizlilik politikası, veri toplama, çerezler ve kullanıcı hakları hakkında bilgi.",
};

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <article className="legal-content mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="mb-8 font-display text-text-primary">Gizlilik Politikası</h1>
        <p className="text-sm text-text-secondary">Son güncelleme: 1 Haziran 2026</p>

        <h2>Giriş</h2>
        <p>
          AltılıBahis.com (&quot;Site&quot;, &quot;biz&quot;) olarak gizliliğinize saygı duyuyor ve kişisel
          verilerinizin korunmasını önemsiyoruz. Bu Gizlilik Politikası; Siteyi ziyaret ettiğinizde
          veya hesaplama aracımızı kullandığınızda hangi verilerin toplandığını, nasıl işlendiğini,
          kimlerle paylaşıldığını ve haklarınızı açıklar. Siteyi kullanarak bu politikayı kabul etmiş
          sayılırsınız. Kabul etmiyorsanız, lütfen Siteyi kullanmayı bırakın.
        </p>
        <p>
          Politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuat
          çerçevesinde hazırlanmıştır. Veri sorumlusu sıfatıyla AltılıBahis.com yönetimi, kişisel
          verilerin işlenmesinden sorumludur.
        </p>

        <h2>Toplanan Veriler</h2>
        <p>
          Hesaplama aracımız, girdiğiniz ikramiye havuzu ve kazanan sayısını sunucularımızda
          kalıcı olarak saklamaz; bu veriler yalnızca tarayıcınızda işlenir ve hesaplama anında
          kullanılır. Ancak Siteyi ziyaret ettiğinizde aşağıdaki veriler otomatik veya gönüllü
          olarak toplanabilir:
        </p>
        <ul>
          <li>Teknik veriler: IP adresi, tarayıcı türü ve sürümü, işletim sistemi, cihaz türü</li>
          <li>Kullanım verileri: ziyaret edilen sayfalar, oturum süresi, tıklama ve kaydırma davranışları</li>
          <li>İletişim formu verileri: ad soyad, e-posta, konu ve mesaj (formu doldurduğunuzda)</li>
          <li>Çerez ve benzeri teknolojiler aracılığıyla toplanan tanımlayıcılar</li>
        </ul>
        <p>
          18 yaşından küçüklerin bilerek kişisel veri göndermemesi gerekir. Reşit olmayanlardan
          veri toplandığının farkına varırsak, ilgili verileri silmek için makul adımlar atarız.
        </p>

        <h2>Çerez Politikası</h2>
        <p>
          Çerezler, Site deneyimini iyileştirmek, tercihlerinizi hatırlamak ve trafiği analiz etmek
          için kullanılan küçük metin dosyalarıdır. Kullandığımız çerez türleri şunları içerebilir:
        </p>
        <ul>
          <li>Zorunlu çerezler: Site güvenliği ve temel işlevsellik için gereklidir</li>
          <li>Analitik çerezler: ziyaretçi istatistikleri ve performans ölçümü için kullanılır</li>
          <li>Tercih çerezleri: dil veya arayüz tercihlerinizi saklayabilir</li>
        </ul>
        <p>
          Tarayıcı ayarlarınızdan çerezleri reddedebilir veya silebilirsiniz. Ancak bazı çerezlerin
          devre dışı bırakılması, Site işlevlerinin kısıtlanmasına neden olabilir. Çerez banner&apos;ı
          veya ayar paneli sunulduğunda, tercihlerinizi bu kanallardan yönetebilirsiniz.
        </p>

        <h2>Google Analytics ve Microsoft Clarity</h2>
        <p>
          Site trafiğini anlamak ve kullanıcı deneyimini geliştirmek amacıyla Google Analytics ve
          Microsoft Clarity gibi üçüncü taraf analitik hizmetleri kullanılabilir. Bu hizmetler;
          sayfa görüntülemeleri, oturum süreleri, ısı haritaları, tıklama kayıtları ve benzeri
          anonim veya pseudonim veriler toplayabilir.
        </p>
        <p>
          Google Analytics, Google LLC tarafından sunulur ve çerezler aracılığıyla veri toplayabilir.
          Toplanan veriler Google&apos;ın gizlilik politikasına tabidir. IP anonimleştirme gibi önlemler
          etkinleştirilebilir. Microsoft Clarity, Microsoft Corporation tarafından sunulur ve oturum
          kayıtları ile etkileşim analizi sağlayabilir. Her iki hizmet de AB/Türkiye veri koruma
          standartlarına uyum için sözleşmesel taahhütler içerebilir.
        </p>
        <p>
          Analitik hizmetlerini devre dışı bırakmak için tarayıcı eklentileri (örneğin Google
          Analytics Opt-out) kullanabilir veya çerez tercihlerinizi güncelleyebilirsiniz.
        </p>

        <h2>Kullanıcı Hakları</h2>
        <p>
          KVKK kapsamında aşağıdaki haklara sahipsiniz: kişisel verilerinizin işlenip işlenmediğini
          öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amaca uygun kullanılıp
          kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,
          eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini
          isteme, otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun
          ortaya çıkmasına itiraz etme ve kanuna aykırı işlenmesi halinde zararın giderilmesini talep
          etme.
        </p>
        <p>
          Haklarınızı kullanmak için{" "}
          <a href="/contact" className="font-medium text-primary underline">
            iletişim sayfamız
          </a>{" "}
          üzerinden başvurabilirsiniz. Başvurular, kimlik doğrulaması sonrasında en geç otuz gün
          içinde yanıtlanır.
        </p>

        <h2>Veri Saklama</h2>
        <p>
          Kişisel veriler, toplama amacının gerektirdiği süre boyunca ve yasal yükümlülükler
          çerçevesinde saklanır. İletişim formu mesajları, talebin çözülmesinden sonra makul bir süre
          içinde arşivlenir veya silinir. Analitik veriler, hizmet sağlayıcı politikalarına göre
          anonimleştirilmiş olarak daha uzun süre tutulabilir.
        </p>
        <p>
          Veri ihlali şüphesi durumunda, yasal yükümlülükler çerçevesinde ilgili kullanıcılar ve
          Kurul bilgilendirilebilir.
        </p>

        <h2>Değişiklik Bildirimi</h2>
        <p>
          Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler Site üzerinde
          duyurulur ve güncelleme tarihi sayfanın üst kısmında revize edilir. Politikanın güncel
          halini düzenli olarak incelemenizi öneririz. Değişiklik sonrası Siteyi kullanmaya devam
          etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.
        </p>
        <p>
          Sorularınız için lütfen iletişim sayfamızı kullanın. Gizliliğinize verdiğimiz önem
          doğrultusunda verilerinizi korumak için teknik ve idari güvenlik önlemleri uygulamaya
          devam edeceğiz.
        </p>
      </article>
    </SiteLayout>
  );
}
