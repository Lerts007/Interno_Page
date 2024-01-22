(function () {
  "use strict";
  var t = {
      4925: function (t, e, i) {
        var o = i(9242),
          n = i(3396);
        function s(t, e, i, o, s, a) {
          const r = (0, n.up)("router-view");
          return (0, n.wg)(), (0, n.j4)(r);
        }
        var a = { name: "App" },
          r = i(89);
        const l = (0, r.Z)(a, [["render", s]]);
        var c = l,
          g = i(2483),
          d = i(7139);
        const u = (0, n.uE)(
            '<section class="baner content"><h2 class="baner__h2">Let Your Home<br>Be Unique</h2><p class="baner__p"> There are many variations of the passages of<br> lorem Ipsum fromavailable, majority. </p><button class="baner__btn"> Get Started <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none"><path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path></svg></button></section>',
            1
          ),
          p = { class: "project content" },
          m = (0, n._)(
            "div",
            { class: "project-header" },
            [
              (0, n._)(
                "h2",
                { class: "project-header__h2" },
                "Follow Our Projects"
              ),
              (0, n._)(
                "p",
                { class: "project-header__p" },
                " It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points. "
              ),
            ],
            -1
          ),
          _ = { id: "projectMain", class: "project-main" },
          h = { class: "project-main-card-img" },
          f = ["src"],
          v = { class: "project-main-card-text" },
          b = { class: "project-main-card-text-info" },
          w = { class: "project-main-card-text-info__h2" },
          x = { class: "project-main-card-text-info__p" },
          k = { class: "project-main-card-text__btn" },
          C = (0, n._)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "70",
              height: "70",
              viewBox: "0 0 70 70",
              fill: "none",
            },
            [
              (0, n._)("circle", {
                cx: "35",
                cy: "35",
                r: "35",
                fill: "#F4F0EC",
              }),
              (0, n._)("path", {
                d: "M32 44L40 35L32 26",
                stroke: "#292F36",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            ],
            -1
          ),
          D = (0, n.uE)(
            '<section class="counter"><div class="counter-content content"><div class="experiance counter-card"><p class="experiance__counter counter__num">12</p><p class="experiance__text counter__text">Years Of Experiance</p></div><div class="successProject counter-card"><p class="successProject__counter counter__num">85</p><p class="successProject__text counter__text">Success Project</p></div><div class="activeProject counter-card"><p class="activeProject__counter counter__num">15</p><p class="activeProject__text counter__text">Active Project</p></div><div class="happyCustomers counter-card"><p class="happyCustomers__counter counter__num">95</p><p class="happyCustomers__text counter__text">Happy Customers</p></div></div></section>',
            1
          ),
          y = { class: "blog content" },
          j = (0, n._)(
            "div",
            { class: "blog-header" },
            [
              (0, n._)(
                "h2",
                { class: "blog-header__title" },
                "Articles & News"
              ),
              (0, n._)(
                "p",
                { class: "blog-header__p" },
                " It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using. "
              ),
            ],
            -1
          ),
          B = { id: "blogMain", class: "blog-main" },
          L = { class: "blog-main-card" },
          I = { class: "blog-card-img" },
          P = ["src"],
          A = { class: "blog-card-img-title" },
          H = { class: "blog-card-info" },
          F = { class: "blog-card-title" },
          M = { class: "blog-card-DateAndBtn" },
          W = { class: "blog-card__date" },
          E = (0, n._)(
            "button",
            { class: "blog-card__btn" },
            [
              (0, n._)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "52",
                  height: "53",
                  viewBox: "0 0 52 53",
                  fill: "none",
                },
                [
                  (0, n._)("circle", {
                    cx: "26",
                    cy: "26.267",
                    r: "26",
                    fill: "#F4F0EC",
                  }),
                  (0, n._)("path", {
                    d: "M23.7714 32.9527L29.7143 26.267L23.7714 19.5813",
                    stroke: "#292F36",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                ]
              ),
            ],
            -1
          );
        function K(t, e, i, o, s, a) {
          const r = (0, n.up)("Header"),
            l = (0, n.up)("router-link"),
            c = (0, n.up)("Footer");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              n.HY,
              null,
              [
                (0, n.Wm)(r),
                (0, n._)("main", null, [
                  u,
                  (0, n._)("section", p, [
                    m,
                    (0, n._)("div", _, [
                      ((0, n.wg)(!0),
                      (0, n.iD)(
                        n.HY,
                        null,
                        (0, n.Ko)(
                          t.projectCards,
                          (t) => (
                            (0, n.wg)(),
                            (0, n.iD)(
                              "div",
                              { key: t.id, class: "project-main-card" },
                              [
                                (0, n._)("div", h, [
                                  (0, n._)(
                                    "img",
                                    { src: t.img, alt: "img_1" },
                                    null,
                                    8,
                                    f
                                  ),
                                ]),
                                (0, n._)("div", v, [
                                  (0, n._)("div", b, [
                                    (0, n._)("h2", w, (0, d.zw)(t.title), 1),
                                    (0, n._)("p", x, (0, d.zw)(t.text), 1),
                                  ]),
                                  (0, n._)("button", k, [
                                    (0, n.Wm)(
                                      l,
                                      { to: "/blog_details" },
                                      { default: (0, n.w5)(() => [C]), _: 1 }
                                    ),
                                  ]),
                                ]),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                  D,
                  (0, n._)("section", y, [
                    j,
                    (0, n._)("div", B, [
                      (0, n._)("div", L, [
                        ((0, n.wg)(!0),
                        (0, n.iD)(
                          n.HY,
                          null,
                          (0, n.Ko)(
                            t.blogCards,
                            (t) => (
                              (0, n.wg)(),
                              (0, n.iD)(
                                "div",
                                { key: t.id, class: "blog-card" },
                                [
                                  (0, n._)("div", I, [
                                    (0, n._)(
                                      "img",
                                      { src: t.img, alt: "photo" },
                                      null,
                                      8,
                                      P
                                    ),
                                    (0, n._)(
                                      "div",
                                      A,
                                      (0, d.zw)(t.titleImg),
                                      1
                                    ),
                                  ]),
                                  (0, n._)("div", H, [
                                    (0, n._)("h3", F, (0, d.zw)(t.title), 1),
                                    (0, n._)("div", M, [
                                      (0, n._)("p", W, (0, d.zw)(t.data), 1),
                                      E,
                                    ]),
                                  ]),
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]),
                  ]),
                ]),
                (0, n.Wm)(c),
              ],
              64
            )
          );
        }
        const O = { class: "header-content" },
          N = (0, n._)(
            "a",
            { href: "./index.html" },
            [
              (0, n._)("div", { class: "logo" }, [
                (0, n._)(
                  "svg",
                  {
                    width: "34",
                    height: "34",
                    viewBox: "0 0 34 34",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  [
                    (0, n._)("path", {
                      d: "M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z",
                      fill: "#CDA274",
                    }),
                  ]
                ),
                (0, n._)("p", null, "Interno"),
              ]),
            ],
            -1
          ),
          V = { class: "navMenu" };
        function T(t, e, i, o, s, a) {
          const r = (0, n.up)("router-link");
          return (
            (0, n.wg)(),
            (0, n.iD)("header", null, [
              (0, n._)("div", O, [
                N,
                (0, n._)("nav", V, [
                  (0, n._)("ul", null, [
                    (0, n._)("li", null, [
                      (0, n.Wm)(
                        r,
                        { to: "/" },
                        { default: (0, n.w5)(() => [(0, n.Uk)("Home")]), _: 1 }
                      ),
                    ]),
                    (0, n._)("li", null, [
                      (0, n.Wm)(
                        r,
                        { to: "/" },
                        {
                          default: (0, n.w5)(() => [(0, n.Uk)("Project")]),
                          _: 1,
                        }
                      ),
                    ]),
                    (0, n._)("li", null, [
                      (0, n.Wm)(
                        r,
                        { to: "/blog" },
                        { default: (0, n.w5)(() => [(0, n.Uk)("Blog")]), _: 1 }
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        var Z = {
          data() {
            return {};
          },
        };
        const q = (0, r.Z)(Z, [["render", T]]);
        var S = q;
        const U = { class: "footer" },
          Y = (0, n.uE)(
            '<div class="footer-logo"><div class="logo"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"></path></svg><h4>Interno</h4></div><p> It is a long established fact that a reader will be distracted lookings. </p><div class="footer-logo-socialNetwork"><a href="https://twitter.com/"><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z" fill="#292F36"></path></svg></a><a href="https://linkedin.com/"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z" fill="#292F36"></path></svg></a></div></div>',
            1
          ),
          z = { class: "footer-navMenu" },
          G = (0, n._)("h4", null, "Pages", -1),
          J = (0, n._)(
            "div",
            { class: "footer-contact" },
            [
              (0, n._)("h4", null, "Contact"),
              (0, n._)("address", null, [
                (0, n._)("p", null, [
                  (0, n.Uk)(" 55 East Birchwood Ave. "),
                  (0, n._)("br"),
                  (0, n.Uk)(" Brooklyn, New York 11201 "),
                ]),
                (0, n._)("br"),
                (0, n._)(
                  "a",
                  {
                    class: "footer-contact__email",
                    href: "mailto:contact@interno.com",
                  },
                  "contact@interno.com"
                ),
                (0, n._)("a", { href: "tel:+71234567890" }, "(123) 456 - 7890"),
              ]),
            ],
            -1
          );
        function Q(t, e) {
          const i = (0, n.up)("router-link");
          return (
            (0, n.wg)(),
            (0, n.iD)("footer", null, [
              (0, n._)("div", U, [
                Y,
                (0, n._)("div", z, [
                  G,
                  (0, n._)("ul", null, [
                    (0, n._)("li", null, [
                      (0, n.Wm)(
                        i,
                        { to: "/" },
                        { default: (0, n.w5)(() => [(0, n.Uk)("Home")]), _: 1 }
                      ),
                    ]),
                    (0, n._)("li", null, [
                      (0, n.Wm)(
                        i,
                        { to: "/" },
                        {
                          default: (0, n.w5)(() => [(0, n.Uk)("Project")]),
                          _: 1,
                        }
                      ),
                    ]),
                    (0, n._)("li", null, [
                      (0, n.Wm)(
                        i,
                        { to: "/blog" },
                        { default: (0, n.w5)(() => [(0, n.Uk)("Blog")]), _: 1 }
                      ),
                    ]),
                  ]),
                ]),
                J,
              ]),
            ])
          );
        }
        const R = {},
          X = (0, r.Z)(R, [["render", Q]]);
        var $ = X,
          tt = {
            name: "Home",
            components: { Header: S, Footer: $ },
            data: () => ({
              projectCards: [
                {
                  id: 1,
                  img: i(62),
                  title: "Modern Kitchan",
                  text: "Decor / Artchitecture",
                },
                {
                  id: 2,
                  img: i(4089),
                  title: "Modern Kitchan",
                  text: "Decor / Artchitecture",
                },
                {
                  id: 3,
                  img: i(7729),
                  title: "Modern Kitchan",
                  text: "Decor / Artchitecture",
                },
                {
                  id: 4,
                  img: i(7019),
                  title: "Modern Kitchan",
                  text: "Decor / Artchitecture",
                },
              ],
              blogCards: [
                {
                  id: 1,
                  img: i(5162),
                  titleImg: "Kitchan Design",
                  title: "Let’s Get Solution For Building Construction Work",
                  data: "26 December,2022",
                },
                {
                  id: 2,
                  img: i(2576),
                  titleImg: "Living Design",
                  title: "Low Cost Latest Invented Interior Designing Ideas",
                  data: "22 December,20222",
                },
                {
                  id: 3,
                  img: i(9489),
                  titleImg: "Interior Design",
                  title: "Best For Any Office & Business Interior Solution",
                  data: "25 December,2022",
                },
              ],
            }),
          };
        const et = (0, r.Z)(tt, [["render", K]]);
        var it = et;
        const ot = { class: "errorPage content" },
          nt = { class: "errorPage-info" },
          st = (0, n._)("h1", null, "404", -1),
          at = (0, n._)(
            "p",
            null,
            "We are sorry, but the page you requested was not found",
            -1
          ),
          rt = { class: "errorPage-info__btn" },
          lt = (0, n._)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "18",
              height: "17",
              viewBox: "0 0 18 17",
              fill: "none",
            },
            [
              (0, n._)("path", {
                d: "M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887",
                stroke: "#CDA274",
                "stroke-width": "2",
                "stroke-linecap": "square",
                "stroke-linejoin": "round",
              }),
            ],
            -1
          ),
          ct = { class: "errorPage-img" },
          gt = ["src"];
        function dt(t, e, i, o, s, a) {
          const r = (0, n.up)("Header"),
            l = (0, n.up)("router-link");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              n.HY,
              null,
              [
                (0, n.Wm)(r),
                (0, n._)("div", ot, [
                  (0, n._)("div", nt, [
                    st,
                    at,
                    (0, n._)("button", rt, [
                      (0, n.Wm)(
                        l,
                        { to: "/" },
                        {
                          default: (0, n.w5)(() => [
                            (0, n.Uk)(" Bar To Home "),
                            lt,
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  (0, n._)("div", ct, [
                    (0, n._)(
                      "img",
                      { src: s.imgError, alt: "Изображение" },
                      null,
                      8,
                      gt
                    ),
                  ]),
                ]),
              ],
              64
            )
          );
        }
        var ut = {
          name: "404",
          components: { Header: S },
          data() {
            return { imgError: i(5492) };
          },
        };
        const pt = (0, r.Z)(ut, [["render", dt]]);
        var mt = pt;
        const _t = { class: "main-header" },
          ht = ["src"],
          ft = (0, n._)(
            "div",
            { class: "main-header-title" },
            [
              (0, n._)(
                "h2",
                { class: "main-header-title__title" },
                "Articles & News"
              ),
              (0, n._)("p", { class: "adressPage" }, "Home / Blog"),
            ],
            -1
          ),
          vt = { class: "latestPost" },
          bt = { class: "latestPost-content content" },
          wt = (0, n._)("h3", { class: "latestPost__h3" }, "Latest Post", -1),
          xt = { class: "latestPost-block" },
          kt = { class: "latestPost-block-img" },
          Ct = ["src"],
          Dt = (0, n.uE)(
            '<div class="latestPost-block-text"><h5 class="latestPost-block-text__title"> Low Cost Latest Invented Interior Designing Ideas </h5><p class="latestPost-block-text__p"> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. <br><br> Lorem Ipsum is not simply random text. It has roots in a piece of classica. </p><div class="latestPost-block-text-DateAndBtn"><p class="latestPost-block-text-DateAndBtn__data"> 26 December, 2022 </p><button class="blog-card__btn"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none"><circle cx="26" cy="26.5" r="26" fill="#F4F0EC"></circle><path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></div>',
            1
          ),
          yt = { id: "articlesNews", class: "articlesNews" },
          jt = { class: "articlesNews-content content" },
          Bt = (0, n._)(
            "h3",
            { class: "latestPost__h3" },
            "Articles & News",
            -1
          ),
          Lt = { class: "articlesNews-main-card" },
          It = { class: "blog-card-img" },
          Pt = ["src"],
          At = { class: "blog-card-img-title" },
          Ht = { class: "blog-card-info" },
          Ft = { class: "blog-card-title" },
          Mt = { class: "blog-card-DateAndBtn" },
          Wt = { class: "blog-card__date" },
          Et = (0, n._)(
            "button",
            { class: "blog-card__btn" },
            [
              (0, n._)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "52",
                  height: "53",
                  viewBox: "0 0 52 53",
                  fill: "none",
                },
                [
                  (0, n._)("circle", {
                    cx: "26",
                    cy: "26.267",
                    r: "26",
                    fill: "#F4F0EC",
                  }),
                  (0, n._)("path", {
                    d: "M23.7714 32.9527L29.7143 26.267L23.7714 19.5813",
                    stroke: "#292F36",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                ]
              ),
            ],
            -1
          ),
          Kt = (0, n.uE)(
            '<div class="articlesNews-btnPage"><button class="btnPage active">01</button><button class="btnPage">02</button><button class="btnPage">03</button><button class="btnPageNext"><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none"><circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"></circle><path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>',
            1
          );
        function Ot(t, e, i, o, s, a) {
          const r = (0, n.up)("Header"),
            l = (0, n.up)("Footer");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              n.HY,
              null,
              [
                (0, n.Wm)(r),
                (0, n._)("main", null, [
                  (0, n._)("section", _t, [
                    (0, n._)(
                      "img",
                      {
                        class: "main-header__baner",
                        src: s.Baner,
                        alt: "baner",
                      },
                      null,
                      8,
                      ht
                    ),
                    ft,
                  ]),
                  (0, n._)("section", vt, [
                    (0, n._)("div", bt, [
                      wt,
                      (0, n._)("div", xt, [
                        (0, n._)("div", kt, [
                          (0, n._)(
                            "img",
                            { src: s.LatestPost, alt: "Latest Post" },
                            null,
                            8,
                            Ct
                          ),
                        ]),
                        Dt,
                      ]),
                    ]),
                  ]),
                  (0, n._)("section", yt, [
                    (0, n._)("div", jt, [
                      Bt,
                      (0, n._)("div", Lt, [
                        ((0, n.wg)(!0),
                        (0, n.iD)(
                          n.HY,
                          null,
                          (0, n.Ko)(
                            s.articlesNewsBlogs,
                            (t) => (
                              (0, n.wg)(),
                              (0, n.iD)(
                                "div",
                                { key: t.id, class: "blog-card" },
                                [
                                  (0, n._)("div", It, [
                                    (0, n._)(
                                      "img",
                                      { src: t.img, alt: "photo" },
                                      null,
                                      8,
                                      Pt
                                    ),
                                    (0, n._)(
                                      "div",
                                      At,
                                      (0, d.zw)(t.titleImg),
                                      1
                                    ),
                                  ]),
                                  (0, n._)("div", Ht, [
                                    (0, n._)("h3", Ft, (0, d.zw)(t.title), 1),
                                    (0, n._)("div", Mt, [
                                      (0, n._)("p", Wt, (0, d.zw)(t.data), 1),
                                      Et,
                                    ]),
                                  ]),
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      Kt,
                    ]),
                  ]),
                ]),
                (0, n.Wm)(l),
              ],
              64
            )
          );
        }
        var Nt = {
          name: "Blog",
          components: { Header: S, Footer: $ },
          data() {
            return {
              Baner: i(7979),
              LatestPost: i(7574),
              articlesNewsBlogs: [
                {
                  id: 1,
                  img: i(6064),
                  titleImg: "Kitchan Design",
                  title: "Let’s Get Solution For Building Construction Work",
                  data: "26 December,2022",
                },
                {
                  id: 2,
                  img: i(1168),
                  titleImg: "Living Design",
                  title: "Low Cost Latest Invented Interior Designing Ideas.",
                  data: "22 December,2022",
                },
                {
                  id: 3,
                  img: i(5715),
                  titleImg: "Interior Design",
                  title: "Best For Any Office & Business Interior Solution",
                  data: "25 December,2022",
                },
                {
                  id: 4,
                  img: i(2879),
                  titleImg: "Kitchan Design",
                  title: "Let’s Get Solution For Building Construction Work",
                  data: "26 December,2022",
                },
                {
                  id: 5,
                  img: i(4982),
                  titleImg: "Living Design",
                  title: "Low Cost Latest Invented Interior Designing Ideas.",
                  data: "22 December,2022",
                },
                {
                  id: 6,
                  img: i(3978),
                  titleImg: "Interior Design",
                  title: "Best For Any Office & Business Interior Solution",
                  data: "25 December,2022",
                },
              ],
            };
          },
        };
        const Vt = (0, r.Z)(Nt, [["render", Ot]]);
        var Tt = Vt;
        const Zt = { class: "main-header" },
          qt = ["src"],
          St = { id: "blogDetails", class: "blogDetails content" },
          Ut = { class: "blogDetails-content" },
          Yt = (0, n._)(
            "h3",
            { class: "blogDetails-content__title" },
            " Let’s Get Solution for Building Construction Work ",
            -1
          ),
          zt = { class: "blogDetails-content-img" },
          Gt = ["src", "alt"],
          Jt = (0, n.uE)(
            '<div class="content-date"><p>26 December,2022</p><p>Interior / Home / Decore</p></div><p> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don&#39;t look even slightly believable. <br><br> Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. </p><div class="content-quote"><p>,,</p><p>The details are not the details. They make the design.</p></div><h3 class="blogDetails-content__title">Design sprints are great</h3><p> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. </p><ol class="blogDetails-content__list"><li><span> Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. </span></li><li><span> Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. </span></li><li><span> Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. </span></li></ol>',
            6
          ),
          Qt = { class: "blogDetails-content-img blogDetails-content__img2" },
          Rt = ["src"],
          Xt = (0, n._)(
            "p",
            null,
            " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. ",
            -1
          ),
          $t = { id: "tags", class: "tags" },
          te = (0, n._)("h4", { class: "tags-title" }, "Tags", -1),
          ee = { class: "tags-main" },
          ie = (0, n._)("p", null, "Kitchen", -1),
          oe = [ie],
          ne = (0, n._)("p", null, "Bedroom", -1),
          se = [ne],
          ae = (0, n._)("p", null, "Building", -1),
          re = [ae],
          le = (0, n._)("p", null, "Architecture", -1),
          ce = [le],
          ge = (0, n._)("p", null, "Kitchen Planning", -1),
          de = [ge];
        function ue(t, e, i, o, s, a) {
          const r = (0, n.up)("Header"),
            l = (0, n.up)("Footer");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              n.HY,
              null,
              [
                (0, n.Wm)(r),
                (0, n._)("main", null, [
                  (0, n._)("section", Zt, [
                    (0, n._)(
                      "img",
                      {
                        class: "main-header__baner",
                        src: s.Baner,
                        alt: "baner",
                      },
                      null,
                      8,
                      qt
                    ),
                  ]),
                  (0, n._)("section", St, [
                    (0, n._)("div", Ut, [
                      Yt,
                      (0, n._)("div", zt, [
                        (0, n._)(
                          "img",
                          {
                            class: "blogDetails-content__img",
                            src: s.articles[s.tag].img1,
                            alt: s.tag,
                          },
                          null,
                          8,
                          Gt
                        ),
                      ]),
                      Jt,
                      (0, n._)("div", Qt, [
                        (0, n._)(
                          "img",
                          {
                            class: "blogDetails-content__img",
                            src: s.articles[s.tag].img2,
                            alt: "tag",
                          },
                          null,
                          8,
                          Rt
                        ),
                      ]),
                      Xt,
                    ]),
                    (0, n._)("div", $t, [
                      te,
                      (0, n._)("div", ee, [
                        (0, n._)(
                          "div",
                          {
                            class: "tags-main-block tags-main-block__activ",
                            onClick:
                              e[0] || (e[0] = (t) => a.tagAdd("Kitchen", t)),
                          },
                          oe
                        ),
                        (0, n._)(
                          "div",
                          {
                            class: "tags-main-block",
                            onClick:
                              e[1] || (e[1] = (t) => a.tagAdd("Bedroom", t)),
                          },
                          se
                        ),
                        (0, n._)(
                          "div",
                          {
                            class: "tags-main-block",
                            onClick:
                              e[2] || (e[2] = (t) => a.tagAdd("Building", t)),
                          },
                          re
                        ),
                        (0, n._)(
                          "div",
                          {
                            class: "tags-main-block",
                            onClick:
                              e[3] ||
                              (e[3] = (t) => a.tagAdd("Architecture", t)),
                          },
                          ce
                        ),
                        (0, n._)(
                          "div",
                          {
                            class: "tags-main-block",
                            onClick:
                              e[4] ||
                              (e[4] = (t) => a.tagAdd("Kitchen Planning", t)),
                          },
                          de
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                (0, n.Wm)(l),
              ],
              64
            )
          );
        }
        var pe = {
          name: "BlogDetails",
          components: { Header: S, Footer: $ },
          data() {
            return {
              Baner: i(4486),
              tag: "Kitchen",
              articles: {
                Kitchen: { img1: i(9321), img2: i(5117) },
                Bedroom: { img1: i(9195), img2: i(5167) },
                Building: { img1: i(6693), img2: i(3669) },
                Architecture: { img1: i(1184), img2: i(6067) },
                "Kitchen Planning": { img1: i(8673), img2: i(2688) },
              },
            };
          },
          methods: {
            tagAdd(t, e) {
              const i = document.querySelectorAll(".tags-main-block");
              i.forEach((t) => t.classList.remove("tags-main-block__activ")),
                "P" === e.target.tagName
                  ? e.target.parentNode.classList.toggle(
                      "tags-main-block__activ"
                    )
                  : e.target.classList.toggle("tags-main-block__activ"),
                (this.tag = t);
            },
          },
        };
        const me = (0, r.Z)(pe, [["render", ue]]);
        var _e = me;
        const he = (0, g.p7)({
          history: (0, g.PO)(),
          routes: [
            { name: "Home", path: "/", component: it },
            { name: "Blog", path: "/blog", component: Tt },
            { name: "BlogDetails", path: "/blog_details", component: _e },
            { name: "ErrorPage", path: "/:catchAll(.*)", component: mt },
          ],
        });
        (0, o.ri)(c).use(he).mount("#app");
      },
      4486: function (t, e, i) {
        t.exports = i.p + "img/Baner.360b1063.jpg";
      },
      9321: function (t, e, i) {
        t.exports = i.p + "img/img_1.3aa27084.png";
      },
      2688: function (t, e, i) {
        t.exports = i.p + "img/img_10.361de308.jpg";
      },
      5117: function (t, e, i) {
        t.exports = i.p + "img/img_2.99387557.png";
      },
      9195: function (t, e, i) {
        t.exports = i.p + "img/img_3.ec21cb74.jpg";
      },
      5167: function (t, e, i) {
        t.exports = i.p + "img/img_4.6e3662c3.jpg";
      },
      6693: function (t, e, i) {
        t.exports = i.p + "img/img_5.f9849230.jpg";
      },
      3669: function (t, e, i) {
        t.exports = i.p + "img/img_6.c7c8de86.jpg";
      },
      1184: function (t, e, i) {
        t.exports = i.p + "img/img_7.f0b11c5c.jpg";
      },
      6067: function (t, e, i) {
        t.exports = i.p + "img/img_8.a38516c5.webp";
      },
      8673: function (t, e, i) {
        t.exports = i.p + "img/img_9.ddac86f0.jpg";
      },
      7979: function (t, e, i) {
        t.exports = i.p + "img/Baner.1fc97ef9.png";
      },
      7574: function (t, e, i) {
        t.exports = i.p + "img/LatestPost.387f1513.png";
      },
      6064: function (t, e, i) {
        t.exports = i.p + "img/imgBlog_1.0b8dab05.png";
      },
      1168: function (t, e, i) {
        t.exports = i.p + "img/imgBlog_2.8c32da76.png";
      },
      5715: function (t, e, i) {
        t.exports = i.p + "img/imgBlog_3.d5f59be0.png";
      },
      2879: function (t, e, i) {
        t.exports = i.p + "img/imgBlog_4.3ee33008.png";
      },
      4982: function (t, e, i) {
        t.exports = i.p + "img/imgBlog_5.beed51f4.png";
      },
      3978: function (t, e, i) {
        t.exports = i.p + "img/imgBlog_6.cce12703.png";
      },
      5492: function (t, e, i) {
        t.exports = i.p + "img/img_1.9cf9c939.jpg";
      },
      5162: function (t, e, i) {
        t.exports = i.p + "img/img_1.37646486.png";
      },
      2576: function (t, e, i) {
        t.exports = i.p + "img/img_2.2f08d09f.png";
      },
      9489: function (t, e, i) {
        t.exports = i.p + "img/img_3.ef1c267e.png";
      },
      62: function (t, e, i) {
        t.exports = i.p + "img/img_1.e04a6bca.png";
      },
      4089: function (t, e, i) {
        t.exports = i.p + "img/img_2.0094d9c9.png";
      },
      7729: function (t, e, i) {
        t.exports = i.p + "img/img_3.134bb12b.png";
      },
      7019: function (t, e, i) {
        t.exports = i.p + "img/img_4.627c426f.png";
      },
    },
    e = {};
  function i(o) {
    var n = e[o];
    if (void 0 !== n) return n.exports;
    var s = (e[o] = { exports: {} });
    return t[o].call(s.exports, s, s.exports, i), s.exports;
  }
  (i.m = t),
    (function () {
      var t = [];
      i.O = function (e, o, n, s) {
        if (!o) {
          var a = 1 / 0;
          for (g = 0; g < t.length; g++) {
            (o = t[g][0]), (n = t[g][1]), (s = t[g][2]);
            for (var r = !0, l = 0; l < o.length; l++)
              (!1 & s || a >= s) &&
              Object.keys(i.O).every(function (t) {
                return i.O[t](o[l]);
              })
                ? o.splice(l--, 1)
                : ((r = !1), s < a && (a = s));
            if (r) {
              t.splice(g--, 1);
              var c = n();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        s = s || 0;
        for (var g = t.length; g > 0 && t[g - 1][2] > s; g--) t[g] = t[g - 1];
        t[g] = [o, n, s];
      };
    })(),
    (function () {
      i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return i.d(e, { a: e }), e;
      };
    })(),
    (function () {
      i.d = function (t, e) {
        for (var o in e)
          i.o(e, o) &&
            !i.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
      };
    })(),
    (function () {
      i.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      i.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      i.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, o) {
          var n,
            s,
            a = o[0],
            r = o[1],
            l = o[2],
            c = 0;
          if (
            a.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (n in r) i.o(r, n) && (i.m[n] = r[n]);
            if (l) var g = l(i);
          }
          for (e && e(o); c < a.length; c++)
            (s = a[c]), i.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
          return i.O(g);
        },
        o = (self["webpackChunkinterno"] = self["webpackChunkinterno"] || []);
      o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o)));
    })();
  var o = i.O(void 0, [998], function () {
    return i(4925);
  });
  o = i.O(o);
})();
//# sourceMappingURL=app.1cbeb939.js.map