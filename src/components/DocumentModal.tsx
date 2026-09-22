import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { HARENNA_INITIATIVE, harennaLogo } from '../data/harennaData';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  if (!isOpen) return null;

  return (
    <div id="document-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        id="document-modal-container"
        className="relative w-full max-w-4xl max-h-[90vh] bg-stone-50 border border-stone-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-stone-900"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 border-2 border-emerald-700/80 shadow-sm shrink-0">
              <img
                src={harennaLogo}
                alt="Harenna Forest Heritage Logo"
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">
                Official Partnership Concept Document
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-stone-900">
                HARENNA FOREST HERITAGE
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="print-document-btn"
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              id="close-document-modal-btn"
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close document modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-nav filters */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-stone-50 border-b border-stone-200 overflow-x-auto text-xs whitespace-nowrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              activeTab === 'all' ? 'bg-emerald-800 text-white' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            Complete Document (Pages 1-7)
          </button>
          <button
            onClick={() => setActiveTab('statement')}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              activeTab === 'statement' ? 'bg-emerald-800 text-white' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            Founder Statement (From Heritage to Action)
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              activeTab === 'profile' ? 'bg-emerald-800 text-white' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            Founder & Community
          </button>
          <button
            onClick={() => setActiveTab('fieldwork')}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              activeTab === 'fieldwork' ? 'bg-emerald-800 text-white' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            Soil, Coffee & Beekeeping
          </button>
          <button
            onClick={() => setActiveTab('discoveries')}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              activeTab === 'discoveries' ? 'bg-teal-800 text-white' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            Species Discoveries (New Snake)
          </button>
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              activeTab === 'pillars' ? 'bg-emerald-800 text-white' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            6 Collaboration Pillars
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 leading-relaxed text-sm sm:text-base text-stone-800">
          {/* Document Title Header */}
          <div className="text-center border-b border-stone-200 pb-6 space-y-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-emerald-800 bg-emerald-100 rounded-full">
              Prepared for: {HARENNA_INITIATIVE.preparedFor}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-stone-950">
              HARENNA FOREST HERITAGE
            </h1>
            <p className="text-sm sm:text-base font-medium text-emerald-900 max-w-xl mx-auto">
              Local Action, Indigenous Knowledge & Conservation-Linked Green Enterprise
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-600 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                Harenna Bulluq District, Bale Zone, Oromia, Ethiopia
              </span>
              <span>•</span>
              <span className="font-semibold text-stone-900">Founder: Ebrahim Abdurazak</span>
            </div>
          </div>

          {/* Section: Founder Statement (From Heritage to Action) */}
          {(activeTab === 'all' || activeTab === 'statement') && (
            <section className="space-y-5 p-5 bg-emerald-50/50 rounded-2xl border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-900 font-display font-bold text-lg border-b border-emerald-200/80 pb-2">
                <span className="text-xs px-2 py-0.5 bg-emerald-200 text-emerald-950 rounded font-sans font-bold">FOUNDER STATEMENT</span>
                <span>FROM HERITAGE TO ACTION</span>
              </div>
              
              <div className="space-y-3 text-stone-800">
                <p className="font-medium text-stone-900 text-base">
                  Understanding Harenna’s heritage is only the beginning. For Harenna Forest Heritage, heritage protection must also create meaningful opportunities for the communities who live with and depend on this landscape.
                </p>
                <p>
                  We believe that conservation and community prosperity should not be treated as separate goals. When local communities have sustainable green opportunities, conservation can become part of everyday livelihoods and long-term development.
                </p>
              </div>

              <div className="p-4 bg-emerald-900 text-emerald-50 rounded-xl space-y-3">
                <div className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                  Our work therefore connects:
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-white">
                  <span className="px-2.5 py-1 bg-emerald-800 rounded">Conservation</span>
                  <span className="text-emerald-400">→</span>
                  <span className="px-2.5 py-1 bg-emerald-800 rounded">Knowledge</span>
                  <span className="text-emerald-400">→</span>
                  <span className="px-2.5 py-1 bg-emerald-800 rounded">Community</span>
                  <span className="text-emerald-400">→</span>
                  <span className="px-2.5 py-1 bg-emerald-800 rounded">Enterprise</span>
                  <span className="text-emerald-400">→</span>
                  <span className="px-2.5 py-1 bg-emerald-800 rounded">Partnership</span>
                </div>
                <p className="text-xs text-emerald-100/90 pt-1">
                  Through this approach, we aim to support conservation-linked green enterprises, strengthen local knowledge, create opportunities for young people and communities, and encourage responsible tourism and sustainable value chains.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-stone-950 text-base font-display">What We Are Building</h4>
                <p className="text-xs text-stone-600">
                  Harenna Forest Heritage is developing an integrated model around:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 bg-white border border-stone-200 rounded-lg">
                    <strong>Forest Conservation</strong> — supporting practical conservation and forest rehabilitation.
                  </div>
                  <div className="p-3 bg-white border border-stone-200 rounded-lg">
                    <strong>Local Knowledge</strong> — recognizing and documenting knowledge connected to nature and the landscape.
                  </div>
                  <div className="p-3 bg-white border border-stone-200 rounded-lg">
                    <strong>Community Development</strong> — creating opportunities that strengthen local livelihoods.
                  </div>
                  <div className="p-3 bg-white border border-stone-200 rounded-lg">
                    <strong>Youth Green Enterprise</strong> — connecting young people with sustainable economic opportunities.
                  </div>
                  <div className="p-3 bg-white border border-stone-200 rounded-lg">
                    <strong>Green Tourism</strong> — developing responsible experiences that connect visitors with forest, water, culture and nature.
                  </div>
                  <div className="p-3 bg-white border border-stone-200 rounded-lg">
                    <strong>Sustainable Enterprise</strong> — developing conservation-linked products and services such as coffee, honey and future tourism initiatives.
                  </div>
                  <div className="p-3 bg-white border border-stone-200 rounded-lg md:col-span-2">
                    <strong>Partnership</strong> — working with communities, institutions, researchers and responsible partners.
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-emerald-200/80">
                <h4 className="font-bold text-stone-950 text-base font-display">Looking Ahead</h4>
                <p className="text-xs text-stone-700">
                  Our journey is still developing. Some initiatives are already underway, while others remain part of our longer-term vision.
                </p>
                <p className="text-xs text-stone-700">
                  We do not claim that Harenna’s challenges have already been solved. Instead, we see an opportunity to learn from the landscape, work with communities, generate evidence through action, and gradually build a model that can contribute to the long-term future of Harenna, the Bale Mountains and the wider Genale Basin.
                </p>
              </div>

              <div className="p-4 bg-stone-900 text-stone-100 rounded-xl space-y-1 text-center font-display">
                <div className="text-sm font-semibold">From ancient landscape to living heritage.</div>
                <div className="text-base font-bold text-emerald-400">From heritage to action.</div>
                <div className="text-sm font-semibold">From local action to a greener future.</div>
              </div>
            </section>
          )}

          {/* Section: Who We Are */}
          {(activeTab === 'all' || activeTab === 'profile') && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-display font-bold text-lg border-b border-stone-200 pb-1">
                <span className="text-xs px-2 py-0.5 bg-emerald-100 rounded">SECTION 1</span>
                <span>WHO WE ARE</span>
              </div>
              <p>
                <strong>Harenna Forest Heritage</strong> is a locally led initiative emerging from the Harenna Forest landscape in Harenna Bulluq District, Bale Zone, Oromia, Ethiopia. It operates at the intersection of <em>environmental conservation, sustainable agriculture, nature-based tourism, youth participation, and conservation-linked green enterprise</em>.
              </p>
              <div className="p-4 bg-emerald-50/70 border-l-4 border-emerald-700 rounded-r-xl space-y-1">
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">Our Guiding Principle</span>
                <p className="text-base font-display font-semibold text-emerald-950 italic">
                  &ldquo;Think Globally. Act Locally.&rdquo;
                </p>
                <p className="text-xs text-emerald-800">
                  Global environmental ideas and climate commitments become meaningful only when translated into practical, tangible, and visible action at the local level.
                </p>
              </div>
            </section>
          )}

          {/* Section: Founder Profile & Leadership */}
          {(activeTab === 'all' || activeTab === 'profile') && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-display font-bold text-lg border-b border-stone-200 pb-1">
                <span className="text-xs px-2 py-0.5 bg-emerald-100 rounded">SECTION 2</span>
                <span>FOUNDER&apos;S BACKGROUND & COMMUNITY LEADERSHIP</span>
              </div>
              <p>
                The founder, <strong>Ebrahim Abdurazak</strong>, is a young innovator, environmental volunteer, and naturalist from the Harenna Forest area. His work combines formal training with deep practical commitment:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {HARENNA_INITIATIVE.founder.credentials.map((cred, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-stone-200 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{cred.title}</span>
                    </div>
                    <div className="text-xs font-medium text-stone-600">{cred.institution}</div>
                    <p className="text-xs text-stone-700 pt-1">{cred.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-600 italic">
                &ldquo;Rather than limiting our contribution to awareness, we have focused on testing and demonstrating locally appropriate conservation and livelihood practices on the ground.&rdquo;
              </p>
            </section>
          )}

          {/* Section: Practical Work */}
          {(activeTab === 'all' || activeTab === 'fieldwork') && (
            <section className="space-y-5">
              <div className="flex items-center gap-2 text-emerald-800 font-display font-bold text-lg border-b border-stone-200 pb-1">
                <span className="text-xs px-2 py-0.5 bg-emerald-100 rounded">SECTION 3 & 4</span>
                <span>SOIL, WATER & COFFEE AGROFORESTRY</span>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-stone-900">1. Rainwater Retention Trenches & Contour Bunding</h4>
                <p>
                  Rainwater runoff in the steep Bale slopes is slowed, retained, and used through carefully excavated contour trenches. Field tests show coffee trees in trenched zones remain vigorous and moisture-replete even into prolonged dry spells, reducing erosion and boosting organic topsoil.
                </p>
                <div className="p-3 bg-stone-100 border border-stone-300 rounded-lg text-xs space-y-1">
                  <div className="font-bold text-stone-900">The Practical Formula:</div>
                  <div className="font-mono text-emerald-900">
                    Healthy Soil + Better Water Management + Agroforestry + Improved Coffee Practices = Stronger Productivity + Sustainable Livelihoods + Reduced Pressure on Natural Forest
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-stone-900">2. Harenna Arabica Specialty Coffee</h4>
                <p>
                  High-grade forest-shade Arabica coffee established outside the protected natural forest provides the critical economic counterweight against illegal timber clearing and encroachment. Higher cup score and direct-trade linkage translates directly into forest preservation.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-stone-900">3. Cultural Beekeeping & Honey Enterprise</h4>
                <p>
                  Integrating traditional hollowed-log cultural beehives into coffee agroforestry alongside transitional modern box hives. Known locally as <em>ሀረና የማር ቤት / Bosonni Harennaa Soora Hormaataati</em>. Foraging across indigenous Schefflera, Syzygium, and coffee blooms yields medicinal grade forest honey without cutting trees.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-stone-900">4. Hora Hobe Eco-Lodge</h4>
                <p>
                  Documented site on the edge of the crater overlooking the Harenna Forest waterfall. Complete with municipal land survey and confirmation letter, poised to deliver community-governed ecotourism, naturalist trekking, and green youth jobs.
                </p>
              </div>
            </section>
          )}

          {/* Section: 6 Pillars of Collaboration */}
          {(activeTab === 'all' || activeTab === 'pillars') && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-display font-bold text-lg border-b border-stone-200 pb-1">
                <span className="text-xs px-2 py-0.5 bg-emerald-100 rounded">SECTION 5</span>
                <span>SIX PILLARS OF COLLABORATION WITH GECCI & GLOBAL PARTNERS</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {HARENNA_INITIATIVE.pillars.map((pillar) => (
                  <div key={pillar.number} className="p-4 bg-white border border-stone-200 rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-800 text-white text-xs font-bold flex items-center justify-center">
                        {pillar.number}
                      </span>
                      <h4 className="font-bold text-sm text-stone-950 font-display">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-normal">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {pillar.focusAreas.map((fa, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 bg-stone-100 text-stone-700 rounded border border-stone-200">
                          {fa}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Scientific Discoveries (Dasypeltis albigularis) */}
          {(activeTab === 'all' || activeTab === 'discoveries') && (
            <section className="space-y-4 p-5 bg-teal-50/60 rounded-2xl border border-teal-200">
              <div className="flex items-center gap-2 text-teal-950 font-display font-bold text-lg border-b border-teal-200 pb-2">
                <span className="text-xs px-2 py-0.5 bg-teal-200 text-teal-950 rounded font-sans font-bold">BIODIVERSITY FACT SHEET</span>
                <span>DISCOVERING HARENNA: ENDLESS MYSTERY OF BALE MOUNTAINS</span>
              </div>

              <div className="p-4 bg-teal-900 text-white rounded-xl space-y-2">
                <div className="text-xs uppercase tracking-wider text-teal-300 font-bold">
                  Field Message from Founder Ebrahim (EBRO):
                </div>
                <p className="text-sm font-display italic">
                  &ldquo;ሀረናን እና የሀረናን ተፈጥሮ እስከጥጉ ማወቅ አይቻልም ። ለማንኛውም በድጋሜ በልዩ መስህብ ብቅ ብዬልሀለሁ — The mystery of Bale mountains is endless!&rdquo;
                </p>
                <p className="text-xs text-teal-200">
                  &ldquo;It is impossible to fully comprehend Harenna and its nature to the end. The mystery of the Bale Mountains is truly endless.&rdquo;
                </p>
              </div>

              <div className="space-y-3 text-stone-800 text-sm">
                <p>
                  A new egg-eating snake species has been discovered in the <strong>Harenna Forest</strong>—one of the remaining large tracts of natural moist evergreen forest in the Horn of Africa—located in <strong>Bale Mountains National Park, Ethiopia</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 bg-white border border-teal-100 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-teal-800 uppercase">Species Identification</span>
                    <p className="text-xs text-stone-700">
                      <strong>Dasypeltis albigularis</strong> (White-throated egg-eater). Belongs to the African genus <em>Dasypeltis</em>, whose species feed exclusively on birds&apos; eggs.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white border border-teal-100 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-teal-800 uppercase">Specialized Anatomy</span>
                    <p className="text-xs text-stone-700">
                      Equipped with specialized hypapophyses (throat vertebrae spines) that crack eggshells after swallowing, cleanly regurgitating the crushed shell. Completely harmless to humans.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white border border-teal-100 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-teal-800 uppercase">Physical Morphology</span>
                    <p className="text-xs text-stone-700">
                      Distinctive white throat and belly, with pale bluish skin visible between its scales. Adult females reach approximately 92 cm in length.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white border border-teal-100 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-teal-800 uppercase">Habitat & Elevation</span>
                    <p className="text-xs text-stone-700">
                      Recorded in dense forest at <strong>1,500m to 1,700m asl</strong> within the understory of wild Arabica coffee plants (<em>Coffea arabica</em>), directly overlapping the Harenna Forest Heritage buffer project zone.
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-600">
                  <strong>Scientific Rigor:</strong> The formal scientific description was published following seven years of morphological and molecular genetic research by herpetologists Philipp Wagner and Tiutenko (reported via Phys.org).
                </div>
              </div>
            </section>
          )}

          {/* Section: Contact & Verification */}
          <section className="p-4 bg-stone-100 border border-stone-300 rounded-xl space-y-3 text-xs">
            <div className="font-bold text-sm text-stone-900">Official Contact & Inquiries</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-700">
              <div><strong>Founder:</strong> Ebrahim Abdurazak</div>
              <div><strong>Location:</strong> Harenna Bulluq, Bale, Ethiopia</div>
              <div><strong>Primary Email:</strong> seenahobea@gmail.com</div>
              <div><strong>Alternative Email:</strong> baleharenna@gmail.com</div>
              <div><strong>Phone / WhatsApp:</strong> +251 909 092 255</div>
              <div><strong>Target Partner:</strong> GECCI & Global Conservation Agencies</div>
            </div>
            <div className="pt-2 text-[11px] text-stone-500 border-t border-stone-200">
              Supporting documents available on request: Diploma in Plant Sciences (Agarfa), Tour Guide Certificate (Bale Mountains NP), Green Future Africa Phase II 2026 Certificate, Hora Hobe Land Map & Confirmation Letter.
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-stone-200 bg-stone-100 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full overflow-hidden bg-white border border-emerald-600 shrink-0">
              <img
                src={harennaLogo}
                alt="Logo"
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-stone-600 font-medium">Harenna Forest Heritage • Bale Mountains, Ethiopia</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg font-medium transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
