(this["webpackJsonpreact-website-mette-1.0"] =
  this["webpackJsonpreact-website-mette-1.0"] || []).push([
  [0],
  {
    101: function (e, t, a) {},
    111: function (e, t, a) {},
    118: function (e, t, a) {},
    120: function (e, t, a) {},
    121: function (e, t, a) {},
    124: function (e, t, a) {},
    125: function (e, t, a) {},
    126: function (e, t, a) {},
    157: function (e, t, a) {},
    158: function (e, t, a) {},
    211: function (e, t, a) {},
    212: function (e, t, a) {},
    213: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        i = a.n(n),
        s = a(102),
        c = a.n(s),
        r = a(12),
        l = a(36),
        d = a(2),
        o = a.p + "static/media/MetteLogga.46a9eb48.png",
        j = (a(111), a(0));
      a(117), a(118);
      var m,
        b,
        h,
        p,
        x,
        g,
        v,
        O = function () {
          var e = Object(n.useState)(!1),
            t = Object(l.a)(e, 2),
            a = t[0],
            i = t[1],
            s = Object(n.useState)(!0),
            c = Object(l.a)(s, 2),
            r = (c[0], c[1]),
            m = Object(n.useState)(!1),
            b = Object(l.a)(m, 2),
            h = b[0],
            p = b[1],
            x = function () {
              return i(!1);
            };
          return (
            window.addEventListener("resize", function () {
              window.innerWidth <= 960 ? r(!1) : r(!0);
            }),
            window.addEventListener("scroll", function () {
              window.scrollY >= 80 ? p(!0) : p(!1);
            }),
            Object(j.jsx)(j.Fragment, {
              children: Object(j.jsx)("nav", {
                className: h ? "navbar active" : "navbar",
                children: Object(j.jsxs)("div", {
                  className: "navbar-container",
                  children: [
                    Object(j.jsxs)(d.b, {
                      to: "/",
                      className: "navbar-logo",
                      onClick: x,
                      children: [
                        Object(j.jsx)("img", { src: o, height: 35, width: 35 }),
                        Object(j.jsx)("div", {
                          className: "navText",
                          children: "METTE",
                        }),
                      ],
                    }),
                    Object(j.jsx)("div", {
                      className: "menu-icon",
                      onClick: function () {
                        return i(!a);
                      },
                      children: Object(j.jsx)("i", {
                        className: a ? "fa fa-times" : "fa fa-bars",
                        "aria-hidden": "true",
                      }),
                    }),
                    Object(j.jsxs)("ul", {
                      className: a ? "nav-menu active" : "nav-menu",
                      children: [
                        Object(j.jsx)("li", {
                          className: "nav-item",
                          children: Object(j.jsx)(d.b, {
                            to: "/",
                            className: "nav-links",
                            onClick: x,
                            children: Object(j.jsx)("p", {
                              className: "navText",
                              children: "Hem",
                            }),
                          }),
                        }),
                        Object(j.jsx)("li", {
                          className: "nav-item",
                          children: Object(j.jsx)(d.b, {
                            to: "/mette21-22",
                            className: "nav-links",
                            onClick: x,
                            children: Object(j.jsx)("p", {
                              className: "navText",
                              children: "Mette 22/23",
                            }),
                          }),
                        }),
                        Object(j.jsx)("li", {
                          className: "nav-item",
                          children: Object(j.jsx)(d.b, {
                            to: "/kontakt",
                            className: "nav-links",
                            onClick: x,
                            children: Object(j.jsx)("p", {
                              className: "navText",
                              children: "Kontakt",
                            }),
                          }),
                        }),
                        Object(j.jsx)("li", {
                          className: "nav-item",
                          children: Object(j.jsx)("a", {
                            href: "https://www.instagram.com/mettemedbandana/",
                            className: "nav-links",
                            onClick: x,
                            style: { fontSize: "25px" },
                            children: Object(j.jsx)("i", {
                              className: "fab fa-instagram",
                              "aria-hidden": "true",
                            }),
                          }),
                        }),
                        Object(j.jsx)("li", {
                          className: "nav-item",
                          children: Object(j.jsx)("a", {
                            href: "https://www.facebook.com/MTMette/",
                            className: "nav-links",
                            onClick: x,
                            style: { fontSize: "25px" },
                            children: Object(j.jsx)("i", {
                              className: "fab fa-facebook-square",
                              "aria-hidden": "true",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        k = a(4),
        f = a(29),
        u = a(6),
        N = a(7),
        M = N.a.div(
          m ||
            (m = Object(u.a)([
              '\n  padding: 40px 30px;\n  margin: center;\n  //background: radial-gradient(circle, rgba(92, 39, 251, 1) 0%, rgba(112, 71, 247, 1) 100%);\n  background: #171717;\n  font-family: "Lora", serif; \n',
            ]))
        ),
        T = N.a.div(
          b ||
            (b = Object(u.a)([
              "\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 800px;\n    margin: 0 auto;\n    align-items: center;\n",
            ]))
        ),
        w = N.a.div(
          h ||
            (h = Object(u.a)([
              '\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  margin-left: 60px;\n\n  p {\n    font-size: 14px;\n    color: #fff;\n    font-family: "Lora", serif;\n    line-height: 150%;\n  }\n',
            ]))
        ),
        y = N.a.div(
          p ||
            (p = Object(u.a)([
              "\n    display: grid;\n    // grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-template-columns: repeat(4, minmax(250px, 1fr));\n    grid-gap: 20px;\n    justify-content: center;\n\n     @media (max-width: 960px) {\n         grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n     }\n",
            ]))
        ),
        E = N.a.a(
          x ||
            (x = Object(u.a)([
              '\n  color: #fff;\n  margin-bottom: 20px;\n  font-size: 18px;\n  text-decoration: none;\n  font-family: "Lora", serif;\n\n  &:hover {\n    color: #ff9c00;\n    transition: 200ms ease-in;\n  }\n',
            ]))
        ),
        S = N.a.div(
          g ||
            (g = Object(u.a)([
              '\n  font-size: 24px;\n  color: #fff;\n  margin-bottom: 30px;\n  font-family: "Roboto", sans-serif;\n  font-weight: bold;\n',
            ]))
        );
      function I(e) {
        var t = e.children,
          a = Object(f.a)(e, ["children"]);
        return Object(j.jsx)(
          M,
          Object(r.a)(Object(r.a)({}, a), {}, { children: t })
        );
      }
      (I.Wrapper = function (e) {
        var t = e.children,
          a = Object(f.a)(e, ["children"]);
        return Object(j.jsx)(
          T,
          Object(r.a)(Object(r.a)({}, a), {}, { children: t })
        );
      }),
        (I.Row = function (e) {
          var t = e.children,
            a = Object(f.a)(e, ["children"]);
          return Object(j.jsx)(
            y,
            Object(r.a)(Object(r.a)({}, a), {}, { children: t })
          );
        }),
        (I.Column = function (e) {
          var t = e.children,
            a = Object(f.a)(e, ["children"]);
          return Object(j.jsx)(
            w,
            Object(r.a)(Object(r.a)({}, a), {}, { children: t })
          );
        }),
        (I.Link = function (e) {
          var t = e.children,
            a = Object(f.a)(e, ["children"]);
          return Object(j.jsx)(
            E,
            Object(r.a)(Object(r.a)({}, a), {}, { children: t })
          );
        }),
        (I.Title = function (e) {
          var t = e.children,
            a = Object(f.a)(e, ["children"]);
          return Object(j.jsx)(
            S,
            Object(r.a)(Object(r.a)({}, a), {}, { children: t })
          );
        });
      var J = N.a.i(
        v || (v = Object(u.a)(["\nfont-size: 17px;\nmargin-right: 14px;\n"]))
      );
      function L(e) {
        var t = e.className;
        return Object(j.jsx)(J, { className: t });
      }
      function A() {
        return Object(j.jsx)(I, {
          children: Object(j.jsx)(I.Wrapper, {
            children: Object(j.jsxs)(I.Row, {
              children: [
                Object(j.jsx)(I.Column, {
                  children: Object(j.jsx)("img", {
                    src: o,
                    height: 160,
                    width: 160,
                  }),
                }),
                Object(j.jsxs)(I.Column, {
                  children: [
                    Object(j.jsx)(I.Title, { children: "Hitta oss" }),
                    Object(j.jsx)("p", {
                      children:
                        "Link\xf6pings Universitet p\xe5 Campus Norrk\xf6ping",
                    }),
                    Object(j.jsx)("p", { children: "Bredgatan 34" }),
                    Object(j.jsx)("p", { children: "602 21 Norrk\xf6ping " }),
                  ],
                }),
                Object(j.jsxs)(I.Column, {
                  children: [
                    Object(j.jsx)(I.Title, { children: "Om oss" }),
                    Object(j.jsx)(d.b, {
                      to: "/mette22-23",
                      className: "footLink2",
                      children: "Mette 22-23",
                    }),
                    Object(j.jsx)(d.b, {
                      to: "/kontakt",
                      className: "footLink2",
                      children: "Kontakt",
                    }),
                  ],
                }),
                Object(j.jsxs)(I.Column, {
                  children: [
                    Object(j.jsx)(I.Title, { children: "F\xf6lj oss" }),
                    Object(j.jsxs)(I.Link, {
                      href: "https://www.facebook.com/MTMette/",
                      children: [
                        Object(j.jsx)(L, {
                          className: "fab fa-facebook-square",
                        }),
                        "Facebook",
                      ],
                    }),
                    Object(j.jsxs)(I.Link, {
                      href: "https://www.instagram.com/mettemedbandana/",
                      children: [
                        Object(j.jsx)(L, { className: "fab fa-instagram" }),
                        "Instagram",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      a(43), a(120);
      var P,
        D,
        V,
        G,
        W = {
          heading: "METTE - Medieteknikprogrammets tjejf\xf6rening",
          paragraphOne:
            "Hej! Det \xe4r vi som \xe4r Medieteknikprogrammets tjejf\xf6rening Mette! Vi \xe4r en f\xf6rening f\xf6r alla som identifierar sig som tjej eller icke-bin\xe4r och studerar Medieteknik p\xe5 Link\xf6pings Universitet, campus Norrk\xf6ping. Vi jobbar f\xf6r att fr\xe4mja gemenskapen mellan alla tjejer och icke-bin\xe4ra p\xe5 MT-programmet. Vi anordnar olika roliga aktiviteter, vissa \xe4r enbart f\xf6r tjejer och icke-bin\xe4ra medan andra aktiviteter \xe4r till f\xf6r alla som pluggar MT.",
          image: o,
          reverse: !1,
          delay: 100,
        },
        C =
          (a.p,
          a(121),
          N.a.section(
            P ||
              (P = Object(u.a)([
                "\n    width: 100%;\n    length: 100%;\n    padding: 3rem 0rem;\n    ",
              ]))
          )),
        R = N.a.div(
          D ||
            (D = Object(u.a)([
              "\n    padding: 3rem calc((100vw - 1300px) / 2);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    @media screen and (max-width: 768px) {\n        grid-template-columns: 1fr;\n    }\n",
            ]))
        ),
        F = N.a.div(
          V ||
            (V = Object(u.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  line-height: 1.4;\n  padding: 1rem 2rem;\n\n  h1 {\n    margin-bottom: 1rem;\n    font-size: clamp(1.5rem, 6vw, 2rem);\n  }\n\n  p {\n    margin-bottom: 2rem;\n    font-size: 13pt;\n    line-height: 150%;\n  }\n",
            ]))
        ),
        K = N.a.div(
          G ||
            (G = Object(u.a)([
              "\n    padding: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    image {\n        width: height;\n        height: 100%;\n        object-fit: cover; \n    }\n",
            ]))
        ),
        z = function (e) {
          var t = e.heading,
            a = (e.paragraphOne, e.paragraphTwo, e.reverse),
            n = e.image;
          return Object(j.jsx)(C, {
            children: Object(j.jsxs)(R, {
              children: [
                Object(j.jsxs)(F, {
                  children: [
                    Object(j.jsx)("h1", { children: t }),
                    Object(j.jsx)("p", {
                      className: "descriptionText",
                      children:
                        "Hej! Det \xe4r vi som \xe4r Medieteknikprogrammets tjejf\xf6rening Mette! Vi \xe4r en f\xf6rening f\xf6r alla som identifierar sig som tjej eller icke-bin\xe4r och studerar Medieteknik p\xe5 Link\xf6pings Universitet, campus Norrk\xf6ping. Vi jobbar f\xf6r att fr\xe4mja gemenskapen mellan alla tjejer och icke-bin\xe4ra p\xe5 MT-programmet. Vi anordnar olika roliga aktiviteter, vissa \xe4r enbart f\xf6r tjejer och icke-bin\xe4ra medan andra aktiviteter \xe4r till f\xf6r alla som pluggar MT.",
                    }),
                    Object(j.jsxs)("p", {
                      className: "descriptionText",
                      children: [
                        "Du vill inte missa det skojiga vi ska ha den h\xe4r kommande \xe5ret s\xe5 f\xf6lj oss p\xe5",
                        Object(j.jsxs)("a", {
                          className: "link3",
                          href: "https://www.facebook.com/groups/36669645279",
                          children: [" ", "Facebook", " "],
                        }),
                        "och",
                        Object(j.jsxs)("a", {
                          className: "link3",
                          href: "https://www.instagram.com/mettemedbandana/",
                          children: [" ", "Instagram", " "],
                        }),
                        "f\xf6r att h\xe5lla dig uppdaterad om v\xe5ra kommande aktiviteter och event s\xe5 ses vi d\xe4r!",
                      ],
                    }),
                  ],
                }),
                Object(j.jsx)(K, {
                  reverse: a,
                  children: Object(j.jsx)("img", {
                    src: n,
                    height: 400,
                    width: 400,
                    alt: "home",
                  }),
                }),
              ],
            }),
          });
        },
        H = a(35),
        X = a.p + "static/media/profil-1.bb3430fc.JPG",
        q = a.p + "static/media/profil-2.de9897d4.JPG",
        B = a.p + "static/media/profil-4.245e5ce9.JPG",
        Z = a.p + "static/media/profil-5.454b041b.JPG",
        U = a.p + "static/media/profil-7.8059afd3.JPG";
      var Q = function () {
        var e = Object(H.useScrollTo)();
        return Object(j.jsxs)("div", {
          className: "Section",
          children: [
            Object(j.jsxs)("div", {
              className: "hero-container",
              children: [
                Object(j.jsxs)("div", {
                  className: "arrow",
                  style: { cursor: "pointer" },
                  children: [
                    Object(j.jsx)("span", {
                      onClick: function () {
                        return e({
                          top: window.innerHeight,
                          left: 0,
                          behavior: "smooth",
                        });
                      },
                    }),
                    Object(j.jsx)("span", {
                      onClick: function () {
                        return e({
                          top: window.innerHeight,
                          left: 0,
                          behavior: "smooth",
                        });
                      },
                    }),
                  ],
                }),
                " ",
              ],
            }),
            " ",
          ],
        });
      };
      var Y = function () {
        return Object(j.jsx)(j.Fragment, { children: Object(j.jsx)(Q, {}) });
      };
      a(124), a(54), a.p;
      var _ = a.p + "static/media/profil-3.8a6e18b2.JPG",
        $ = a.p + "static/media/profil-6.96494ad5.JPG",
        ee = a.p + "static/media/s\xf6k_mette.793da6cf.png",
        te = a.p + "static/media/s\xf6kMette.e01bd19b.jpg",
        ae = a.p + "static/media/Tjejfika.ad9e1178.png",
        ne = a.p + "static/media/styrelsen.5913ebff.jpg",
        ie = a.p + "static/media/Ovveinvigning.ce197965.jpg",
        se = a.p + "static/media/rosaVeckan1.4a460274.png",
        ce = a.p + "static/media/gaia_event.1fe351ef.jpg",
        re = a.p + "static/media/inv1.749a7464.JPG",
        le = a.p + "static/media/Spons.137d9732.png",
        de = a.p + "static/media/metteM\xe4rke.b761e8c2.png",
        oe = a.p + "static/media/Damsittning.7c381bb9.png",
        je = [
          {
            post: "Ordf\xf6rande",
            img: X,
            name: "Ia Bruno",
            class: "MT3",
            city: "T\xe4by (Stockholm)",
            text: "N\xe4r jag inte pluggar kan man se mig hemma framf\xf6r datorn, mitt i ett sp\xe4nnande br\xe4dspel eller p\xe5 tornet med en god \xf6l.",
          },
          {
            post: "Sekreterare",
            img: q,
            name: "Mathilda Welander",
            class: "MT3",
            city: "V\xe4xjo",
            text: "P\xe5 fritiden gillar jag att ta det lugnt, dricka vin med mina v\xe4nner och g\xe5 p\xe5 n\xe5got spinningpass d\xe5 och d\xe5. ",
          },
          {
            post: "Kass\xf6r",
            img: _,
            name: "Jessie Chow ",
            class: "MT4",
            city: "Bor\xe5s \u2602",
            text: "N\xe4r jag inte pluggar gillar jag att spela spel, g\xf6ra n\xe5n random kod-tutorial, kolla serier eller baka :)",
          },
          {
            post: "Spons & kommunikation",
            img: B,
            name: "Lovisa Svensson",
            class: "MT2",
            city: "Oxel\xf6sund",
            text: "Jag tog mig den otroligt l\xe5nga v\xe4gen fr\xe5n Oxel\xf6sund till MT och g\xe5r nu mitt andra \xe5r h\xe4r. F\xf6rutom plugg gillar jag memes, spel och tr\xe4ning.",
          },
          {
            post: "Tryck & PR",
            img: Z,
            name: "Johanna Folde",
            class: "MT4",
            city: "\xd6rebro",
            text: "N\xe4r jag \xe4r ledig tycker jag om att f\xf6rdriva tiden med promenader, filmer och s\xe5 klart lite tecknande. ",
          },
          {
            post: "Webbansvarig",
            img: $,
            name: "Cindy Khuong",
            class: "MT3",
            city: "Eskilstuna",
            text: "F\xf6rutom att plugga s\xe5 hittar ni nog mig hemma och kolla serier och d\xe5 ska sushi vara med i bilden. Try to change my mind!",
          },
          {
            post: "Eventansvarig",
            img: U,
            name: "Tilda Hylander",
            class: "MT4",
            city: "Norrk\xf6ping",
            text: "P\xe5 fritiden gillar jag att umg\xe5s med v\xe4nner, klappa min katt eller ta det lugnt och l\xe4gga pussel. ",
          },
          {
            post: "Mettes maskot",
            img: ee,
            name: "Metteorita",
            class: "Classified",
            city: "Classified",
            text: "Jag heter Meteorita och \xe4r Mettes maskot. Med mina glajjor \xe4r jag den coolaste i Mette. Alltid.",
          },
        ],
        me = [
          {
            post: "Ordf\xf6rande",
            text: "Har du generella fr\xe5gor om vad som helst som ang\xe5r f\xf6reningen, kontakta v\xe5r ordf\xf6rande Salma Gabot p\xe5: ",
            email: "mailto:Mettestyrelsen@medieteknik.nu",
            icon: "fas fa-paper-plane",
            linkText: "Mettestyrelsen@medieteknik.nu",
          },
          {
            post: "Kass\xf6r",
            text: "Undrar du \xf6ver n\xe5got som ang\xe5r Mettes ekonomi, kan du kontakta v\xe5r kass\xf6r Cornelia Holm p\xe5: ",
            email: "mailto:Mettekassor@medieteknik.nu",
            icon: "fas fa-paper-plane",
            linkText: "Mettekassor@medieteknik.nu",
          },
          {
            post: "Event",
            text: "Har du fr\xe5gor ang\xe5ende v\xe5ra kommande event och aktiviteter? Kontakta Rebecka Sahlin p\xe5: ",
            email: "mailto:Metteevent@medieteknik.nu",
            icon: "fas fa-paper-plane",
            linkText: "Metteevent@medieteknik.nu",
          },
        ],
        be = [
          {
            post: "F\xf6retagsansvarig",
            text: "Vill ditt f\xf6retag diskutera om samarbeten eller sponsra Mette? Kontakta Tove T\xe5ngring: ",
            email: "mailto:Samarbete.mette@medieteknik.nu",
            icon: "fas fa-paper-plane",
            linkText: "Samarbete.mette@medieteknik.nu",
          },
          {
            post: "Tryck och PR",
            text: "Fr\xe5gor ang\xe5ende Mettes allm\xe4nna marknadsf\xf6ring, kontakta Jenny Cleasson p\xe5: ",
            email: "mailto:Mettepr@medieteknik.nu",
            icon: "fas fa-paper-plane",
            linkText: "Mettepr@medieteknik.nu",
          },
          {
            post: "Webbansvarig",
            text: "Hittar du n\xe5got konstigt eller har du fr\xe5gor om hemsidans inneh\xe5ll, kontakta Emma Bjelk\xe5a p\xe5: ",
            email: "mailto:Mettewebb@medieteknik.nu",
            icon: "fas fa-paper-plane",
            linkText: "Mettewebb@medieteknik.nu",
          },
        ],
        he = [
          {
            post: "Sekreterare",
            text: "Har du fr\xe5gor till sekreteraren, kontakta Matilda Welander p\xe5: ",
            email: "mailto:Sekreterare.mette@medieteknik.nu",
            icon: "fas fa-paper-plane",
            linkText: "Sekreterare.mette@medieteknik.nu",
          },
        ],
        pe = [
          { img: ae, title: "TJEJFIKA", link: "/Tjejfika" },
          { img: ie, title: "OVVEINVIGNINGEN", link: "/Ovveinvigning" },
          { img: se, title: "ROSA VECKAN", link: "/RosaVecka" },
          { img: ce, title: "TJEJKV\xc4LL MED GAIA", link: "/GaiaEvent" },
          { img: oe, title: "DAMSITTNINGEN", link: "/Damsittningen" },
          { img: le, title: "SPONSORER", link: "/Spons" },
          { img: de, title: "METTES M\xc4RKEN", link: "/M\xe4rken" },
        ];
      a.p;
      var xe = function () {
        return Object(j.jsxs)("div", {
          className: "info_text",
          children: [
            Object(j.jsx)("p", {
              className: "feedText",
              children:
                "Varje \xe5r h\xe5ller Mette i olika event som du bland annat kan l\xe4sa mer om h\xe4r nedan! Vi planerar tillsammans traditionella event som MTs ovveinvigning, men det \xe4r alltid lika roligt och sp\xe4nnande att f\xe5 jobba med nya projekt. Ut\xf6ver v\xe5ra event, kan du \xe4ven hitta \xf6vrig information kring Mette.",
            }),
            Object(j.jsx)("p", {
              className: "feedText",
              style: { marginTop: 20 },
              children:
                "Klicka p\xe5 bilderna nedan f\xf6r att f\xe5 veta mer!",
            }),
            Object(j.jsxs)("div", {
              className: "container_image-feed",
              children: [
                pe.map(function (e, t) {
                  return Object(j.jsxs)(
                    "div",
                    {
                      className: "container_image",
                      children: [
                        Object(j.jsx)("img", {
                          src: e.img,
                          alt: "eventTjejfika",
                        }),
                        Object(j.jsx)(d.b, {
                          to: e.link,
                          children: Object(j.jsx)("div", {
                            className: "overlay_image-feed",
                            children: Object(j.jsx)("div", {
                              className: "text_image-feed",
                              children: e.title,
                            }),
                          }),
                        }),
                      ],
                    },
                    t
                  );
                }),
                Object(j.jsxs)("div", {
                  className: "container_image",
                  children: [
                    Object(j.jsx)("img", { src: te, alt: "applyToMette" }),
                    Object(j.jsx)(d.b, {
                      to: "/S\xf6kMette",
                      children: Object(j.jsxs)("div", {
                        className: "overlay_image-feed",
                        children: [
                          Object(j.jsx)("div", {
                            className: "text_image-feed_row1",
                            children: "VILL DU S\xd6KA",
                          }),
                          Object(j.jsx)("div", {
                            className: "text_image-feed_row2",
                            children: "TILL METTE?",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(j.jsxs)("div", {
                  className: "container_image",
                  children: [
                    Object(j.jsx)("img", { src: ne, alt: "MTstyrelsen" }),
                    Object(j.jsx)("a", {
                      href: "https://medieteknik.nu/",
                      children: Object(j.jsx)("div", {
                        className: "overlay_image-feed",
                        children: Object(j.jsx)("div", {
                          className: "text_image-feed",
                          children: "MT-STYRELSEN",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            " ",
          ],
        });
      };
      a(125);
      var ge = function () {
        var e = Object(H.useScrollTo)();
        return Object(j.jsxs)("div", {
          className: "kontakt-container",
          children: [
            Object(j.jsxs)("div", {
              className: "header-wrap",
              children: [
                Object(j.jsx)("h1", { children: "Kontakt" }),
                Object(j.jsx)("p", {
                  className: "descriptionText",
                  children: "Tveka inte f\xf6r att kontakta oss!",
                }),
                Object(j.jsxs)("div", {
                  className: "arrow",
                  style: { cursor: "pointer" },
                  children: [
                    Object(j.jsx)("span", {
                      onClick: function () {
                        return e({
                          top: window.innerHeight,
                          left: 0,
                          behavior: "smooth",
                        });
                      },
                    }),
                    Object(j.jsx)("span", {
                      onClick: function () {
                        return e({
                          top: window.innerHeight,
                          left: 0,
                          behavior: "smooth",
                        });
                      },
                    }),
                  ],
                }),
              ],
            }),
            Object(j.jsxs)("div", {
              className: "head",
              children: [
                Object(j.jsx)("div", {
                  className: "pageTitle",
                  children: "Kontakta oss!",
                }),
                Object(j.jsx)("div", {
                  className: "descriptionText",
                  id: "contactText",
                  children:
                    "Beh\xf6ver du kontakta oss finns v\xe5ra f\xf6ljande melj h\xe4r nedan beroende p\xe5 vad din fr\xe5ga handlar om",
                }),
                Object(j.jsxs)("div", {
                  className: "row",
                  children: [
                    me.map(function (e, t) {
                      return Object(j.jsx)("div", {
                        class: "child",
                        children: Object(j.jsxs)("div", {
                          className: "post",
                          children: [
                            Object(j.jsx)("h2", { children: e.post }),
                            Object(j.jsx)("p", {
                              className: "descriptionText",
                              id: "contactDescription",
                              children: e.text,
                            }),
                            Object(j.jsxs)("a", {
                              href: e.email,
                              children: [
                                " ",
                                Object(j.jsx)(L, { className: e.icon }),
                                e.linkText,
                              ],
                            }),
                          ],
                        }),
                      });
                    }),
                    " ",
                  ],
                }),
                Object(j.jsxs)("div", {
                  className: "row",
                  children: [
                    be.map(function (e, t) {
                      return Object(j.jsx)("div", {
                        class: "child",
                        children: Object(j.jsxs)("div", {
                          className: "post",
                          children: [
                            Object(j.jsx)("h2", { children: e.post }),
                            Object(j.jsx)("p", {
                              className: "descriptionText",
                              id: "contactDescription",
                              children: e.text,
                            }),
                            Object(j.jsxs)("a", {
                              href: e.email,
                              children: [
                                " ",
                                Object(j.jsx)(L, { className: e.icon }),
                                e.linkText,
                              ],
                            }),
                          ],
                        }),
                      });
                    }),
                    " ",
                  ],
                }),
                Object(j.jsxs)("div", {
                  className: "row",
                  children: [
                    he.map(function (e, t) {
                      return Object(j.jsx)("div", {
                        class: "child",
                        children: Object(j.jsxs)("div", {
                          className: "post",
                          children: [
                            Object(j.jsx)("h2", { children: e.post }),
                            Object(j.jsx)("p", {
                              className: "descriptionText",
                              id: "contactDescription",
                              children: e.text,
                            }),
                            Object(j.jsxs)("a", {
                              href: e.email,
                              children: [
                                " ",
                                Object(j.jsx)(L, { className: e.icon }),
                                e.linkText,
                              ],
                            }),
                          ],
                        }),
                      });
                    }),
                    " ",
                  ],
                }),
                Object(j.jsx)("div", {
                  className: "knapp",
                  children: Object(j.jsx)(d.b, {
                    to: "/mette21-22",
                    children: "MER OM GRUPPEN",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      a(126), a(127);
      var ve,
        Oe,
        ke,
        fe = function () {
          var e = Object(H.useScrollTo)();
          return Object(j.jsxs)("div", {
            className: "mette-info",
            children: [
              Object(j.jsxs)("div", {
                className: "section",
                children: [
                  Object(j.jsx)("h1", { children: "METTE 22-23" }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      "Skrolla ner f\xf6r att veta mer om vilka vi \xe4r!",
                  }),
                  Object(j.jsxs)("div", {
                    className: "arrow",
                    style: { cursor: "pointer" },
                    children: [
                      Object(j.jsx)("span", {
                        onClick: function () {
                          return e({
                            top: window.innerHeight,
                            left: 0,
                            behavior: "smooth",
                          });
                        },
                      }),
                      Object(j.jsx)("span", {
                        onClick: function () {
                          return e({
                            top: window.innerHeight,
                            left: 0,
                            behavior: "smooth",
                          });
                        },
                      }),
                    ],
                  }),
                ],
              }),
              " ",
              Object(j.jsxs)("div", {
                className: "text",
                children: [
                  Object(j.jsx)("h3", {
                    children: "Det \xe4r vi som \xe4r Mette 22-23!",
                  }),
                  Object(j.jsx)("div", {
                    class: "container_profile-images",
                    children: je.map(function (e, t) {
                      return Object(j.jsxs)(
                        "div",
                        {
                          class: "container_image",
                          children: [
                            Object(j.jsx)("img", {
                              src: e.img,
                              alt: "profileImage",
                            }),
                            Object(j.jsx)("div", {
                              className: "presentation",
                              children: Object(j.jsxs)("div", {
                                className: "presentation_content",
                                children: [
                                  Object(j.jsx)("p", {
                                    className: "name",
                                    children: e.name,
                                  }),
                                  Object(j.jsx)("p", {
                                    className: "postProfil",
                                    children: e.post,
                                  }),
                                ],
                              }),
                            }),
                            Object(j.jsxs)("div", {
                              class: "overlay_profile-image",
                              children: [
                                Object(j.jsx)("p", {
                                  class: "classHeader_profile header_profile",
                                  children: "KLASS",
                                }),
                                Object(j.jsx)("p", {
                                  class: "class_profile  text_profile",
                                  children: e.class,
                                }),
                                Object(j.jsx)("p", {
                                  class: "cityHeader_profile header_profile",
                                  children: "STAD",
                                }),
                                Object(j.jsx)("p", {
                                  class: "city_profile text_profile",
                                  children: e.city,
                                }),
                                Object(j.jsx)("p", {
                                  class: "textHeader_profile header_profile",
                                  children: "INTRESSE",
                                }),
                                Object(j.jsx)("p", {
                                  class: "bodytext_profile text_profile",
                                  children: e.text,
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                  " ",
                ],
              }),
              " ",
            ],
          });
        },
        ue =
          (a(129),
          N.a.div(
            ve ||
              (ve = Object(u.a)([
                '\n  text-align: center;\n  object-align: center;\n  width: 100%;\n  height: 100%;\n\n  p {\n    font-size: clamp(16px, 1.1vw, 24px);\n    font-family: "Lora", serif;\n    text-align: center;\n  }\n',
              ]))
          )),
        Ne = N.a.button(
          Oe ||
            (Oe = Object(u.a)([
              '\n  padding: 10px;\n  // font: unset\n  font-size: 17px;\n  font-weight: bold;\n  font-family: "Roboto", sans-serif;\n  width: 70%;\n  //background-color: #f18227;\n  margin-bottom: 0.2rem;\n  // color: #db830f;\n  //color: white;\n  cursor: pointer;\n  border-radius: 5px;\n  border-style: none;\n\n  &:hover {\n    color: white;\n    background-color: #ed820e;\n  }\n',
            ]))
        ),
        Me = N.a.div(
          ke ||
            (ke = Object(u.a)([
              "\nborder: 0.5px solid;\npadding: 2rem;\nborder-radius: 5px;\nwidth: 60%;\ntext-align: center;\nmax-right: 13.5rem;\nmax-left: 13.5rem;\nmargin: auto;\nborder-color: #f1f1f1;\ntext-align: center;\n",
            ]))
        );
      function Te(e) {
        var t = Object(n.useState)(!1),
          a = Object(l.a)(t, 2),
          i = a[0],
          s = a[1];
        return Object(j.jsxs)(ue, {
          className: "collapsible",
          children: [
            Object(j.jsx)(Ne, {
              className: "Toggle",
              onClick: function () {
                return s(!i);
              },
              children: e.label,
            }),
            i &&
              Object(j.jsx)(Me, { className: "content", children: e.children }),
          ],
        });
      }
      a(157);
      var we = a.p + "static/media/mette20-21.1cf7561c.jpg",
        ye = a.p + "static/media/mette19-20_2.81a4d338.jpg",
        Ee = a.p + "static/media/mette18-19.60493fa0.jpg",
        Se = a.p + "static/media/mette17-18.ab021591.jpg",
        Ie = a.p + "static/media/mette16-17.8068db30.jpg",
        Je = a.p + "static/media/mette15-16.a04144c0.jpg",
        Le = a.p + "static/media/mette14-15.1319d1e7.jpg",
        Ae = a.p + "static/media/mette13-14.d01ac3d6.jpg",
        Pe = a.p + "static/media/mette21-22.a9869890.jpg";
      function De() {
        return Object(j.jsxs)("div", {
          className: "marit",
          children: [
            Object(j.jsxs)("div", {
              className: "marit_text",
              children: [
                Object(j.jsx)("h1", { children: "Marit" }),
                Object(j.jsx)("p", {
                  className: "descriptionText",
                  children:
                    "Efter en mycket h\xe4ndelserik resa av h\xe5rt arbete och skoj tillsammans som Mette s\xe5 slutar inte v\xe5r resa h\xe4r! Vi kommer ist\xe4llet att minnas som Marit. ",
                }),
              ],
            }),
            Object(j.jsx)("div", {
              className: "space",
              children: Object(j.jsxs)(Te, {
                label: "METTE 21-22",
                children: [
                  " ",
                  Object(j.jsx)("img", { className: "maritImg", src: Pe }),
                  Object(j.jsx)("h2", {
                    className: "maritMedlemmar",
                    children: "MEDLEMMAR",
                  }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      "Ia Bruno, Jessie Chow, Mathilda Welander, Johanna Folde, Lovisa Svensson, Cindy Khuong ochh Tilda Hylander ",
                  }),
                ],
              }),
            }),
            Object(j.jsx)("div", {
              className: "space",
              children: Object(j.jsxs)(Te, {
                label: "METTE 20/21",
                children: [
                  " ",
                  Object(j.jsx)("img", { className: "maritImg", src: we }),
                  Object(j.jsx)("h2", {
                    className: "maritMedlemmar",
                    children: "MEDLEMMAR",
                  }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      "Tilda Eriksson Lindgren, Frida Hedman, Wilma Axelsson, Maria Brunned, Anna Jonsson och Louise Nilsson",
                  }),
                ],
              }),
            }),
            Object(j.jsx)("div", {
              className: "space",
              children: Object(j.jsxs)(Te, {
                label: "METTE 19/20",
                children: [
                  Object(j.jsx)("img", { className: "maritImg", src: ye }),
                  Object(j.jsx)("h2", {
                    className: "maritMedlemmar",
                    children: "MEDLEMMAR",
                  }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      "Cecilia Bergman, Hanna Timander Bj\xf6rknert, Anna W\xe4stling, Isabelle B\xfchlmann, Jenny Rudemo och Nellie Engstr\xf6m",
                  }),
                ],
              }),
            }),
            Object(j.jsx)("div", {
              className: "space",
              children: Object(j.jsxs)(Te, {
                label: "METTE 18/19",
                children: [
                  Object(j.jsx)("img", { className: "maritImg", src: Ee }),
                  Object(j.jsx)("h2", {
                    className: "maritMedlemmar",
                    children: "MEDLEMMAR",
                  }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      "Anna Furug\xe5rd, Iris Kotsinas, Matilda Eriksson, Catja Nordqvist, Astrid Johansson och Alice K\xe5hlin",
                  }),
                ],
              }),
            }),
            Object(j.jsx)("div", {
              className: "space",
              children: Object(j.jsxs)(Te, {
                label: "METTE 17/18",
                children: [
                  Object(j.jsx)("img", { className: "maritImg", src: Se }),
                  Object(j.jsx)("h2", {
                    className: "maritMedlemmar",
                    children: "MEDLEMMAR",
                  }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      "Anna H\xe4\xe4gg, Emma Algotsson, Johanna Granstr\xf6m, Ester Lindgren, Ronja Faltin och Ylva Selling",
                  }),
                ],
              }),
            }),
            Object(j.jsx)("div", {
              className: "space",
              children: Object(j.jsxs)(Te, {
                label: "METTE 16/17",
                children: [
                  Object(j.jsx)("img", { className: "maritImg", src: Ie }),
                  Object(j.jsx)("h2", {
                    className: "maritMedlemmar",
                    children: "MEDLEMMAR",
                  }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      "Linnea Bergman, Emma Nilsson, Malin Wetterskog, Sofia Erlandsson, Rebecca Akkila och Amanda Tyd\xe9n",
                  }),
                ],
              }),
            }),
            Object(j.jsx)("div", {
              className: "space",
              children: Object(j.jsxs)(Te, {
                label: "METTE 15/16",
                children: [
                  Object(j.jsx)("img", { className: "maritImg", src: Je }),
                  Object(j.jsx)("h2", {
                    className: "maritMedlemmar",
                    children: "MEDLEMMAR",
                  }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      " Rebecca Cedermalm, Fanny Ald\xe9n, Jasmine Karlsson, Michaela Rabenius, Victoria Waldermarson och Sofia H\xf6glund",
                  }),
                ],
              }),
            }),
            Object(j.jsx)("div", {
              className: "space",
              children: Object(j.jsxs)(Te, {
                label: "METTE 14/15",
                children: [
                  Object(j.jsx)("img", { className: "maritImg", src: Le }),
                  Object(j.jsx)("h2", {
                    className: "maritMedlemmar",
                    children: "MEDLEMMAR",
                  }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      "Johanna Elmesi\xf6\xf6, Sandra Tr\xe5v\xe9n, Sovanny Huy Nikkil\xe4, Isabelle Rosenquist, Sara Martin och Alice Lundin",
                  }),
                ],
              }),
            }),
            Object(j.jsx)("div", {
              className: "space",
              children: Object(j.jsxs)(Te, {
                label: "METTE 13/14",
                children: [
                  Object(j.jsx)("img", { className: "maritImg", src: Ae }),
                  Object(j.jsx)("h2", {
                    className: "maritMedlemmar",
                    children: "MEDLEMMAR",
                  }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      "Cecilia Lagerwall, Linn\xe9a N\xe5bo, Linnea Mellblom, Therese Komstadius, Gabriella Rydenfors, Lovisa Dahl",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var Ve = a.p + "static/media/tjejfika.3888baf8.jpg",
        Ge = a(9);
      var We = function () {
          return Object(j.jsx)("div", {
            className: "tjejfika_section",
            children: Object(j.jsxs)("div", {
              className: "fika-content",
              children: [
                Object(j.jsx)("div", {
                  className: "back-arrow",
                  children: Object(j.jsxs)(d.b, {
                    to: "/",
                    children: [Object(j.jsx)(Ge.a, {}), " "],
                  }),
                }),
                Object(j.jsx)("h1", {
                  className: "pageTitle",
                  children: "TJEJFIKA 2021",
                }),
                Object(j.jsx)("div", {
                  className: "bild",
                  children: Object(j.jsx)("img", {
                    className: "tjejfikaImg",
                    src: Ve,
                  }),
                }),
                Object(j.jsxs)("div", {
                  className: "fika-text",
                  children: [
                    Object(j.jsx)("h1", {
                      className: "pageTitle",
                      children: "TJEJFIKA",
                    }),
                    Object(j.jsx)("p", {
                      className: "descriptionText",
                      children:
                        "Mette h\xe5ller i en tjejfika dagen innan uppropet f\xf6r alla nya kvinnliga och ickebin\xe4ra studenter p\xe5 Medieteknikprogrammet. Detta ger ett perfekt tillf\xe4lle f\xf6r de blivande MT-studenterna att f\xe5 l\xe4ra k\xe4nna sina klasskamrater och f\xe5 en mjuk start innan skolan b\xf6rjar p\xe5riktigt. Studenterna f\xe5r g\xf6ra l\xe4ra-k\xe4nna \xf6vningar ,spela spel och tr\xe4ffa oss fr\xe5n Mette under fikat.",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Ce = (a(158), a(27)),
        Re = a.p + "static/media/inv2.a5d26c52.JPG",
        Fe = a.p + "static/media/inv3.8747e391.JPG",
        Ke = a.p + "static/media/inv4.7dfd055a.JPG",
        ze = a.p + "static/media/inv5.895f236c.JPG",
        He = a.p + "static/media/inv6.2f13a087.JPG",
        Xe = a.p + "static/media/inv7.7f5b1661.JPG",
        qe = a.p + "static/media/inv8.f5b1d659.JPG",
        Be = a.p + "static/media/inv9.8a99a65f.JPG",
        Ze = a.p + "static/media/inv10.423c134a.JPG",
        Ue = a.p + "static/media/inv12.8fad1f05.JPG",
        Qe = a.p + "static/media/fountain1.779ba852.JPG",
        Ye = a.p + "static/media/fountain2.82a489b6.JPG",
        _e = a.p + "static/media/fountain3.b4a6da11.JPG";
      var $e = function () {
          var e = [
            { image: re },
            { image: Re },
            { image: Fe },
            { image: Ke },
            { image: ze },
            { image: Ze },
            { image: Ue },
            { image: He },
            { image: Xe, caption: "MT1A" },
            { image: qe, caption: "MT1B" },
            { image: Be },
            { image: Qe },
            { image: Ye },
            { image: _e },
          ];
          return Object(j.jsx)("div", {
            className: "invigning-section",
            children: Object(j.jsxs)("div", {
              className: "invigning-content",
              children: [
                Object(j.jsx)("div", {
                  className: "back-arrow",
                  children: Object(j.jsxs)(d.b, {
                    to: "/",
                    children: [Object(j.jsx)(Ge.a, {}), " "],
                  }),
                }),
                Object(j.jsxs)("div", {
                  className: "invigning-titel",
                  children: [
                    Object(j.jsx)("h1", {
                      className: "pageTitle",
                      children: "OVVEINVIGNING 2021",
                    }),
                    Object(j.jsx)("p", {
                      className: "descriptionText",
                      children: "En tillbakablick fr\xe5n ovveinvigningen",
                    }),
                  ],
                }),
                Object(j.jsx)("div", {
                  className: "invigning-bild",
                  children: Object(j.jsx)("div", {
                    style: { textAlign: "center" },
                    children: Object(j.jsx)("div", {
                      style: { padding: "2%" },
                      children: Object(j.jsx)(Ce.Carousel, {
                        data: e,
                        time: 2e3,
                        width: "140vh",
                        height: "80vh",
                        captionStyle: { fontSize: "3vh", fontWeight: "bold" },
                        radius: "1%",
                        slideNumber: !0,
                        slideNumberStyle: {
                          fontSize: "20px",
                          fontWeight: "bold",
                        },
                        captionPosition: "bottom",
                        automatic: !0,
                        dots: !0,
                        pauseIconColor: "white",
                        pauseIconSize: "10vh",
                        slideBackgroundColor: "darkgrey",
                        slideImageFit: "cover",
                        thumbnails: !0,
                        thumbnailWidth: "6%",
                        style: {
                          textAlign: "center",
                          maxWidth: "140vh",
                          maxHeight: "80vh",
                          margin: "4% auto",
                        },
                      }),
                    }),
                  }),
                }),
                "  ",
                Object(j.jsxs)("div", {
                  className: "invigning-text",
                  children: [
                    Object(j.jsx)("h1", {
                      className: "pageTitle",
                      children: "MTs \xe5rliga ovveinvigning ",
                    }),
                    Object(j.jsx)("p", {
                      className: "descriptionText",
                      children:
                        'F\xf6r de medieteknikstudenter som inte har invigt sin fina orangea overall, m\xe5ste b\xe4ra overallen uppcabbad (armarna i \xe4rmarna). F\xf6r att f\xe5 b\xe4ra den nedcabbad (\xe4rmarna knytna runt midjan/"som vanligt") b\xf6r overallen invigas p\xe5 ovveinvigningen som anordnas av Mette. P\xe5 invigningen kommer studenterna f\xe5 f\xf6lja med p\xe5 en of\xf6rgl\xf6md och fartfylld resa. Detta vill du inte missa!',
                    }),
                    Object(j.jsxs)("div", {
                      className: "descriptionText",
                      children: [
                        "Fler bilder fr\xe5n \xe5rets invingning finns att hitta p\xe5 Mettes",
                        Object(j.jsx)("a", {
                          href: "https://www.facebook.com/events/4451416161605413/?active_tab=discussion",
                          children: " Facebook ",
                        }),
                        "sida.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        et = (a(50), a.p, a.p + "static/media/gaia1.e60a689a.jpg"),
        tt = a.p + "static/media/gaia2.f74e6753.jpg",
        at = a.p + "static/media/gaia3.d05694cb.jpg",
        nt = a.p + "static/media/gaia4.fd984f9c.jpg",
        it = a.p + "static/media/gaia5.375749a2.jpg",
        st = a.p + "static/media/gaia6.b31366a2.jpg",
        ct = a.p + "static/media/gaia7.0c0f5509.jpg",
        rt = a.p + "static/media/gaia8.24a6dc3c.jpg";
      var lt = function () {
          var e = [
            { image: et },
            { image: tt },
            { image: at },
            { image: nt },
            { image: it },
            { image: st },
            { image: ct },
            { image: rt },
          ];
          return Object(j.jsx)("div", {
            className: "gaia-section",
            children: Object(j.jsxs)("div", {
              className: "event-content",
              children: [
                Object(j.jsx)("div", {
                  className: "back-arrow",
                  children: Object(j.jsxs)(d.b, {
                    to: "/",
                    children: [Object(j.jsx)(Ge.a, {}), " "],
                  }),
                }),
                Object(j.jsxs)("div", {
                  className: "event-titel",
                  children: [
                    Object(j.jsx)("h1", {
                      className: "pageTitle",
                      children: "GAIA EVENT 2021",
                    }),
                    Object(j.jsx)("p", {
                      className: "descriptionText",
                      children:
                        "En mycket trevlig och inspirerande kv\xe4ll tillsammans med Gaia",
                    }),
                  ],
                }),
                Object(j.jsx)("div", {
                  className: "event-bild",
                  children: Object(j.jsx)("div", {
                    style: { textAlign: "center" },
                    children: Object(j.jsx)("div", {
                      style: { padding: "2%" },
                      children: Object(j.jsx)(Ce.Carousel, {
                        data: e,
                        time: 2e3,
                        width: "140vh",
                        height: "80vh",
                        captionStyle: { fontSize: "3vh", fontWeight: "bold" },
                        radius: "1%",
                        slideNumber: !0,
                        slideNumberStyle: {
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "black",
                        },
                        captionPosition: "bottom",
                        automatic: !0,
                        dots: !0,
                        pauseIconColor: "white",
                        pauseIconSize: "10vh",
                        slideBackgroundColor: "lightgray",
                        slideImageFit: "contain",
                        thumbnails: !0,
                        thumbnailWidth: "5%",
                        style: {
                          textAlign: "center",
                          maxWidth: "140vh",
                          maxHeight: "80vh",
                          margin: "4% auto",
                        },
                      }),
                    }),
                  }),
                }),
                "  ",
                Object(j.jsxs)("div", {
                  className: "event-text",
                  children: [
                    Object(j.jsx)("h1", {
                      className: "pageTitle",
                      children: "Inspirationskv\xe4ll med Gaia ",
                    }),
                    Object(j.jsx)("p", {
                      className: "descriptionText",
                      children:
                        "Mettes huvudsponsor Gaia brukar h\xe5lla i minst ett f\xf6retagsevent per \xe5r. I \xe5r var detta ett fysiskt bes\xf6k p\xe5 Gaias kontor i Norrk\xf6ping d\xe4r alla tjejer och icke-bin\xe4ra var v\xe4lkomna, d\xe4r de bj\xf6ds p\xe5 mat och bubbel. Under kv\xe4llen svarade Gaia p\xe5 fr\xe5gor och gav en inblick \xf6ver hur arbetslivet d\xe4r kunde se ut. Studenterna tyckte att det var v\xe4ldigt uppskattat och blev mycket inspirerade under Gaias event.",
                    }),
                    Object(j.jsx)("p", {
                      className: "descriptionText",
                      children:
                        "F\xf6rra \xe5ret var f\xf6retagseventet med Gaia en digital kv\xe4llsevent med temat UX.",
                    }),
                    Object(j.jsxs)("div", {
                      className: "descriptionText",
                      style: { marginTop: 2 },
                      children: [
                        "Vill du veta mer om Gaia eller har du n\xe5gra funderingar om dina m\xf6jligheter efter examen s\xe5 kan du kolla in",
                        Object(j.jsx)("a", {
                          href: "gaia.se",
                          children: " Gaias hemsida ",
                        }),
                        "!",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        dt = a.p + "static/media/rosa.c895270a.png";
      var ot = function () {
          return Object(j.jsxs)("div", {
            className: "tjejfika_section",
            children: [
              Object(j.jsxs)("div", {
                className: "fika-content",
                children: [
                  Object(j.jsx)("div", {
                    className: "back-arrow",
                    children: Object(j.jsxs)(d.b, {
                      to: "/",
                      children: [Object(j.jsx)(Ge.a, {}), " "],
                    }),
                  }),
                  Object(j.jsx)("div", {
                    className: "pageTitle",
                    children: "ROSA VECKAN 2021",
                  }),
                  Object(j.jsx)("div", {
                    className: "bild",
                    children: Object(j.jsx)("img", {
                      className: "tjejfikaImg",
                      src: dt,
                    }),
                  }),
                  Object(j.jsxs)("div", {
                    className: "fika-text",
                    children: [
                      Object(j.jsx)("h1", {
                        className: "pageTitle",
                        children: "Mette och Nora",
                      }),
                      Object(j.jsx)("p", {
                        className: "descriptionText",
                        children:
                          "Varje \xe5r i oktober st\xf6djer Mette och byggnadstekniks tjejf\xf6rening Nora, Rosa Bandet kampanjen genom att h\xe5lla Rosa veckan. Under Rosa veckan bjuds det p\xe5 fika och roliga aktiviteter som tipspromenad och t\xe4vlingar d\xe4r fina priser utlovas. Nytt f\xf6r i \xe5r h\xf6ll Mette i slutet av Rosa Veckan en tjejpub d\xe4r det tillkom karaoke, br\xe4dspel, musik quiz, snacks och massa kul! Alla pengar som samlades in under Rosa veckan sk\xe4nks till Rosa Bandet.",
                      }),
                      Object(j.jsxs)("div", {
                        className: "descriptionText",
                        children: [
                          "Nora \xe4r byggnadsingenj\xf6rernas tjejf\xf6rening, kolla in deras",
                          Object(j.jsx)("a", {
                            href: "https://www.instagram.com/nora1991_nsektionen/",
                            children: " Instagram ",
                          }),
                          "och",
                          Object(j.jsx)("a", {
                            href: "https://www.facebook.com/nora1991.nsektionen",
                            children: " Facebook. ",
                          }),
                        ],
                      }),
                      " ",
                    ],
                  }),
                  " ",
                ],
              }),
              " ",
            ],
          });
        },
        jt = (a(211), a.p + "static/media/gaia-logo.bbff4b3c.png");
      var mt = function () {
          return Object(j.jsxs)("div", {
            className: "spons_section",
            children: [
              Object(j.jsxs)("div", {
                className: "spons-content",
                children: [
                  Object(j.jsx)("div", {
                    className: "back-arrow",
                    children: Object(j.jsxs)(d.b, {
                      to: "/",
                      children: [Object(j.jsx)(Ge.a, {}), " "],
                    }),
                  }),
                  Object(j.jsxs)("div", {
                    className: "event-titel",
                    children: [
                      Object(j.jsx)("h1", {
                        className: "pageTitle",
                        children: "SAMMARBETSPARTNER",
                      }),
                      Object(j.jsx)("p", {
                        className: "descriptionText",
                        children:
                          "Klicka p\xe5 respektive logga f\xf6r mer information",
                      }),
                    ],
                  }),
                  Object(j.jsxs)("div", {
                    className: "theImages",
                    children: [
                      Object(j.jsx)("a", {
                        href: "https://www.ica.se/butiker/nara/norrkoping/ica-nara-strommen-norrkoping-2167/start/",
                        children: Object(j.jsx)("img", {
                          src: "data:image/png;base64,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",
                          className: "photo1",
                        }),
                      }),
                      Object(j.jsx)("a", {
                        href: "https://gaia.se/",
                        children: Object(j.jsx)("img", {
                          src: jt,
                          className: "photo1",
                        }),
                      }),
                    ],
                  }),
                  Object(j.jsxs)("div", {
                    className: "spons-text",
                    children: [
                      Object(j.jsx)("h1", {
                        className: "pageTitle",
                        children: "SPONSOR",
                      }),
                      Object(j.jsxs)("p", {
                        className: "descriptionText",
                        children: [
                          "\xc4r du som f\xf6retag intresserad av att sponsra Mette och vill veta mer om vad det inneb\xe4r eller har du fr\xe5gor g\xe4llande marknadsf\xf6ringens\xe5 kontakta g\xe4rna v\xe5r f\xf6retagsansvarig",
                          Object(j.jsxs)("a", {
                            href: "mailto:Samarbete.mette@medieteknik.nu",
                            children: [" ", "Lovisa Svensson."],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              " ",
            ],
          });
        },
        bt = (a(212), a.p + "static/media/met-7.4c648408.JPG");
      var ht = function () {
          return Object(j.jsx)("div", {
            className: "S\xf6kMette_section",
            children: Object(j.jsxs)("div", {
              className: "S\xf6kMette-content",
              children: [
                Object(j.jsx)("div", {
                  className: "back-arrow",
                  children: Object(j.jsxs)(d.b, {
                    to: "/",
                    children: [Object(j.jsx)(Ge.a, {}), " "],
                  }),
                }),
                Object(j.jsxs)("div", {
                  className: "s\xf6k-event-titel",
                  children: [
                    Object(j.jsx)("h1", {
                      className: "pageTitle",
                      children: "S\xd6K TILL METTE",
                    }),
                    Object(j.jsxs)("p", {
                      className: "descriptionText",
                      children: [
                        "\xc4r du intresserad av att vara med i en studentf\xf6rening, anorda sp\xe4nnande event och f\xe5 nya erfarenheter s\xe5 l\xe5ter Mette n\xe5got f\xf6r dig! En beskrivning p\xe5 de olika posterna finns h\xe4r nedan och har du n\xe5gra specifika fr\xe5gor s\xe5 kan du bara ta kontakt med oss. F\xf6r att l\xe4sa mer om hur du kan s\xf6ka och/eller nominera, klicka p\xe5 denna",
                        Object(j.jsxs)("a", {
                          href: "https://www.facebook.com/events/3135615783336629",
                          children: [" ", "l\xe4nk!"],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(j.jsxs)("div", {
                  className: "S\xf6kMette-text",
                  children: [
                    Object(j.jsx)("h1", {
                      className: "pageTitle",
                      children: "POSTBESKRIVNING",
                    }),
                    Object(j.jsxs)("div", {
                      className: "postbesk",
                      children: [
                        Object(j.jsx)("h2", { children: "Ordf\xf6rande" }),
                        Object(j.jsx)("p", {
                          className: "descriptionText",
                          children:
                            "Som ordf\xf6rande har du ett \xf6vergripande ansvar f\xf6r Mettes arbete. Det \xe4r du som f\xf6r Mettes talan i st\xf6rre sammanhang. Du \xe4r glad och driven, gillar att organisera och k\xe4nner dig bekv\xe4m i rollen att leda en grupp. Ordf\xf6rande har ocks\xe5 hand om att arbetet f\xf6rs vidare mellan verksamhets\xe5ren genom att ansvara f\xf6r utv\xe4rderingar och dokumentation utmed sitt egna verksamhets\xe5r.",
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "postbesk",
                      children: [
                        Object(j.jsx)("h2", { children: "Sekreterare" }),
                        Object(j.jsx)("p", {
                          className: "descriptionText",
                          children:
                            "Som sekreterare \xe4r det du som antecknar under Mettes m\xf6ten, du \xe4r en fena p\xe5 att skriva snabbt och du har koll p\xe5 Mettes stadgar och dokument. Du har \xe4ven huvudansvaret f\xf6r dokumentationen inf\xf6r storm\xf6ten. Posten passar dig som \xe4r strukturerad och gillar att ha ordning och reda.",
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "postbesk",
                      children: [
                        Object(j.jsx)("h2", { children: "Kass\xf6r" }),
                        Object(j.jsx)("p", {
                          className: "descriptionText",
                          children:
                            "Som kass\xf6r har du ansvar f\xf6r Mettes ekonomi. Du ser till att in- och utbetalningar sker i tid, att inkomster och utgifter bokf\xf6rs och att Mettes pengar spenderas p\xe5 r\xe4tt saker. Kass\xf6rsposten passar dig som har ett intresse f\xf6r ekonomi, \xe4r ansvarsfull och organiserad.",
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "postbesk",
                      children: [
                        Object(j.jsx)("h2", {
                          children: "F\xf6retagsansvarig",
                        }),
                        Object(j.jsx)("p", {
                          className: "descriptionText",
                          children:
                            "Som spons- och kommunikationsansvarig h\xe5ller du i kontakten med f\xf6retag, s\xf6ker spons och skapar avtal. Denna post passar dig som har l\xe4tt f\xf6r att ta kontakt med nya m\xe4nniskor, skriva mail och \xe4r v\xe4lstrukturerad.",
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "postbesk",
                      children: [
                        Object(j.jsx)("h2", {
                          children: "Tryck och PR ansvarig",
                        }),
                        Object(j.jsx)("p", {
                          className: "descriptionText",
                          children:
                            "Som Tryck och PR ansvarar du f\xf6r Mettes marknadsf\xf6ring. Det g\xf6r du genom att g\xf6ra affischer, omslagsbilder och annan grafik till Mettes olika evenemang. Dessutom har du ansvar f\xf6r Mettes m\xe4rken. Det \xe4r bra om du \xe4r p\xe5hittig och kreativ.",
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "postbesk",
                      children: [
                        Object(j.jsx)("h2", { children: "Eventansvarig" }),
                        Object(j.jsx)("p", {
                          className: "descriptionText",
                          children:
                            "Som eventansvarig har du god \xf6versikt \xf6ver verksamhets\xe5ret och du ser till att olika event som Mette arrangerar blir av. Det \xe4r allt ifr\xe5n att hitta p\xe5 event till att h\xe5lla i dem. Posten passar dig som \xe4r energisk, kreativ och drivande.",
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "postbesk",
                      children: [
                        Object(j.jsx)("h2", { children: "Webbansvarig" }),
                        Object(j.jsx)("p", {
                          className: "descriptionText",
                          children:
                            "Vill du ha ett projekt vid sidan av dina studier? \xc4r du intresserad av webbdesign och vill l\xe4ra dig mer om det? I s\xe5 fall passar du som Mettees webbansvarig! Du kommer f\xe5 mycket stor frihet till hur du vill utveckla hemsidan, det kan se ut p\xe5 vilket s\xe4tt som helst! The sky is the limit! woooww!",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(j.jsx)("div", {
                  className: "bildS\xf6k",
                  children: Object(j.jsx)("img", {
                    className: "S\xf6kMetteImg",
                    src: bt,
                  }),
                }),
              ],
            }),
          });
        },
        pt = (a(101), a.p + "static/media/Bild_kommer.f93107da.png");
      var xt = function () {
          return Object(j.jsx)("div", {
            className: "event-section",
            children: Object(j.jsxs)("div", {
              className: "event-content",
              children: [
                Object(j.jsx)("div", {
                  className: "back-arrow",
                  children: Object(j.jsxs)(d.b, {
                    to: "/",
                    children: [Object(j.jsx)(Ge.a, {}), " "],
                  }),
                }),
                Object(j.jsxs)("div", {
                  className: "event-titel",
                  children: [
                    Object(j.jsx)("h1", {
                      className: "pageTitle",
                      children: "DAMSITTNINGEN",
                    }),
                    Object(j.jsx)("p", {
                      className: "descriptionText",
                      children:
                        "En finsittning f\xf6r tjejer p\xe5 TekFak, campus Norrk\xf6ping",
                    }),
                  ],
                }),
                Object(j.jsx)("div", {
                  className: "bild",
                  children: Object(j.jsx)("img", {
                    className: "tjejfikaImg",
                    src: pt,
                  }),
                }),
                Object(j.jsxs)("div", {
                  className: "event-text",
                  children: [
                    Object(j.jsx)("h1", {
                      className: "pageTitle",
                      children: "Damsittningen",
                    }),
                    Object(j.jsx)("p", {
                      className: "descriptionText",
                      children:
                        "Damsittningen \xe4r en \xe5rlig finsittning f\xf6r tjejer och ickebin\xe4ra som studerar p\xe5 campus Norrk\xf6pings Tekniska Fakultet. Sittningen anordnas av ett utskott som fr\xe4mst best\xe5r av medlemmar fr\xe5n tjejf\xf6reningarna p\xe5 medieteknik, Mette, och byggnadsteknik, Nora, men \xe4ven tjejer och ickebin\xe4ra fr\xe5n de andra sektionerna i TekFak. Under kv\xe4llen bjuds det p\xe5 mat och underh\xe5llning som sent kommer gl\xf6mmas.",
                    }),
                    Object(j.jsxs)("div", {
                      className: "descriptionText",
                      children: [
                        "Fler bilder fr\xe5n Damsittnignen g\xe5r att hitta p\xe5",
                        Object(j.jsx)("a", {
                          href: "https://www.facebook.com/MTMette/photos/",
                          children: " Mettes foton ",
                        }),
                        "p\xe5 Facebook!",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        gt = a.p + "static/media/marke1.3194a7c5.PNG",
        vt = a.p + "static/media/marke2.236123a1.png",
        Ot = a.p + "static/media/marke3.ec3e0376.png",
        kt = a.p + "static/media/Kvinnosymbol.a4c3e920.jpg",
        ft = a.p + "static/media/invigning_2021.065cc50d.png";
      var ut = function () {
        var e = [
          { image: gt },
          { image: vt },
          { image: Ot },
          { image: o },
          { image: kt },
          { image: ft },
        ];
        return Object(j.jsx)("div", {
          className: "\xf6vrigt-section",
          children: Object(j.jsxs)("div", {
            className: "event-content",
            children: [
              Object(j.jsx)("div", {
                className: "back-arrow",
                children: Object(j.jsxs)(d.b, {
                  to: "/",
                  children: [Object(j.jsx)(Ge.a, {}), " "],
                }),
              }),
              Object(j.jsx)("div", {
                className: "event-titel",
                children: Object(j.jsx)("h1", {
                  className: "pageTitle",
                  children: "Mettes M\xe4rken",
                }),
              }),
              Object(j.jsx)("div", {
                className: "event-bild",
                children: Object(j.jsx)("div", {
                  style: { textAlign: "center" },
                  children: Object(j.jsx)("div", {
                    style: { padding: "2%" },
                    children: Object(j.jsx)(Ce.Carousel, {
                      data: e,
                      time: 2e3,
                      width: "140vh",
                      height: "80vh",
                      captionStyle: { fontSize: "3vh", fontWeight: "bold" },
                      radius: "1%",
                      slideNumber: !0,
                      slideNumberStyle: {
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "black",
                      },
                      captionPosition: "bottom",
                      automatic: !0,
                      dots: !0,
                      pauseIconColor: "black",
                      pauseIconSize: "10vh",
                      slideBackgroundColor: "white",
                      slideImageFit: "contain",
                      thumbnails: !0,
                      thumbnailWidth: "5%",
                      style: {
                        textAlign: "center",
                        maxWidth: "140vh",
                        maxHeight: "80vh",
                        margin: "4% auto",
                      },
                    }),
                  }),
                }),
              }),
              " ",
              Object(j.jsxs)("div", {
                className: "event-text",
                children: [
                  Object(j.jsx)("h1", {
                    className: "pageTitle",
                    children: "Mettes M\xe4rken",
                  }),
                  Object(j.jsx)("p", {
                    className: "descriptionText",
                    children:
                      "Mette har just nu sex m\xe4rken d\xe4r de alla delvis representerar de v\xe4rderingar som Mette st\xe5r f\xf6r. M\xe4rkena s\xe4ljs inte regelbundet men kontakta oss g\xe4rna ifall ni \xe4r intresserade.",
                  }),
                  Object(j.jsxs)("p", {
                    className: "descriptionText",
                    children: [
                      "N\xe4r vi s\xe4ljer m\xe4rken kommer det att l\xe4ggas upp info om det p\xe5",
                      Object(j.jsx)("a", {
                        href: "https://www.instagram.com/mettemedbandana/",
                        children: " Mettes Instagram",
                      }),
                      "!",
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      function Nt() {
        var e = Object(k.g)().pathname;
        return (
          Object(n.useEffect)(
            function () {
              window.scrollTo(0, 0);
            },
            [e]
          ),
          null
        );
      }
      var Mt = function () {
        return Object(j.jsx)(j.Fragment, {
          children: Object(j.jsxs)(d.a, {
            children: [
              Object(j.jsx)(O, {}),
              Object(j.jsx)(Nt, {}),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, { path: "/", exact: !0, component: Y }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsx)(k.d, {
                children: Object(j.jsx)(k.b, {
                  path: "/",
                  exact: !0,
                  component: z,
                  children: Object(j.jsx)(z, Object(r.a)({}, W)),
                }),
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, { path: "/", exact: !0, component: xe }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/kontakt",
                    exact: !0,
                    component: ge,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/mette21-22",
                    exact: !0,
                    component: fe,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/mette21-22",
                    exact: !0,
                    component: De,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/Tjejfika",
                    exact: !0,
                    component: We,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/Ovveinvigning",
                    exact: !0,
                    component: $e,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/GaiaEvent",
                    exact: !0,
                    component: lt,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/RosaVecka",
                    exact: !0,
                    component: ot,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/Spons",
                    exact: !0,
                    component: mt,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/Damsittningen",
                    exact: !0,
                    component: xt,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/S\xf6kMette",
                    exact: !0,
                    component: ht,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsxs)(k.d, {
                children: [
                  Object(j.jsx)(k.b, {
                    path: "/M\xe4rken",
                    exact: !0,
                    component: ut,
                  }),
                  Object(j.jsx)(k.b, {}),
                ],
              }),
              " ",
              Object(j.jsx)(A, {}),
              Object(j.jsx)(k.a, { from: "*", to: "/" }),
            ],
          }),
        });
      };
      c.a.render(
        Object(j.jsx)(i.a.StrictMode, {
          children: Object(j.jsx)(d.a, { children: Object(j.jsx)(Mt, {}) }),
        }),
        document.getElementById("root")
      );
    },
    43: function (e, t, a) {},
    50: function (e, t, a) {},
    54: function (e, t, a) {},
  },
  [[213, 1, 2]],
]);
//# sourceMappingURL=main.9042ebac.chunk.js.map
