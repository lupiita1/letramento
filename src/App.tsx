import React, { useRef } from "react";
import {
  ArrowDown,
  CalendarDays,
  ExternalLink,
  Headphones,
  Palette,
} from "lucide-react";

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

type Book = {
  title: string;
  author: string;
  description: string;
  cover: string;
  amazonUrl: string;
};

const books: Book[] = [
  {
    title: "Um defeito de cor",
    author: "Ana Maria Gonçalves",
    description:
      "Livro que inspirou o samba enredo da Portela, no carnaval de 2024. A fascinante história de uma africana em busca do filho perdido que se tornou um clássico da literatura contemporânea. Um defeito de cor, de Ana Maria Gonçalves, é narrado de uma maneira original e pungente que prende a atenção da primeira à última página.",
    cover: asset("books/umDefeitoDeCor.jpg"),
    amazonUrl:
      "https://www.amazon.com.br/defeito-cor-Ana-Maria-Gon%C3%A7alves/dp/8501071757/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9._yeTfDloL2gaooChO3Xe14xe7u0_ooUB3Y6vFkke_fCZekxlAPrl9isMfrTu4pCNS-bC4rP_E2xkuCd5KlE3PJ1vJiicbCsa3XsnQpLAcmU.XFQ5IzoCUs47hdbAqoBchJdPEBKlEYo9MlBg61T9mls&dib_tag=se&keywords=Um+Defeito+de+Cor&qid=1777502437&sr=8-1",
  },
  {
    title: "Futuro ancestral",
    author: "Ailton Krenak",
    description:
      "Nesta nova coleção de textos, Ailton Krenak nos provoca com a radicalidade de seu pensamento insurgente, que demove o senso comum e invoca o maravilhamento.",
    cover: asset("books/futuroAncestral.jpg"),
    amazonUrl:
      "https://www.amazon.com.br/Futuro-ancestral-Ailton-Krenak/dp/6559211541/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=HY2UY8643LTW&dib=eyJ2IjoiMSJ9.4syftWkWYum9caFgyaPIrP7meFf3KryZgfTDqQo4XFxzxLikeaurtcOGue1XrfQpxzyqRhgRd4s2dDrUSqvE0rb2ewQ1ComATsnW_JLhcYdW8HT-9XNUsC2c3TRoe8k7FmAhSWLr7MQj5ac3jwhxdFw-_fW3jlOXhMPlQ4hed7h8PaOeURdjRLE4mlR8U85k7LvJjksZR1W7cr1Lis_HwBPPzEB8n6TbZkw4KoVAb5ABkTFpbDSddDzpw3oGsMYmqxKLEH_r9M_3qVXcmTRJ16w7K5djie4XXzIfpGVGAzw.wUTOkv8lHCXaO9FTLTR_IkMrxrCaovHEDMUR6gh6JvY&dib_tag=se&keywords=Futuro+Ancestral%22&qid=1777502566&sprefix=futuro+ancestral+%2Caps%2C302&sr=8-1",
  },
  {
    title: "Memórias da Plantação",
    author: "Grada Kilomba",
    description:
      "Memórias da Plantação é uma compilação de episódios cotidianos de racismo, escritos sob a forma de pequenas histórias psicanalíticas. Das políticas de espaço e exclusão às políticas do corpo e do cabelo, passando pelos insultos raciais, Grada Kilomba desmonta, de modo incisivo, a normalidade do racismo, expondo a violência e o trauma de se ser colocada/o como Outra/o.",
    cover: asset("books/memoriasDaPlantacao.jpg"),
    amazonUrl:
      "https://www.amazon.com.br/Mem%C3%B3rias-planta%C3%A7%C3%A3o-Epis%C3%B3dios-racismo-cotidiano/dp/8555910803/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3UQAE73JW5UG4&dib=eyJ2IjoiMSJ9._QwmVjwEcwZyHWfRQwnW9iwG2wSdzmJfcYCDnP-1Ssf5Tzw0Fn6IA97NdiWbp41xJsyyqznPfVappixmnBHuyLvT7erDdr-9Fbe5x0m6NX4h3SW2RIQwBKnvaZFQMtUcV30zJ2IfXtv9vO5P_Kx46GwHb3FqJTbb8pZFhTSL5W5s-DCq3231yuwICML9N-F8-ApEsGek5-6BlNixmVPiYCYnGe6VnXdAGG1r4lN7_2SG94icQly3Pdw8q-JVZQkB0FyxJ5NiTocmpi8g7b5YEDIALXpR9puh8FCv8dgNiCg.k5d6hNN4l6IcF2-XiHTSd_CnUwWpRcRx36W9Wen1rv0&dib_tag=se&keywords=Mem%C3%B3rias+da+Planta%C3%A7%C3%A3o&qid=1777502651&sprefix=mem%C3%B3rias+da+planta%C3%A7%C3%A3o%2Caps%2C276&sr=8-1",
  },
];

type Exhibition = {
  title: string;
  place: string;
  period: string;
  description: string;
};

type Artist = {
  name: string;
  description: string;
};

type Podcast = {
  title: string;
  description: string;
  url: string;
};

const exhibitions: Exhibition[] = [
  {
    title: "Mestre Didi",
    place: "Itaú Cultural, SP",
    period: "até julho de 2026",
    description:
      "Mostra focada na ancestralidade e na arte afro-brasileira, aproximando espiritualidade, memória e criação visual.",
  },
  {
    title: "Nossa Vida Bantu",
    place: "Museu de Arte do Rio - MAR",
    period: "até maio de 2026",
    description:
      "Exposição que narra memórias da cultura Bantu no Rio de Janeiro e amplia o olhar sobre presença, território e herança africana.",
  },
  {
    title: "Bienal Black Brazil Art",
    place: "Recife",
    period: "março e abril de 2026",
    description:
      "A 4ª edição destaca a produção contemporânea negra e apresenta caminhos atuais da cena artística brasileira.",
  },
];

const artists: Artist[] = [
  {
    name: "Rosana Paulino",
    description:
      "Artista que utiliza costura, tecidos e imagens para discutir a condição da mulher negra, memória, corpo e a biologia do racismo.",
  },
  {
    name: "Maxwell Alexandre",
    description:
      "Artista carioca que retrata a vida contemporânea nas favelas com uma estética de pintura de altar, elevando o cotidiano ao sagrado.",
  },
];

const podcasts: Podcast[] = [
  {
    title: "Projeto Querino",
    description:
      "Podcast narrativo essencial para entender a formação do Brasil a partir de uma perspectiva negra e histórica.",
    url: "https://projetoquerino.com.br/",
  },
  {
    title: "Mekukradjá",
    description:
      "Podcast e projeto do Itaú Cultural voltado a vozes indígenas contemporâneas, ancestralidade, cultura e futuro.",
    url: "https://open.spotify.com/show/0Hs9a3rZxdlS6S2Qbvp9r9",
  },
];

export default function App() {
  const introRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const historiasRef = useRef<HTMLElement | null>(null);
  const vivenciaRef = useRef<HTMLElement | null>(null);
  const podcastsRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = <T extends HTMLElement>(
    sectionRef: React.RefObject<T | null>
  ) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden scroll-smooth">
      <section
        ref={introRef}
        className="relative min-h-screen w-full overflow-hidden bg-slate-950"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={asset("videos/vecteezy_closeup-of-a-woman-s-eyes_2020827.mp4")}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-[#061b2d]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061b2d]/30 via-[#061b2d]/10 to-[#061b2d]/70" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10 lg:justify-end lg:px-20">
          <div className="w-full max-w-[595px] border border-white/70 px-7 py-8 backdrop-blur-[1px] sm:px-9 sm:py-9 lg:min-h-[560px] lg:px-8 lg:py-8">
            <p className="mb-10 text-sm font-light uppercase tracking-[0.08em] text-white/90 sm:text-lg">
              Universidade Metodista de São Paulo
            </p>

            <h1 className="max-w-[560px] text-6xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-7xl lg:text-[92px]">
              Letramento
              <br />
              Étnico Racial
            </h1>

            <div className="mt-36 flex items-end justify-between gap-8 sm:mt-40 lg:mt-56">
              <p className="text-lg font-extrabold uppercase tracking-[0.04em] text-white sm:text-xl">
                Projeto de Extensão
              </p>

              <button
                type="button"
                onClick={() => scrollToSection(menuRef)}
                className="group flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-white transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80"
                aria-label="Rolar para o conteúdo"
              >
                <ArrowDown className="h-20 w-20 stroke-[1.2] transition group-hover:translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={menuRef}
        className="relative min-h-screen bg-[#061b2d] px-6 py-24 text-white sm:px-10 lg:px-20"
      >
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/30 to-transparent" />

        <div className="relative mx-auto grid min-h-[70vh] max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-white/60">
              Continuidade
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Um espaço de escuta, formação e consciência.
            </h2>
          </div>

          <div className="space-y-10">
            <div className="space-y-6 text-lg leading-relaxed text-white/78 sm:text-xl">
              <p>
                Letrar-se é reeducar o olhar para enxergar as estruturas que nos cercam.
              </p>
              <p>
                É entender que a valorização da cultura afro-brasileira e indígena não deve ser um evento isolado no calendário, mas uma prática constante de reconhecimento, respeito e reconstrução de identidades.
              </p>
            </div>

            <nav aria-label="Menu de navegação do projeto" className="grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => scrollToSection(historiasRef)}
                className="group border border-white/30 bg-white/[0.03] p-6 text-left transition hover:border-white hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-white/50">
                  01
                </span>
                <span className="block text-2xl font-black leading-tight tracking-[-0.04em] text-white">
                  Histórias que Conectam
                </span>
                <span className="mt-3 block text-sm font-medium leading-relaxed text-white/60">
                  Curadoria Literária e Narrativa
                </span>
                <span className="mt-8 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white/70 transition group-hover:text-white">
                  acessar seção
                  <ArrowDown className="h-5 w-5 transition group-hover:translate-y-1" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection(vivenciaRef)}
                className="group border border-white/30 bg-white/[0.03] p-6 text-left transition hover:border-white hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-white/50">
                  02
                </span>
                <span className="block text-2xl font-black leading-tight tracking-[-0.04em] text-white">
                  Vivência e Repertório
                </span>
                <span className="mt-3 block text-sm font-medium leading-relaxed text-white/60">
                  Experiências e Arte Contemporânea
                </span>
                <span className="mt-8 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white/70 transition group-hover:text-white">
                  acessar seção
                  <ArrowDown className="h-5 w-5 transition group-hover:translate-y-1" />
                </span>
              </button>
            </nav>
          </div>
        </div>
      </section>

      <section
        ref={historiasRef}
        className="relative min-h-screen bg-[#071f35] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-20"
      >
        <div className="mx-auto grid min-h-[46vh] max-w-6xl items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="border-l border-white/40 pl-6">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-white/50">
              01 / Curadoria Literária e Narrativa
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Histórias que Conectam
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-white/75 sm:text-xl">
            <p>
              A literatura abre caminhos para reconhecer memórias, vozes e trajetórias que muitas vezes foram silenciadas.
            </p>
            <p>
              Nesta etapa, a curadoria literária aproxima obras, autores e narrativas que ajudam a ampliar o repertório sobre identidade, ancestralidade, pertencimento e diversidade étnico-racial.
            </p>
            <p>
              A proposta é criar conexões entre leitura, escuta e reflexão, permitindo que cada história seja também uma forma de compreender o mundo e transformar a maneira como nos relacionamos com ele.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-white/25 pt-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-white/50">
                Livros sugeridos
              </p>
              <h3 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Obras para ampliar o repertório
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              Clique em uma obra para acessar a página de compra.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <article
                key={book.title}
                className="group overflow-hidden border border-white/20 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/60 hover:bg-white/[0.06]"
              >
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-white/70"
                  aria-label={`Comprar ${book.title} na Amazon`}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white/10">
                    <img
                      src={book.cover}
                      alt={`Capa do livro ${book.title}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-4 p-5">
                    <div>
                      <h4 className="text-2xl font-black leading-tight tracking-[-0.04em] text-white">
                        {book.title}
                      </h4>
                      <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-white/45">
                        {book.author}
                      </p>
                    </div>

                    <p className="text-base leading-relaxed text-white/65">
                      {book.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white/75 transition group-hover:text-white">
                      Ver na Amazon
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={vivenciaRef}
        className="relative min-h-screen bg-[#082941] px-6 py-20 text-white sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid min-h-[52vh] items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border-l border-white/40 pl-6">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-white/50">
                02 / Experiências e Arte Contemporânea
              </p>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Vivência e Repertório
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-white/75 sm:text-xl">
              <p>
                Esta seção mostra que a cultura é viva: ela acontece agora, ocupa museus, ruas, vozes, imagens, podcasts e experiências coletivas.
              </p>
              <p>
                Aqui reunimos exposições, artistas visuais e produções sonoras que ajudam a ampliar o repertório sobre ancestralidade, identidade, território, corpo, memória e arte contemporânea.
              </p>

              <button
                type="button"
                onClick={() => scrollToSection(podcastsRef)}
                className="group inline-flex items-center gap-3 border border-white/30 px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white/75 transition hover:border-white hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                Ir para podcasts
                <ArrowDown className="h-5 w-5 transition group-hover:translate-y-1" />
              </button>
            </div>
          </div>

          <div className="border-t border-white/25 pt-8">
            <div className="mb-8 flex items-center gap-3">
              <CalendarDays className="h-6 w-6 text-white/70" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/50">
                  Calendário 2026
                </p>
                <h3 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Exposições atuais
                </h3>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {exhibitions.map((exhibition) => (
                <article
                  key={exhibition.title}
                  className="border border-white/20 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/60 hover:bg-white/[0.06]"
                >
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                    {exhibition.period}
                  </p>
                  <h4 className="text-2xl font-black leading-tight tracking-[-0.04em]">
                    {exhibition.title}
                  </h4>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white/45">
                    {exhibition.place}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-white/65">
                    {exhibition.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="border-t border-white/25 pt-8">
              <div className="mb-8 flex items-center gap-3">
                <Palette className="h-6 w-6 text-white/70" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/50">
                    Cena visual
                  </p>
                  <h3 className="text-3xl font-black tracking-[-0.04em]">
                    Artistas para conhecer
                  </h3>
                </div>
              </div>

              <div className="space-y-5">
                {artists.map((artist) => (
                  <article
                    key={artist.name}
                    className="border border-white/20 bg-white/[0.03] p-6 transition hover:border-white/60 hover:bg-white/[0.06]"
                  >
                    <h4 className="text-2xl font-black tracking-[-0.04em]">
                      {artist.name}
                    </h4>
                    <p className="mt-4 text-base leading-relaxed text-white/65">
                      {artist.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div ref={podcastsRef} className="scroll-mt-10 border-t border-white/25 pt-8">
              <div className="mb-8 flex items-center gap-3">
                <Headphones className="h-6 w-6 text-white/70" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/50">
                    Escuta e narrativa
                  </p>
                  <h3 className="text-3xl font-black tracking-[-0.04em]">
                    Podcasts de repertório
                  </h3>
                </div>
              </div>

              <div className="space-y-5">
                {podcasts.map((podcast) => (
                  <article
                    key={podcast.title}
                    className="group border border-white/20 bg-white/[0.03] transition hover:border-white/60 hover:bg-white/[0.06]"
                  >
                    <a
                      href={podcast.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block p-6 focus:outline-none focus:ring-2 focus:ring-white/70"
                      aria-label={`Acessar ${podcast.title}`}
                    >
                      <h4 className="text-2xl font-black tracking-[-0.04em]">
                        {podcast.title}
                      </h4>
                      <p className="mt-4 text-base leading-relaxed text-white/65">
                        {podcast.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white/75 transition group-hover:text-white">
                        Acessar podcast
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}