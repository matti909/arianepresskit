import qs from "qs";

const BASE_URL = process.env.BASE_URL || "http://localhost:4001";
console.log("Strapi BASE_URL:", BASE_URL);

// Helper to get full image URL (handles both relative and absolute URLs)
function getImageUrl(url: string): string {
  if (url.startsWith("http")) {
    return url; // Already absolute
  }
  return `${BASE_URL}${url}`;
}

async function getStrapiData(url: string) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Strapi URL:", error);
    return null;
  }
}

const QUERY_HOME_PAGE = {
  populate: {
    sections: {
      on: {
        "layout.hero": {
          populate: {
            picture: {
              fields: ["url", "alternativeText", "width", "height"],
            },
            logo: {
              fields: ["url", "alternativeText", "width", "height"],
            },
          },
        },
        "layout.aboutme": {
          populate: {
            image: {
              fields: ["url", "alternativeText", "width", "height"],
            },
          },
        },
        "layout.stylesound": {
          populate: {
            image: {
              fields: ["url", "alternativeText", "width", "height"],
            },
          },
        },
        "layout.killsync": {
          populate: {
            image: {
              fields: ["url", "alternativeText", "width", "height"],
            },
          },
        },
        "layout.music": {
          populate: {
            soundcloud: {
              populate: "*",
            },
            youtube: {
              populate: "*",
            },
          },
        },
        "layout.shows": {
          populate: {
            fechas: {
              populate: {
                banner: {
                  fields: ["url", "alternativeText", "width", "height"],
                },
              },
            },
          },
        },
        "layout.technical": {
          populate: {
            imagebg: {
              fields: ["url", "alternativeText", "width", "height"],
            },
            cdj: {
              fields: ["url", "alternativeText", "width", "height"],
            },
          },
        },
      },
    },
  },
};

export async function getHomePage() {
  "use cache";

  const query = qs.stringify(QUERY_HOME_PAGE, {
    encodeValuesOnly: true,
  });

  const response = await getStrapiData(`/api/home-page?${query}`);

  if (response?.data?.sections) {
    response.data.sections = response.data.sections.map((section: any) => {
      if (section.picture?.url) {
        section.picture.url = getImageUrl(section.picture.url);
      }
      if (section.logo?.url) {
        section.logo.url = getImageUrl(section.logo.url);
      }
      if (section.image?.url) {
        section.image.url = getImageUrl(section.image.url);
      }
      // Transform banner URLs inside fechas array (layout.shows)
      if (section.fechas) {
        section.fechas = section.fechas.map((fecha: any) => {
          if (fecha.banner?.url) {
            fecha.banner.url = getImageUrl(fecha.banner.url);
          }
          return fecha;
        });
      }
      // Transform imagebg and cdj URLs (layout.technical)
      if (section.imagebg?.url) {
        section.imagebg.url = getImageUrl(section.imagebg.url);
      }
      if (section.cdj?.url) {
        section.cdj.url = getImageUrl(section.cdj.url);
      }
      return section;
    });
  }

  return response?.data;
}
